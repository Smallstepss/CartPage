import {useContext} from 'react'
import {Link} from "react-router-dom";
import "./styles.css"
import {Carter} from "./context.js"

const HeaderNav = () => {
  const {cart} = useContext(Carter);

 

  return (
    <div>
    <span className='header'>
        React Context API Page
    </span>
    <ul className='nav'>
        <li className='prod'>
            <Link to='/'>Home page</Link>           
        </li>
        <li className='prod1'>
        <Link to='/cart'>Cart ({cart.length})</Link>
        </li>
    </ul>
      
    </div>
  )
}

export default HeaderNav
