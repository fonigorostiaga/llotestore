import {React} from 'react'
import ItemCount from '../itemCount/ItemCount'
import '../../styles.css'
import { useState } from 'react'

export const ItemDetail = ({producto, agregarAlCarrito}) => {

  return (
    <div className='contenedorDetail'>
      <h1>Detalle del producto</h1>
      <div className='tarjetaDetail'>
        <img className="imagenDetail"src={producto.imagen} alt=""/>
        <div className='textosDetail'>
          <p>Producto: {producto.nombre}</p>
          <p>Descripcion: {producto.descripcion}</p>
          <p>Precio: {producto.precio}</p>
        </div>
        
        <div className="counterDetail">
          <ItemCount stock={producto.stock} initial={0} onAdd={agregarAlCarrito}/>
        </div>
      </div>

      
        
    </div>
  )
}
