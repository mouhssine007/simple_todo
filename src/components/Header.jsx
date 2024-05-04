import Counter from "./Counter"
import Logo from "./Logo"


export const Header = ({totalNumberOfItem,numberOfItemsPacked}) => {
  return (
    <header>

        <Logo />
        <Counter totalNumberOfItem= {totalNumberOfItem}  numberOfItemsPacked={numberOfItemsPacked} />
    </header >
  )
}
