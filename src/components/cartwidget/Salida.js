import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'
import '../../styles.css'
export const Salida = () => {
    const {order}=useContext(CartContext)

  return (
    <div className='contenedorSalida'>
        <div className='textosSalida'>
        <h1>¡Muchas gracias por tu compra!</h1>
        <p>Te enviamos un correo electronico con los detalles de tu pedido para que puedas hacerle seguimiento.</p>
        
        <Link to='/productos'><button>Continuar como {order.buyer.apodo}</button></Link>
        <button className='botonSalir'>Salir</button>
        </div>
    </div>
  )
}
