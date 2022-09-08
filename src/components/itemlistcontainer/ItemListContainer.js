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
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getProductos from '../../helper/helper'

const arrayproductos=[
    {
        item:1,
        nombre: "Remera Arya Llote",
        producto:"Remera",
        descripcion:"Remera 100% algodon de algodon con cuello abierto y la imagen de Arya Llote, salvadora de los 7 reinos",
        precio:1500,
        imagen:remeraHombreArya,
        stock:15
    },
    {
        item:2,
        nombre: "Remera LloteStudio",
        producto:"Remera",
        descripcion:"Remera Hombre oversize 100% algodon con estampado LloteStudio Naranja",
        precio:1500,
        imagen:remeraHombre,
        stock:15
    },
    {
        item:3,
        nombre: "Remera Leonardo Da Llote",
        producto:"Remera",
        descripcion:"Remera oversize, 100% algodon con estampado de Leonardo Da Llote",
        precio:1500,
        imagen:remeraHombreDaVinci,
        stock:15
    },
    {
        item:4,
        nombre: "Remera LloteStudio Azul",
        producto:"remeras",
        descripcion:"Remera oversize 100% algodon con estampado LloteStudio a color en base azul",
        precio:1500,
        imagen:remeraHombreLloteAzul,
        stock:15
    },
    {
        item:5,
        nombre: "Remera Llote and chill",
        producto:"Remera",
        descripcion:"Remera oversize 100% algodon con estampado LloteStudio chillin'",
        precio:1500,
        imagen:remeraHombreLloteRelax,
        stock:15
    },
    {
        item:6,
        nombre: "Remera Llote cubico",
        producto:"Remera",
        descripcion:"Remera oversize 100% algodon con estampado LloteStudio cubico",
        precio:1500,
        imagen:remeraHombreLloteCubo,
        stock:15
    },
    {
        item:7,
        nombre: "Remera Llote Lluvia",
        producto:"Remera",
        descripcion:"Remera Lio Messi",
        precio:1500,
        imagen:remeraLluvia,
        stock:15
    },
    {
        item:8,
        nombre: "Remera Pixelada",
        producto:"Remera",
        descripcion:"Remera oversize 100% algodon con estampado LloteStudio Pixelado",
        precio:1500,
        imagen:remeraPixelada,
        stock:15
    }
]

export const ItemContainer=()=>{
    const {tipoProducto}=useParams()
    const [producto, setProducto]=useState([])
    // const obtenerProductos=()=>{
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(() => {
    //             resolve(arrayproductos)
                
    //         }, 2500);
    //     })
    // }

    useEffect(()=>{
        
        const funcionAsincrona=async()=>{
            try {
                const catalogo=await getProductos()
                if(tipoProducto===undefined){
                    setProducto(catalogo)
                }else{
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
    },[tipoProducto])

return(
    <>
        <div className='contenedorDeTarjetas'>

            {
                producto.map((item)=>{
                    return(
                    <Tarjetas propiedad={item}/>)
                })
            }

        </div>
    </>
)
}
