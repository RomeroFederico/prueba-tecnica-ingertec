import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Face from '../SVG/Face';

import s from './NavbarHome.module.css';

export default function NavbarHome() {
  return (
    <Navbar bg="primary" expand="md" variant="dark">
      <Container>
        <Navbar.Brand>
          <Container>
            <div className = {s.icoContainer}>
              <Face />
            </div>
            {" "} Mi Blog
          </Container>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Inicio</Nav.Link>
            <Nav.Link>Acerca de Mi</Nav.Link>
            <NavDropdown title="Mis Favoritos" id="basic-nav-dropdown">
              <NavDropdown.Item>Series</NavDropdown.Item>
              <NavDropdown.Item>Videojuegos</NavDropdown.Item>
              <NavDropdown.Item>Lugares</NavDropdown.Item>
              <NavDropdown.Item>Comidas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}