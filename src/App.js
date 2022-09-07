import './App.css';
import NavBar from './components/NavBar/NavBar'
import {ItemContainer} from './components/itemlistcontainer/ItemListContainer';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route}from 'react-router-dom'
import { Contacto } from './components/contacto/Contacto';
import ItemCount from './components/itemCount/ItemCount';
import {useState} from 'react'
import { Carrito } from './components/cartwidget/Carrito';
function App() {
  const [cantidadItems,setCantidadItems]=useState(0)
  const[totalCantidad, setTotalCantidad]=useState(0)
  const agregarAlCarrito=(counter)=>{
    console.log('cantidad items en detail: '+counter)
    setCantidadItems(counter)

}

  return (
  <BrowserRouter>
  <div className="App">
  
  <NavBar cantidadItems={cantidadItems}/>
    <Routes>

      <Route path='/' element={<ItemContainer/>}/>
      <Route path='/carrito' element={<Carrito/>}/>
      <Route path='/productos' element={<ItemContainer/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='/productos/:tipoProducto' element={<ItemContainer/>}/>
      <Route path='/productos/s tickers' element={<ItemContainer/>}/>
      <Route path='/productos/item/:itemProducto'element={<ItemDetailContainer agregarAlCarrito={agregarAlCarrito}/>}/>

      

    </Routes> 

  
    </div>

    </BrowserRouter> 
  );
}

export default App;
