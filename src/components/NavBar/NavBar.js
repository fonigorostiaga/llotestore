import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../styles.css'
import icono from '../../assets/icono.png'
import {Outlet, Link} from 'react-router-dom'
import { CarritoWidget } from '../cartwidget/CarritoWidget';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';


function BasicExample() {
  const {totalProductos}=useContext(CartContext)
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/productos"><img  className="icono" src={icono} alt="icono"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/productos"className="link">LloteStudio</Nav.Link>

            <Nav.Link as={Link} to="/contacto" className="link">Contacto</Nav.Link>
            <NavDropdown className="link" title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/productos/remeras">Remeras</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos/buzos">
                Buzos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos/stickers">Stickers</NavDropdown.Item>
              
              <NavDropdown.Item as={Link} to="/productos/tazas" href="#action/3.4">
                Tazas
              </NavDropdown.Item>
            </NavDropdown>
            

          </Nav>
          {(totalProductos>0)?
          <CarritoWidget/>
          :
          null
          }
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;