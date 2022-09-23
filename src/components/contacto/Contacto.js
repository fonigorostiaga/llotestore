import { doc, getDoc } from 'firebase/firestore'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import '../../styles.css'
import {db} from '../../utils/firebase'
import { CartContext } from '../Context/CartContext'
import { ItemContainer } from '../itemlistcontainer/ItemListContainer'
export const Contacto = () => {
  const {productosCarrito}=useContext(CartContext)
  const corregirStock=()=>{
    for(let producto of productosCarrito){
      console.log(producto)
    }
    // for(let i=0;i=productosCarrito.length;i++){
    //   console.log(productosCarrito[i])
    //   const query=doc(db,"productos", productosCarrito[i].item)
    //   const hola= await getDoc(query)
    // const chau={...hola.data(),item:hola.id, stock:10}
    // console.log(chau)}
    }

  return (

    <div>
      <button onClick={corregirStock}>click</button>

    </div>
  )}
