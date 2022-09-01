import React from 'react'
import '../../styles.css'
import ItemCount from '../itemCount/ItemCount'


export const Tarjetas = ({propiedad}) => {
    const agregarAlCarrito=(counter)=>{
        alert("Agregaste "+counter+ " productos")

    }

  return (
    <card className='contenedorCatalogo'>
      <h5 className='nombreProducto'>{propiedad.nombre}</h5>
        <div className='cardContainer'>
            
            <img className="imgProducto" src={propiedad.imagen} alt="Imagen-Producto"/>
            <p>Precio: ${propiedad.precio}</p>
        </div>    
        <ItemCount stock={propiedad.stock} initial={0} onAdd={agregarAlCarrito} />
    </card>
  )
}
