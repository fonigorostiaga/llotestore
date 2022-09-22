import { useEffect, useState } from "react";
import { createContext } from "react";
import getProductos from "../../helper/helper";

export const CartContext = createContext();
export const CartProvider=({children})=>{
    const [productosCarrito, setProductosCarrito]=useState([])
    const [totalProductos, setTotalProductos]=useState(0)
    const [precioTotal, setPrecioTotal]=useState(0)
    const [order, setOrder]=useState()

    const calcularTotalProductos=(producto)=>{
        const sumaProductos=producto.cantidad
        const acumulador=sumaProductos+totalProductos
        setTotalProductos(acumulador)


    }
    const vaciarCarrito=()=>{
        setProductosCarrito([])
        setTotalProductos(0)
    }

    const ordenObjeto=(elemento)=>{
        const crearUser={...order,buyer:elemento}

        setOrder(crearUser)
    
    }

    const isinCart=(producto)=>{
        return(
        productosCarrito.some(el=>el.item===producto.item)
    )}
            const calcularPrecioTotal=(array)=>{
                let acumuladorPrecio=0
                for(let i of array){
                    acumuladorPrecio=acumuladorPrecio+(i.cantidad*i.precio)
                    
                }
                setPrecioTotal(acumuladorPrecio)

                
            }
    
    const sumaProductosAlCarrito=(producto)=>{
        if(isinCart(producto)){
            calcularTotalProductos(producto)
            const arrayVerificacion=[...productosCarrito]
            const productoRepetido=arrayVerificacion.filter(el=>el.item===producto.item)
            productoRepetido[0].cantidad+=producto.cantidad
            const carritoModificado=productosCarrito.filter(el=>el.item!==producto.item)
            const nuevoArray=[...carritoModificado,productoRepetido[0]]
            setProductosCarrito(nuevoArray)
            calcularPrecioTotal(nuevoArray)
            const nuevaOrder={...order}
            nuevaOrder.items=nuevoArray
            setOrder(nuevaOrder)

        }else{

        calcularTotalProductos(producto)

        const nuevaLista=[...productosCarrito,producto]
        setProductosCarrito(nuevaLista)
        calcularPrecioTotal(nuevaLista)
        
            const nuevaOrder={...order}
        setOrder(nuevaOrder)

            



}
    }
    const eliminarProducto=(productoEliminado)=>{
        const pedidoModificado=[...productosCarrito]
        const nuevoArray=pedidoModificado.filter(el=>el.item!==productoEliminado.item)
        const cantidadModificada=totalProductos
        const nuevoTotal=cantidadModificada-productoEliminado.cantidad

        setTotalProductos(nuevoTotal)
        setProductosCarrito(nuevoArray)
        calcularPrecioTotal(nuevoArray)
        const nuevaOrder={...order}
        nuevaOrder.items=nuevoArray
        setOrder(nuevaOrder)

    }

    return(
        <CartContext.Provider value={
            {productosCarrito, sumaProductosAlCarrito, eliminarProducto, totalProductos, precioTotal,ordenObjeto, order, vaciarCarrito}
        
        }>
            
            {children}

        </CartContext.Provider>

    )
}