import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import remeraHombreArya from '../../assets/remeraHombreAryaStark.png'
import remeraHombreDaVinci from '../../assets/remeraHombreDaVinci.png'
import remeraHombre from '../../assets/remeraHombre.png'
import remeraHombreLloteAzul from '../../assets/remeraHombreLloteAzul.png'
import remeraHombreLloteRelax from '../../assets/remeraHombreLloteRelax.png'
import remeraHombreLloteCubo from '../../assets/remeraHombreLloteCubo.png'
import remeraLluvia from '../../assets/remeraHombreLluviablanca.png'
import remeraPixelada from '../../assets/remeraPixelada.png'
import '../../styles.css'

export const CarritoCard = ({item}) => {
    const {eliminarProducto}=useContext(CartContext)
    
    return (
        <>
            <div className="contenedorCarritoCard">
                <div className='contenedorImagenCarritoCard'>
                    <img className="imagenCarritoCard" src={item.imagen} alt="imagenProducto"/>
                </div>
                <div className="contenedorTextoCarritoCard">
                    <p>{item.nombre}</p>
                    <p>{item.descripcion}</p>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Precio: {item.precio}</p>
                </div>
                <button className="botonEliminarProducto" onClick={()=>eliminarProducto(item)}>Eliminar</button>
            </div>
        
        </>
   
  )
}
