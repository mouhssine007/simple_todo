import { useState } from "react"
import { BackgroundHeading } from "./BackgroundHeading"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { ItemList } from "./ItemList"
import { Sidbar } from "./Sidbar"
import { IntialItems } from "../lib/constants"

function App(){
  const [items ,setItem] = useState(IntialItems);
const handleAddItem = (newItemText)=>{
  const newItem ={
    id:new Date().getTime(),
    name:newItemText,
    packed:false,
  }
  const newItems = [...items,newItem];
  setItem(newItems);
}
const handleRemoveAllItems = ()=>{
setItem([]);
};

const handleResetToinial = ()=>{
  setItem(IntialItems);
}

const handAsAllmarkComplete = ()=>{
  const newItems = items.map((item)=>{
    return {...item,packed:true}
  });
  setItem(newItems);
}

const HandleMarkAsIncompleted = ()=>{
  const newItem = items.map((item)=>{
    return {...item ,packed:false}
  });
  setItem(newItem);

}

const handleDeleteItem=(id)=>{
const newItems = items.filter((item)=>item.id !==id);
setItem(newItems);
}
const handlToggleItem = (id)=>{
const newItems = items.map((item)=>{
  if(item.id === id){
 
    return {...item , packed: !item.packed}

  }
  return item;
}) ;
setItem(newItems);
}
const totalNumberOfItem=items.length;

  return (

    <div>
    <BackgroundHeading />
    <main>
      <Header numberOfItemsPacked={items.filter(item=>item.packed).length}
      
      
      
      totalNumberOfItem= {totalNumberOfItem}  />
      <ItemList handlToggleItem= {handlToggleItem}  items={items} handleDeleteItem={handleDeleteItem} />
      <Sidbar handleAddItem={handleAddItem}
      handleRemoveAllItems={handleRemoveAllItems}

      handleResetToinial={handleResetToinial}

      handAsAllmarkComplete={handAsAllmarkComplete}
      HandleMarkAsIncompleted= {HandleMarkAsIncompleted}
     
      />
    </main>
    <Footer />
    </div>
  )
}

export default App