
import './App.css';
import  Header from './components/HeaderNav.js';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./components/Home.js";
import Cart from "./components/Cart.js";



function App() {

 

  return (
    <BrowserRouter>
     <Header />
     <div className='App'>
       <Routes>      
         
          <Route path='/' element={ <Home /> } />
       
          <Route path='/cart' element={ <Cart/> } /> 
               
        </Routes>
     </div>

    </BrowserRouter>
  );
}

export default App;



