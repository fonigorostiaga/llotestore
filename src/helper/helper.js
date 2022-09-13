import remeraHombreArya from '../assets/remeraHombreAryaStark.png'
import remeraHombreDaVinci from '../assets/remeraHombreDaVinci.png'
import remeraHombre from '../assets/remeraHombre.png'
import remeraHombreLloteAzul from '../assets/remeraHombreLloteAzul.png'
import remeraHombreLloteRelax from '../assets/remeraHombreLloteRelax.png'
import remeraHombreLloteCubo from '../assets/remeraHombreLloteCubo.png'
import remeraLluvia from '../assets/remeraHombreLluviablanca.png'
import remeraPixelada from '../assets/remeraPixelada.png'
import buzoSanLlotinBlanco from '../assets/BuzoSanLlotinBlanco.png'
import buzoSanLlotinGris from '../assets/BuzoSanLlotinGris.png'
// import remeraLloteLluvia from '../assets/remeraHombreLluviaBlanca.png'
const productos=[
    {
        item:1,
        nombre: "Remera Arya Llote",
        producto:"remeras",
        descripcion:"Remera 100% algodon de algodon con cuello abierto y la imagen de Arya Llote, salvadora de los 7 reinos",
        precio:1500,
        imagen:remeraHombreArya,
        stock:15
    },
    {
        item:2,
        nombre: "Remera LloteStudio",
        producto:"remeras",
        descripcion:"Remera Hombre oversize 100% algodon con estampado LloteStudio Naranja",
        precio:1500,
        imagen:remeraHombre,
        stock:15
    },
    {
        item:3,
        nombre: "Remera Leonardo Da Llote",
        producto:"remeras",
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
        producto:"remeras",
        descripcion:"Remera oversize 100% algodon con estampado LloteStudio chillin'",
        precio:1500,
        imagen:remeraHombreLloteRelax,
        stock:15
    },
    {
        item:6,
        nombre: "Remera Llote cubico",
        producto:"remeras",
        descripcion:"Remera oversize 100% algodon con estampado LloteStudio cubico",
        precio:1500,
        imagen:remeraHombreLloteCubo,
        stock:15
    },
    {
        item:7,
        nombre: "Remera Llote Lluvia",
        producto:"remeras",
        descripcion:"Remera Lio Messi",
        precio:1500,
        imagen:remeraLluvia,
        stock:15
    },
    {
        item:8,
        nombre: "Remera Pixelada",
        producto:"remeras",
        descripcion:"Remera oversize 100% algodon con estampado LloteStudio Pixelado",
        precio:1500,
        imagen:remeraPixelada,
        stock:15
    },
    {
        item:9,
        nombre: "Buzo San Llotin",
        producto:"buzos",
        descripcion:"Buzo cangurito con capucha, color gris, imagen de San Llotin que te ayudara a buscar a tu media Llotenaranja",
        precio:1500,
        imagen:buzoSanLlotinGris,
        stock:15
    },
    {
        item:10,
        nombre: "Buzo San Llotin",
        producto:"buzos",
        descripcion:"Buzo cangurito con capucha, color blanco, imagen de San Llotin que te ayudara a buscar a tu media Llotenaranja",
        precio:1500,
        imagen:buzoSanLlotinBlanco,
        stock:15
    }
]
const getProductos =()=>{
    return new Promise((resolve, reject)=>{
      
            resolve(productos);
            reject(error=>console.log(error))
       
    })
}
export default getProductos