import React from 'react'
import ItemCount from '../itemCount/ItemCount'
import '../../styles.css'
import { useState } from 'react'
import {Link} from 'react-router-dom'

export const DetalleModal = ({item}) => {
  const agregarAlCarrito=()=>{
    alert('producto agregado al carrito')
  }
  const prevent=(e)=>{
    e.stopPropagation()
  }



    return (
        <>

<div className='backGroundModal'>
            <div className='detalleModal' onClick={prevent}>
                <h1>Detalle del producto</h1>
                <div className='tarjetaDetail'>
                <img className="imagenDetail"src={item.imagen} alt=""/>
                <div className='textosDetail'>
                <p>Producto: {item.nombre}</p>
                <p>Descripcion: {item.descripcion}</p>
                <p>Precio: {item.precio}</p>
                <Link to={`/productos/item/${item.item}`} className="linkTarjeta">
                <button className="botonComprar">Comprar</button></Link>
            </div>
            
           </div>
            
            
        </div>
      </div>


      </>
  )
}
