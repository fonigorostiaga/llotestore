import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import imgCarrito from '../../assets/carrito.png'
import { CartContext } from '../Context/CartContext'

export const CarritoWidget = () => {
    const {productosCarrito, totalProductos}=useContext(CartContext)
    console.log(productosCarrito.length)
    // const [totalProductosCarrito, setTotalProductosCarrito]=useState(0)
    // for(let i=0;i=productosCarrito.length;i++){
    //     const totalProductos=0
    //     totalProductos=totalProductos+(productosCarrito[i].cantidad)
    //     setTotalProductosCarrito(totalProductos)
    // }
    return(
        <Link to='/carrito'>
        <div className="contenedorCarrito">
            <img className="imgCarrito"src={imgCarrito} alt="imgCarrito"/>
            <p className='parrafoCarrito'>{productosCarrito.length}</p>
        </div>
        </Link>
        )
}
