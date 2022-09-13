import {React, useState, useEffect} from 'react'
import getProductos from '../../helper/helper'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'



export const ItemDetailContainer = () => {
    const {itemProducto}=useParams()
    const [productoState, setProductoState]=useState({})
  const [loading, setLoading]=useState(true)
  console.log('itemproducto',itemProducto)


    useEffect(()=>{
      setTimeout(() => {
        setLoading(!loading)
        const funcionAsincrona=async()=>{
          
            const peticion=await getProductos();
            console.log('peticion',peticion)
            const productoFiltrado=peticion.find(prod=>prod.item===parseInt(itemProducto))
            
            setProductoState(productoFiltrado)
            
            console.log('productos',productoState)
          }
          funcionAsincrona()
        }
          , 1500);

        },[])


  return (
    <div>
    <ItemDetail loading={loading} producto={productoState}/>
    </div>
  )
}
