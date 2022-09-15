import {React} from 'react'
import ItemCount from '../itemCount/ItemCount'
import '../../styles.css'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import cargando from '../../assets/loading.gif'

export const ItemDetail = ({producto, loading}) => {
  const {sumaProductosAlCarrito}=useContext(CartContext)

  const agregarAlCarrito=(counter)=>{
    const nuevoProducto={...producto,cantidad:counter}//aca le estoy agregando una propiedad "cantidad" al objeto para poder pasarle la variable counter
    console.log(nuevoProducto)
    sumaProductosAlCarrito(nuevoProducto) 

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
          <p>Producto: {producto.nombre}</p>
          <p>Descripcion: {producto.descripcion}</p>
          <p>Precio: ${producto.precio}</p>
        </div>
        
        <div className="counterDetail">
          <ItemCount stock={producto.stock} initial={0} onAdd={agregarAlCarrito}/>
        </div>
      </div>

      
        
    </div>
  )
}
