import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../styles.css'
import icono from '../../img/icono.png'
import Carrito from '../cartwidget/cartwidget'

function BasicExample() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img className="icono" src={icono} alt="icono"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="link" href="#home">LloteStudio</Nav.Link>
            <Nav.Link className="link" href="#link">Contacto</Nav.Link>
            <NavDropdown className="link" title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Buzos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Stickers</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.4">
                Tazas
              </NavDropdown.Item>
            </NavDropdown>
            

          </Nav>
          <Carrito></Carrito>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;