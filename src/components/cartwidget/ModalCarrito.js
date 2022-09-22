import React from 'react'
import '../../styles.css'

export const ModalCarrito = ({idPedido, cambiarModal, cancelar,pedido}) => {

  return (
    <div className='backGroundModal'>
      <div className='detalleModal'>
        <h1>Revisa tu pedido</h1>
      <p>Tu pedido: {idPedido}</p>
      <p>Total a pagar: ${pedido.total}</p>
      <p>Entrega a nombre de: {pedido.buyer.nombre}</p>
      <p>Cantidad de Items {pedido.items.length}</p>
      <div className='pago'> 
          <input type='number' min='370000000000000'max='9999999999999999'className="tarjeta" placeholder='numero de tarjeta' required/>
          
          <div className='vencimiento'>
          <input type='number' min='1' max='12'className='vtoInput' placeholder='MM' required/><input type='number' min='22' max='28'className='vtoInput' placeholder='AA' required/>
          <input type='number' min='000' max='9999' className='codInput' placeholder='Cod' required/>
          </div>
      </div>
        <button onClick={()=>cambiarModal()}>Enviar</button><button className='cancelar'onClick={()=>cancelar()}>Cancelar</button>

        </div>
    </div>
  )
}
