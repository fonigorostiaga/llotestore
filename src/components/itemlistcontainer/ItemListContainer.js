import '../../styles.css'
import { Tarjetas } from '../Tarjetas/Tarjetas'
import remeraHombreArya from '../../assets/remeraHombreAryaStark.png'
import remeraHombreDaVinci from '../../assets/remeraHombreDaVinci.png'
import React, { useState, useEffect } from 'react'
const arrayproductos=[
    {
        item:1,
        nombre: "remeraHombreArya",
        producto:"Remera Hombre",
        descripcion:"Remera Arya Stark ",
        precio:1500,
        imagen:remeraHombreArya,
        stock:15
    },
    {
        item:2,
        nombre: "remeraHombreSpiderman",
        producto:"Remera Hombre",
        descripcion:"Remera SpiderMan ",
        precio:1500,
        imagen:remeraHombreDaVinci,
        stock:15
    },
    {
        item:3,
        nombre: "remeraHombreHulk",
        producto:"Remera Hombre",
        descripcion:"Remera Hulk ",
        precio:1500,
        imagen:remeraHombreArya,
        stock:15
    },
    {
        item:4,
        nombre: "remeraHombreTioSam",
        producto:"Remera Hombre",
        descripcion:"Remera Tio Sam ",
        precio:1500,
        imagen:remeraHombreDaVinci,
        stock:15
    },
    {
        item:5,
        nombre: "remeraHombreLlote",
        producto:"Remera Hombre",
        descripcion:"Remera Llotestudio ",
        precio:1500,
        imagen:remeraHombreArya,
        stock:15
    },
    {
        item:6,
        nombre: "remeraHombreDavinci",
        producto:"Remera Hombre",
        descripcion:"Remera Leo Davinci ",
        precio:1500,
        imagen:remeraHombreDaVinci,
        stock:15
    },
    {
        item:7,
        nombre: "remeraHombreMessi",
        producto:"Remera Hombre",
        descripcion:"Remera Lio Messi",
        precio:1500,
        imagen:remeraHombreArya,
        stock:15
    },
    {
        item:8,
        nombre: "remeraHombreDiegote",
        producto:"Remera Hombre",
        descripcion:"Remera Diegote",
        precio:1500,
        imagen:remeraHombreDaVinci,
        stock:15
    }
]

export const ItemContainer=()=>{
    const [producto, setProducto]=useState([])
    const obtenerProductos=()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(arrayproductos)
                
            }, 2500);
        })
    }

    useEffect(()=>{
        const funcionAsincrona=async()=>{
            try {
                const catalogo=await obtenerProductos()
                setProducto(catalogo)
                console.log(catalogo)
            } catch (error) {
                alert("hubo un error")
            }
        }
        funcionAsincrona();
    },[])

return(
    <>
        <div className='contenedorDeTarjetas'>
            {/* <Tarjetas propiedad={producto[0]}/>
            <Tarjetas propiedad={producto[1]}/>
            <Tarjetas propiedad={producto[3]}/> */}
            {
                producto.map((remera)=>{
                    return(
                    <Tarjetas propiedad={remera}/>)
                })
            }

        </div>
    </>
)
}
