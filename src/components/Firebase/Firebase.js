import React from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect } from 'react'
import {db} from '../../utils/firebase'
import { useState } from 'react'

export const Firebase = () => {
    const[arregloProductos,setArregloProductos]=useState([])
    useEffect(()=>{
        const getData= async()=>{
            //consulta o referencia a la base de datos
            const query=collection(db,"productos");
            const response=await getDocs(query)
            const elementos=response.docs
            const productos=elementos.map(doc=>{return{
                ...doc.data(),item:doc.id
                
            }})
            setArregloProductos(productos)
            
            console.log(arregloProductos)
        }   
        getData()
    },[])
  
    return (
    <div>
        hola
        <p>{arregloProductos[0].imagen}</p>
        <img src={`${arregloProductos[0].imagen}`}></img>
    </div>
  )
}
