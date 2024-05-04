import { useRef, useState } from "react"
import Button from "./Button"

export const AddItemForm = ({OnAddItem}) => {
  const [ItemText,SetItemText] = useState("");
  const inputRef= useRef();
  const handlSubmit=(e)=>{
    e.preventDefault();
    if(!ItemText){
      alert("inout canot be empty");
      inputRef.current.focus();
      return
    }
    
    OnAddItem(ItemText);
    SetItemText("");
  }
  return (
    <form onSubmit={handlSubmit}>
    <h2>Add an items </h2>
    <input  ref={inputRef} value={ItemText} onChange={(e)=>{

      SetItemText(e.target.value);
      
    }} 
    autoFocus
    />
    <Button> Add to list </Button>
</form>
  )
}
