import React from 'react'
import '../../styles.css'
import ItemCount from '../itemCount/ItemCount'

export const Tarjetas = ({propiedad}) => {
    const agregarAlCarrito=(counter)=>{
        alert("Agregaste "+counter+ " productos")

    }

  return (
    <card className='contenedorCatalogo'>
        <div className='cardContainer'>
            <p>{propiedad.producto}</p>
            <img className="imgProducto" src={propiedad.imagen} alt="Imagen-Producto"/>
        </div>    
        <ItemCount stock={propiedad.stock} initial={0} onAdd={agregarAlCarrito} />
    </card>
  )
}
