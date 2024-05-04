
const Button = ({onClick,ButtonType,children}) => {
  return (

<button onClick={onClick}  className= {`btn ${ButtonType==="secondary" ? "btn--secondary":""}`} >{children} </button>
  )
}

export default Button