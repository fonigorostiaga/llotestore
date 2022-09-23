import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'


export const CarritoForm = () => {
const {productosCarrito, precioTotal, ordenObjeto, order}=useContext(CartContext)
const setUser=(e)=>{
  e.preventDefault()
  const pedido={
      nombre:e.target[0].value,
      apodo:e.target[1].value,
      direccion:e.target[2].value,
      telefono:e.target[3].value,
      mail:e.target[4].value,
    }


  ordenObjeto(pedido)
  
}
  return (
    <div className="contenedorForm" >

  <form onSubmit={setUser}>
    <h1>Completa tus datos</h1>
<input type="text" placeholder='Nombre completo' required/>
<input type="text" placeholder='Apodo'required/>
<input type="text" placeholder='Direccion de envio'required/>
<input type="text" placeholder='Telefono'required/>
<input type="email" placeholder='Email'required/>
<button type="submit">Generar perfil</button>

</form>

</div>
  
  )
}
