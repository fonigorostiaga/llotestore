import {React, useState, useEffect} from 'react'
import getProductos from '../../helper/helper'
import { ItemDetail } from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {

  
    const [productoState, setProductoState]=useState({})
    useEffect(()=>{
        const funcionAsincrona=async()=>{
            const peticion=await getProductos();
            console.log(peticion)
            
            setProductoState(peticion.find(el=>el.item===1))
            console.log('productos',productoState)
        }
        funcionAsincrona()

    },[])


  return (
    <div>
    <ItemDetail producto={productoState}/>
    </div>
  )
}
