import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import '../../styles.css'
import { db } from '../../utils/firebase';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';
  
  export const Contacto=()=> {
  const [idContacto, setIdContacto]=useState()
  const subirContactoFirebase =(contacto)=>{
    const queryRef=collection(db, "contactos")
    addDoc(queryRef,contacto).then(resp=>setIdContacto(resp.id))
  }
const enviarDatos=(e)=>{
  e.preventDefault()
    let contacto={
    nombre:e.target[0].value,
    telefono:e.target[1].value,
    correo:e.target[2].value,
    mensaje:e.target[3].value

  }
  subirContactoFirebase(contacto)
  Swal.fire({
    title: 'Muchas Gracias!',
    icon: 'success',
    text: 'Tu consulta ha sido enviada!',
    showConfirmButton: true,
  }).then((result)=>{
    if(result.isConfirmed){
      window.location.href='/productos'
    }
  })
  }


  return (
    <Form className='formularioContacto' onSubmit={enviarDatos}>
      <h1>Dejanos tu comentario</h1>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Nombre*</Form.Label>
        <Form.Control placeholder="Nombre completo" required/>
        <Form.Label>Telefono Contacto*</Form.Label>
        <Form.Control type="number" placeholder="+54"required />
        <Form.Label>Correo electronico*</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Mensaje para Llotestudio</Form.Label>
        <Form.Control as="textarea" rows={3} required/>
      </Form.Group>
      <button type='submit'>Enviar</button>
    </Form>
  );
}

