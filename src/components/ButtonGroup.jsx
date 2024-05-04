import Button from "./Button"

export const ButtonGroup = ({handleRemoveAllItems,handleResetToinial,handAsAllmarkComplete,HandleMarkAsIncompleted}) => {
  
  return (
    <section  className="button-group">


     <Button  onClick={handAsAllmarkComplete} ButtonType="secondary"  >Mark all as complete </Button>
     <Button onClick={HandleMarkAsIncompleted} ButtonType="secondary"  >Mark all as Incomplete </Button>
     <Button onClick={handleResetToinial} ButtonType="secondary"  >Reset All items </Button>
     <Button onClick={handleRemoveAllItems} ButtonType="secondary"  >Remove All </Button>

{/* {secondaryButtons.map((text,index)=>{
        return <Button  type="secondary" key={index} > {text} </Button>
      })}*/}
   
    </section>
  )
}
