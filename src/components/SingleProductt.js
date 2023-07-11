import {useContext} from 'react'
import {Carter} from "./context.js"

const SingleProductt = ({prod}) => {

    const {cart,setCart} = useContext(Carter);

   
  return (
    <div className='products'>
<img src={prod.image} alt={prod.name}/>
<div className='productDesc'>
<span style={{fontWeight:700}}>{prod.name}</span>
<span>₹ {prod.price.substring(0,3)}</span>
</div>
{cart.includes(prod)?(  <button className="add" onClick={()=>{
        setCart(cart.filter((c)=> c.id !==prod.id))
     }}>
Remove From Cart
     </button> ) : (<button className='add' onClick={()=>{
        setCart([...cart,prod]);
     }}>Add to cart</button> )

}   
    
    </div>
  );
}

export default SingleProductt;
