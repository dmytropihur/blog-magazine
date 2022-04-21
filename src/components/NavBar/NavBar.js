import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { ROUTES } from "../../configs/routes";
import { deleteCookies } from "../../helpers/deleteCookies";
import { useGetUser } from "../../helpers/useGetUser";
import { logout } from "../../store/actionCreators/user.actionCreator";

const { home, posts, login, registration, createPost } = ROUTES;
console.log(home);

export const NavBar = () => {
  const dispatch = useDispatch();
  const { user } = useGetUser();

  const onLogout = () => {
    deleteCookies();
    dispatch(logout());
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand style={{ fontSize: "25px" }}>Panorama.</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {!!user && (
              <LinkContainer to={posts}>
                <Nav.Link href={posts}>Posts</Nav.Link>
              </LinkContainer>
            )}
          </Nav>
          <Nav>
            {!user && (
              <>
                <LinkContainer to={login}>
                  <Nav.Link href={login}>Log In</Nav.Link>
                </LinkContainer>
                <LinkContainer to={registration}>
                  <Nav.Link href={registration}>Sign Up</Nav.Link>
                </LinkContainer>
              </>
            )}
            {!!user && (
              <NavDropdown title="Menu" id="collasible-nav-dropdown">
                <LinkContainer to={createPost}>
                  <NavDropdown.Item href={createPost}>
                    Create Post
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={home}>
                  <NavDropdown.Item as="button" onClick={onLogout} href={home}>
                    Log Out
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
