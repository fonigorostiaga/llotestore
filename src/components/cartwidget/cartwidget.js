import imgCarrito from '../../img/carrito.png'

function carrito(){
    return(
    <div className="contenedorCarrito">
        <img className="imgCarrito"src={imgCarrito} alt="imgCarrito"/>
        <p className='parrafoCarrito'>4</p>
    </div>)
}
export default carrito