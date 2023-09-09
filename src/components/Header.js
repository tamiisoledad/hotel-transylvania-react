import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return <div className="header">
    <Navbar expand='lg' className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <img style={{ width: '100%', maxHeight: '70px'}} src="/Htlogo.webp" alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px'}} navbarScroll>
            <Link to="/">Inicio</Link>
            <Link to='/nosotros'>Nosotros</Link>
            <Link to="/reservas">Reservas</Link>
            <Link href="/">Restaurante</Link>
            <Link href="/">Actividades</Link>
            <Link href="/">Tienda</Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Buscar" className="me-2" aria-label="Search"/>
            <Button variant="outline-secondary">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
}

export default Header