import {React, useState, useEffect} from 'react'
import getProductos from '../../helper/helper'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'



export const ItemDetailContainer = ({agregarAlCarrito}) => {
    const {itemProducto}=useParams()
    const [productoState, setProductoState]=useState({})

  console.log('itemproducto',itemProducto)


    useEffect(()=>{
      
        const funcionAsincrona=async()=>{
            const peticion=await getProductos();
            console.log('peticion',peticion)
            const productoFiltrado=peticion.find(prod=>prod.item===parseInt(itemProducto))
            
            setProductoState(productoFiltrado)
            
            console.log('productos',productoState)
        }
        funcionAsincrona()

    },[])


  return (
    <div>
    <ItemDetail agregarAlCarrito={agregarAlCarrito} producto={productoState}/>
    </div>
  )
}
