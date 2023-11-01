import CartWidget from "../CartWidget/CarWidget"
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import classes from './Navbar.module.css';

function BasicExample() {
  return (
    <Navbar expand="lg" className= {classes.padrenavbar}>
      <Container>
        <Link to="/"><img src="/img/logo.png"/></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={classes.apartadosnavbar} >
          <Link to ="/" className={classes.botoninicio}>Inicio</Link>
          <NavDropdown title="Productos" id="basic-nav-dropdown">
              <Link className={classes.botonapartados} to="/category/vehículos">Vehículos</Link>
              <Link className={classes.botonapartados} to="/category/repuestos">Repuestos</Link>
              <Link className={classes.botonapartados} to="/category/servicios">Servicios</Link>
            </NavDropdown>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;