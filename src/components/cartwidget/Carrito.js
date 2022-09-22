import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { CarritoCard } from './CarritoCard'
import { TotalCarritoCard } from './TotalCarritoCard'
import '../../styles.css'
import { CarritoForm } from './CarritoForm'
import {db} from '../../utils/firebase'
import { addDoc, collection, doc, Timestamp, updateDoc } from 'firebase/firestore'
import {ModalCarrito} from './ModalCarrito'
import {Salida} from './Salida'

export const Carrito = () => {
    const {productosCarrito, precioTotal, totalProductos, order, vaciarCarrito}=useContext(CartContext)
    const [modal, setModal]=useState(false)
    const [idPedido, setIdPedido]=useState()
    const [pedidoPagado, setPedidoPagado]=useState(false)
    const pedido={
      ...order, items:productosCarrito, total:precioTotal,pagado:false,fecha:Timestamp.fromDate(new Date())

    }
const confirmarOrden=()=>{
  if(productosCarrito.length>0){
  const queryRef=collection(db,"orders");
  addDoc(queryRef,pedido).then(resp=>setIdPedido(resp.id))
  setModal(!modal)
}
else{
  alert("No incluiste ningun item a tu orden")
}}


const cambiarModal=()=>{
  const queryRef=doc(db, "orders", idPedido);
  updateDoc(queryRef, {
    ...order, total:precioTotal, pagado:true
  }).then(resp=>console.log("resp"))
  setModal(!modal)
  vaciarCarrito()
  setPedidoPagado(!pedidoPagado)


}

const cancelar=()=>{
  setModal(!modal)
}
return(

<>{
pedidoPagado?
<Salida/>:
(

modal?

<ModalCarrito idPedido={idPedido} cancelar={cancelar} pedido={pedido} cambiarModal={cambiarModal}/>
  :
(

order.buyer===undefined?
<CarritoForm />
:
<div>{productosCarrito.map(item=>{
  return(
    <CarritoCard item={item}/>
  )
})}
  
  <TotalCarritoCard precioTotal={precioTotal} totalProductos={totalProductos}/>

  <button className='crearOrden' onClick={confirmarOrden}>Crear Orden</button>

</div>
))}
</>
    )

  }


