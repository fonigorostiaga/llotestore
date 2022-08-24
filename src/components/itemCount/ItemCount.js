import React from 'react'
import {useState}from 'react'
import '../../styles.css'
function ItemCount({initial,stock, onAdd} ) {
    
    const [counter, setCounter]=useState(1)
    const sumar=()=>{
        if(counter===stock){
            alert("UPS, parece que no hay mas de este producto")
        }else{
        setCounter(counter+1)}
        

    }
    const restar=()=>{
        if(counter===initial){
            alert("UPS, no podes pedir menos de 0 unidades de este producto")
        }else{
        setCounter(counter-1)}
    }
  return (
    <div className='contenedor'>ItemCount
        
            <p>Cantidad: {counter}</p>
            <div className='contenedorCounter'> 
            <button className="botonCounter" onClick={sumar}>+</button>
            
            <button className="botonCounter" onClick={restar}>-</button>
        </div>
        <button className="botonAdd"onClick={()=>(onAdd(counter))}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount