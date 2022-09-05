import {React, useState, useEffect} from 'react'
import getProductos from '../../helper/helper'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {
    const {item}=useParams()
    const [productoState, setProductoState]=useState({})
    useEffect(()=>{
        const funcionAsincrona=async()=>{
            const peticion=await getProductos();
            console.log('peticion',peticion)
            const productoFiltrado=peticion.find(prod=>prod.item===item)
            
            setProductoState(productoFiltrado)
            
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
