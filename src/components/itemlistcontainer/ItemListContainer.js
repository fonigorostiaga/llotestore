import '../../styles.css'
import { Tarjetas } from '../Tarjetas/Tarjetas'
import remeraHombreArya from '../../assets/remeraHombreAryaStark.png'
import remeraHombreDaVinci from '../../assets/remeraHombreDaVinci.png'
import remeraHombre from '../../assets/remeraHombre.png'
import remeraHombreLloteAzul from '../../assets/remeraHombreLloteAzul.png'
import remeraHombreLloteRelax from '../../assets/remeraHombreLloteRelax.png'
import remeraHombreLloteCubo from '../../assets/remeraHombreLloteCubo.png'
import remeraLluvia from '../../assets/remeraHombreLluviablanca.png'
import remeraPixelada from '../../assets/remeraPixelada.png'
import cargando from '../../assets/loading.gif'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getProductos from '../../helper/helper'
import { collection, getDocs } from 'firebase/firestore'
import {db} from '../../utils/firebase'



export const ItemContainer=()=>{
    const {tipoProducto}=useParams()
    const [producto, setProducto]=useState([])
    const [loading, setLoading]=useState(true)

    useEffect(()=>{
            
            const funcionAsincrona=async()=>{
                try {
                    const query=collection(db,"productos")
                    const response=await getDocs(query)
                    const elementos=response.docs
                    const arrayProductos=elementos.map(item=>{return{...item.data(),item:item.id}})
                    console.log(arrayProductos)
                    if(tipoProducto===undefined){
                        setLoading(false)
                        setProducto(arrayProductos)
                    }else{
                        setLoading(false)

                        const productosFiltrados=arrayProductos.filter(el=>el.producto===tipoProducto)
                        setProducto(productosFiltrados)
                    }
                } catch (error) {
                    alert("hubo un error")
                }
            }
            funcionAsincrona();     
        

    },[tipoProducto])

return(
    <>
      {loading?
      <div>
        <img src={cargando} alt="cargando"></img>
      </div>

      :
        <div className='contenedorDeTarjetas'>

            {
                producto.map((item)=>{
                    return(
                    <Tarjetas propiedad={item}/>)
                })
            }

        </div>}
    </>
)
}
