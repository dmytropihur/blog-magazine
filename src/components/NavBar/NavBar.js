import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { ROUTES } from "../../configs/routes";
import { deleteCookies } from "../../helpers/deleteCookies";
import { useUserState } from "../../helpers/useUserState";
import { logout } from "../../store/userReducer";

const { home, posts, login, registration, createPost, myPosts } = ROUTES;

export const NavBar = () => {
  const dispatch = useDispatch();
  const { user, status } = useUserState();

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
            {!!user && status !== "loading" && (
              <LinkContainer to={posts}>
                <Nav.Link href={posts}>Posts</Nav.Link>
              </LinkContainer>
            )}
          </Nav>
          <Nav>
            {!user && status !== "loading" && (
              <>
                <LinkContainer to={login}>
                  <Nav.Link href={login}>Log In</Nav.Link>
                </LinkContainer>
                <LinkContainer to={registration}>
                  <Nav.Link href={registration}>Sign Up</Nav.Link>
                </LinkContainer>
              </>
            )}
            {!!user && status !== "loading" && (
              <NavDropdown title="Menu" id="collasible-nav-dropdown">
                <LinkContainer to={createPost}>
                  <NavDropdown.Item href={createPost}>
                    Create Post
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={myPosts}>
                  <NavDropdown.Item href={myPosts}>My Posts</NavDropdown.Item>
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
