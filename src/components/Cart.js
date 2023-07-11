import {useContext} from 'react'
import SingleProductt from './SingleProductt'
import { useEffect,useState } from 'react'
import {Carter} from "./context.js"

const Cart = () => {

  const [total,setTotal]=useState();

  const {cart} = useContext(Carter);

   
useEffect(()=>{
  setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price),0));
},[cart])


  return (
    <div>
      <span style={{fontSize:30}}>My cart</span>
      <br/>
      <span style={{fontSize:30}}>Total : Rs.{total}</span>
   <div className='productContainer'>{}</div>
   <div className='productContainer'>

   {cart.map((prod) => (
    <SingleProductt key={prod.id}  prod={prod} />
   ))}

   </div>
    </div>
  )
}

export default Cart
