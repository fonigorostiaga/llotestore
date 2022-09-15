import React from 'react'
import '../../styles.css'

export const TotalCarritoCard = ({totalProductos, precioTotal}) => {
  return (

    
    <div className='contenedorTotalCarritoCard'>
        <h1>Checkout</h1>
    <p>Cantidad total de productos:{totalProductos}</p>
    <p>Precio final: ${precioTotal} </p>
</div>
  )
}
