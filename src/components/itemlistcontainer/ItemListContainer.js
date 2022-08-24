import '../../styles.css'
import ItemCount from '../itemCount/ItemCount'

const ItemContainer=({greetings})=>{
    const agregarAlCarrito=(counter)=>{
        alert("Agregaste "+counter+ " productos")

    }
return(
    <>
        <div>
            <p className="parrafoGreetings">{greetings}</p>
            <ItemCount stock={5} initial={0} onAdd={agregarAlCarrito}/>
        
        </div>
    </>
)
}
export default ItemContainer