import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { CarritoCard } from './CarritoCard'

export const Carrito = () => {
    const {productosCarrito}=useContext(CartContext)

  return (
    <div>{productosCarrito.map(item=>{
        return(
          <CarritoCard item={item}/>
        )
    })}</div>
  )
}
