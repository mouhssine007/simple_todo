import { useMemo, useState } from "react"
import { EmptyView } from "./EmptyView"
import Select from 'react-select'


const sortingOption = [
  {
    label : "Sort by default",
    value: "default",

  },
  {
    label : "Sort by packed",
    value: "packed",

  },
  {
    label : "Sort by unpacked",
    value: "unpacked",

  }

]
export const ItemList = ({items,handleDeleteItem,handlToggleItem}) => {
  const [sortBy,setSortBy] = useState("default");
  const sortedItems = useMemo(()=>[...items].sort((a,b)=>{
    if(sortBy =="packed"){
      return b.packed - a.packed;
    }
    if(sortBy == "unpacked"){
      return a.packed - b.packed;
    }
    return;
  }),[items,sortBy])
  return (
    <ul className="item-list" >
        {items.length === 0 && <EmptyView /> }
        {items.length > 0 ? <section className="sorting"> 
         <Select onChange={(option)=>setSortBy(option.value)} defaultValue={sortingOption[0]} options={sortingOption} />
         </section> : null}
      {sortedItems.map((item)=>{
        return <Item  key={item.id}   
         item={item} onDeleteItem={handleDeleteItem}
         onToggleItem ={handlToggleItem}
          />
      })} 
    </ul>
  )
}

function Item({item , onDeleteItem ,onToggleItem}){
  return( 
    <li className="item">
      
      <label htmlFor=""><input onChange={()=> onToggleItem(item.id)} type="checkbox" checked={item.packed}  /> {item.name} </label>
      <button onClick={()=> onDeleteItem(item.id)}>❌</button>
    </li>
    
  )
}