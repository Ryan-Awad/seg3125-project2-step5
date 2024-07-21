import React, { Component } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../styles/navbar.css';

class GlobalNavbar extends Component {
  state = {}
  render() { 
    return (
      <Navbar expand="lg" className="bg-body-tertiary navbar-custom">
        <Container>
          <Navbar.Brand href="/">
            <img 
              src="./assets/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link aria-label='Browse' href="./browse">Browse</Nav.Link>
              <Nav.Link aria-label='Guides' href="./guides">Guides</Nav.Link>
              <Nav.Link aria-label='Meet with an expert' href="./experts">Meet with an expert</Nav.Link>
              <Nav.Link aria-label='Chat with the community' href="./forum">Chat with the community</Nav.Link>
              <Nav.Link aria-label='My Cart' href="./payment">My Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
 
export default GlobalNavbar;