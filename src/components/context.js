import {createContext,useState} from 'react'

export const Carter= createContext()

const Context = ({children}) => {
 
    const [cart,setCart] =useState([]);   

    return (

    <Carter.Provider value={{cart,setCart}}>
        {children}
    </Carter.Provider>
      
    
  )
}

export default Context
