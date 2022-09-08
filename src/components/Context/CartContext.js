import { useEffect, useState } from "react";
import { createContext } from "react";
import getProductos from "../../helper/helper";

export const CartContext = createContext();
export const CartProvider=({children})=>{
    const [productosCarrito, setProductosCarrito]=useState([])

    const isinCart=(producto)=>{
        return(
        productosCarrito.some(el=>el.item===producto.item)
    )}
    const sumaProductosAlCarrito=(producto)=>{
        if(isinCart(producto)){
            const arrayVerificacion=[...productosCarrito]
            const productoRepetido=arrayVerificacion.filter(el=>el.item===producto.item)
            productoRepetido[0].cantidad+=producto.cantidad
            const carritoModificado=productosCarrito.filter(el=>el.item!==producto.item)
            const nuevoArray=[...carritoModificado,productoRepetido[0]]
            setProductosCarrito(nuevoArray)
        }else{
        const nuevaLista=[...productosCarrito,producto]
        setProductosCarrito(nuevaLista)
}
    }
    const eliminarProducto=(idProductoEliminado)=>{
        const pedidoModificado=[...productosCarrito]
        const nuevoArray=pedidoModificado.filter(el=>el.item!==idProductoEliminado)
        setProductosCarrito(nuevoArray)
    }

    return(
        <CartContext.Provider value={
            {productosCarrito, sumaProductosAlCarrito, eliminarProducto}
        
        }>
            
            {children}

        </CartContext.Provider>

    )
}