import { AddItemForm } from "./AddItemForm"
import { ButtonGroup } from "./ButtonGroup"

export const Sidbar = ({handleAddItem ,handleRemoveAllItems,handleResetToinial,handAsAllmarkComplete,HandleMarkAsIncompleted}) => {
  return (
    <div className="sidebar">
        <AddItemForm OnAddItem= {handleAddItem} />
        <ButtonGroup handleRemoveAllItems ={handleRemoveAllItems} 
        handleResetToinial ={handleResetToinial}
        handAsAllmarkComplete={handAsAllmarkComplete}
        />
    </div>
  )
}
