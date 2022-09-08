import './App.css';
import NavBar from './components/NavBar/NavBar'
import {ItemContainer} from './components/itemlistcontainer/ItemListContainer';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route}from 'react-router-dom'
import { Contacto } from './components/contacto/Contacto';
import ItemCount from './components/itemCount/ItemCount';
import {useState} from 'react'
import { Carrito } from './components/cartwidget/Carrito';
import { CartProvider } from './components/Context/CartContext';
function App() {

  return (
    <CartProvider>
  <BrowserRouter>
  <div className="App">
  
  <NavBar/>
    <Routes>

      <Route path='/' element={<ItemContainer/>}/>
      <Route path='/carrito' element={<Carrito/>}/>
      <Route path='/productos' element={<ItemContainer/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='/productos/:tipoProducto' element={<ItemContainer/>}/>
      <Route path='/productos/s tickers' element={<ItemContainer/>}/>
      <Route path='/productos/item/:itemProducto'element={<ItemDetailContainer/>}/>

      

    </Routes> 

  
    </div>

    </BrowserRouter> 
    </CartProvider>
  );
}

export default App;
