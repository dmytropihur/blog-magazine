import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { LinkContainer } from "react-router-bootstrap";

export const NavBar = () => {
const {currentUser} = useSelector(state => state.userReducer)


  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" style={{ fontSize: "25px" }}>
          Panorama.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/registration">
              <Nav.Link href="#features">Features</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <LinkContainer to="/login">
              <Nav.Link href="/login">Log In</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/registration">
              <Nav.Link href="/registration">Sign Up</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <LinkContainer to="/">
                <NavDropdown.Item href="/">Action</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
