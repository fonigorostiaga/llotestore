import React from 'react'
import ItemCount from '../itemCount/ItemCount'
import '../../styles.css'
import { useState } from 'react'
import {Link} from 'react-router-dom'

export const DetalleModal = ({item}) => {
  const agregarAlCarrito=()=>{
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
                <p>Producto: <b>{item.nombre}</b></p>
                <p>Descripcion:<b> {item.descripcion}</b></p>
                <p>Precio:<b> ${item.precio}</b></p>
                <Link to={`/productos/item/${item.item}`} className="linkTarjeta">
                <button className="botonComprar">Comprar</button></Link>
            </div>
            
           </div>
            
            
        </div>
      </div>


      </>
  )
}
