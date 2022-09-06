import React, { useEffect } from 'react'
import '../../styles.css'
import ItemCount from '../itemCount/ItemCount'
import {Link}from 'react-router-dom'
import { useState} from 'react'
import { ItemDetailContainer } from '../itemDetailContainer/ItemDetailContainer'
import { DetalleModal } from '../DetalleModal/DetalleModal'


export const Tarjetas = ({propiedad}) => {
  const [verItemBoton, setVerItemBoton]=useState(false)
    const verItem=()=>{
    
      setVerItemBoton(!verItemBoton)
    }
    const stop=(e)=>{
      e.stopPropagation()
    }



  return (
    <>
<card className='contenedorCatalogo' onClick={verItem}>
      <h5 className='nombreProducto'>{propiedad.nombre}</h5>
        <div className='cardContainer'>
            
            <img className="imgProducto" src={propiedad.imagen} alt="Imagen-Producto"/>
            <p>Precio: ${propiedad.precio}</p>
            <Link to={`/productos/item/${propiedad.item}`} className="linkTarjeta">
<button className="botonComprar" onClick={verItem}>Comprar</button></Link>
        </div>    
    </card>
    
    {
      verItemBoton ?
      <div className='backGroundModal' onClick={verItem}>
      <DetalleModal item={propiedad}/>
      </div>
      :
      null

    }

    </>
  )
}
