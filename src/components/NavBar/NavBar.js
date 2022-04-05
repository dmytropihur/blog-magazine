import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { deleteCookies } from "../../helpers/deleteCookies";
import { logout } from "../../store/actionCreators/user.actionCreator";

export const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  console.log(user);

  const onLogout = () => {
    deleteCookies();
    dispatch(logout());
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand style={{ fontSize: "25px" }}>
          Panorama.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link href="/"></Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            {!user && (
              <>
                <LinkContainer to="/login">
                  <Nav.Link href="/login">Log In</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/registration">
                  <Nav.Link href="/registration">Sign Up</Nav.Link>
                </LinkContainer>
              </>
            )}
            {!!user && (
              <>
                <NavDropdown title="Menu" id="collasible-nav-dropdown">
                  <LinkContainer to="/login">
                    <NavDropdown.Item as="button" onClick={onLogout} href="/">
                      Log Out
                    </NavDropdown.Item>
                  </LinkContainer>
                  {/* <LinkContainer to="/">
                    <NavDropdown.Item href="/">Action</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/">
                    <NavDropdown.Item href="/">Action</NavDropdown.Item>
                  </LinkContainer> */}
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
