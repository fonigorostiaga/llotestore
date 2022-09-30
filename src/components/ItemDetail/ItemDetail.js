import {React} from 'react'
import ItemCount from '../itemCount/ItemCount'
import '../../styles.css'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import cargando from '../../assets/loading.gif'
import { Link } from 'react-router-dom'

export const ItemDetail = ({producto, loading}) => {
  const {sumaProductosAlCarrito}=useContext(CartContext)
  const [continuar, setContinuar]=useState(false)

  const agregarAlCarrito=(counter)=>{
    const nuevoProducto={...producto,cantidad:counter}//aca le estoy agregando una propiedad "cantidad" al objeto para poder pasarle la variable counter
    sumaProductosAlCarrito(nuevoProducto) 
    setContinuar(!continuar)

}

  return (
    
    <div className='contenedorDetail'>
      <h1>Detalle del producto</h1>
      <div className='tarjetaDetail'>
        {loading?
        <img className="imagenDetail"src={cargando} alt=""/>
      :
      <img className="imagenDetail"src={producto.imagen} alt=""/>

      }
        <div className='textosDetail'>
          <p>Producto: <b>{producto.nombre}</b></p>
          <p>Descripcion:<b> {producto.descripcion}</b></p>
          <p>Precio:<b> ${producto.precio}</b></p>
        </div>
        
        <div className="counterDetail">
          <ItemCount stock={producto.stock} initial={0} onAdd={agregarAlCarrito}/>
          {continuar?
          <div className='contenedorContinuar'>
          <Link to='/productos'><button className='botonesContinuar' >Continuar</button></Link>
          <Link to='/carrito'><button className='botonesContinuar' as={Link} to='/carrito'>Ver carrito</button></Link>
          </div>

          :
          null
          }
        </div>
      </div>

      
        
    </div>
  )
}
