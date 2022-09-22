import React from 'react'
import { useState } from 'react'
import '../../styles.css'
import { ItemContainer } from '../itemlistcontainer/ItemListContainer'
export const Contacto = () => {
    const [clickeaste,setClick]=useState(false)
const clickHecho =()=>{
  window.location.href='/productos'
}

  return (

    <div>
      <button onClick={clickHecho}>click</button>
{
      clickeaste ?
        <div className='backgroundModal'>



            <ItemContainer/>
      <button onClick={clickHecho}>salir</button>
          </div>

          :
          null
        
}
    </div>
  )
}
