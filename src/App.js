import './App.css';
import NavBar from './components/NavBar/NavBar'
import {ItemContainer} from './components/itemlistcontainer/ItemListContainer';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route}from 'react-router-dom'
import { Contacto } from './components/contacto/Contacto';
function App() {
  return (
  <BrowserRouter>
  <div className="App">
  
  <NavBar/>
    <Routes>

      <Route path='/' element={<ItemContainer/>}/>
      <Route path='/productos' element={<ItemContainer/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='/productos/:tipoProducto' element={<ItemContainer/>}/>
      <Route path='/productos/stickers' element={<ItemContainer/>}/>
      <Route path='/productos/item/:itemProducto'element={<ItemDetailContainer/>}/>

      

      
      {/* <ItemContainer/>
    <ItemDetailContainer/> */}
    </Routes> 
    </div>

    </BrowserRouter> 
  );
}

export default App;
