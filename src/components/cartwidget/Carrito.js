import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { CarritoCard } from './CarritoCard'
import { TotalCarritoCard } from './TotalCarritoCard'

export const Carrito = () => {
    const {productosCarrito, precioTotal, totalProductos}=useContext(CartContext)

  return (
    <div>{productosCarrito.map(item=>{
        return(
          <CarritoCard item={item}/>
        )
    })}
        
        <TotalCarritoCard precioTotal={precioTotal} totalProductos={totalProductos}/>

    </div>
    
  )
}
