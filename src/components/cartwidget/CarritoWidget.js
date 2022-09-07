import React from 'react'
import { Link } from 'react-router-dom'
import imgCarrito from '../../assets/carrito.png'

export const CarritoWidget = ({cantidadItems}) => {

    return(
        <Link to='/carrito'>
        <div className="contenedorCarrito">
            <img className="imgCarrito"src={imgCarrito} alt="imgCarrito"/>
            <p className='parrafoCarrito'>{cantidadItems}</p>
        </div>
        </Link>
        )
}
