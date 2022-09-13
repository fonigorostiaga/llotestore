import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import imgCarrito from '../../assets/carrito.png'
import { CartContext } from '../Context/CartContext'

export const CarritoWidget = () => {
    const {productosCarrito, totalProductos}=useContext(CartContext)
    console.log(productosCarrito.length)
    return(
        <Link to='/carrito'>
        <div className="contenedorCarrito">
            <img className="imgCarrito"src={imgCarrito} alt="imgCarrito"/>
            <p className='parrafoCarrito'>{totalProductos}</p>
        </div>
        </Link>
        )
}
