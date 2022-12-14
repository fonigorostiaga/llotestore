import {React, useState, useEffect} from 'react'
import getProductos from '../../helper/helper'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import {db} from '../../utils/firebase'
import { collection, getDocs, doc, getDoc } from 'firebase/firestore'
import { Link } from 'react-router-dom'

export const ItemDetailContainer = () => {
    const {itemProducto}=useParams()
    const [productoState, setProductoState]=useState({})
  const [loading, setLoading]=useState(true)
  const {continuar, setContinuar}=useState(true)


useEffect(()=>{
  setTimeout(() => {
    const getDocumento=async()=>{
      setLoading(!loading)
      const query=doc(db,"productos",itemProducto);
      const response=await getDoc(query)
      const productoFiltrado={...response.data(),item:response.id}
      setProductoState(productoFiltrado)
    }
    getDocumento()
  }, 2000);




},[])


  return (
    <div>
    <ItemDetail loading={loading} producto={productoState}/>

    </div>
  )
}
