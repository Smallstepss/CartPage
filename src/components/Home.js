
import { faker } from '@faker-js/faker';
import { useState} from 'react';
import SingleProductt from './SingleProductt';
import "./styles.css";
//import {Carter} from "./context.js"

faker.seed(100);  //To generate one type of random content from faker

const Home = () => {
  

    const productsArray=[...Array(20)].map(()=>
       ( {
        id:faker.string.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:faker.image.url()

         } ));

        
      
const [products] = useState(productsArray)



  return (
    <div className='productContainer'>
    {products.map((prod=>(

<SingleProductt 
key={prod.id} 
prod={prod} 
/>

    )))}
      
    </div>
  )
}

export default Home
