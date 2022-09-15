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



export const ItemContainer=()=>{
    const {tipoProducto}=useParams()
    const [producto, setProducto]=useState([])
    const [loading, setLoading]=useState(true)

    useEffect(()=>{
        setTimeout(() => {
            
            const funcionAsincrona=async()=>{
                try {
                    const catalogo=await getProductos()
                    if(tipoProducto===undefined){
                        setLoading(false)
                        setProducto(catalogo)
                    }else{
                        setLoading(false)

                        const productosFiltrados=catalogo.filter(el=>el.producto===tipoProducto)
                        console.log('nuevalista',productosFiltrados)
                        setProducto(productosFiltrados)
                        console.log(catalogo)
                    }
                } catch (error) {
                    alert("hubo un error")
                }
            }
            funcionAsincrona();     
        }, 1500);
        

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
