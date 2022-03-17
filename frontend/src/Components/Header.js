import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
    return (
        <header>
            <Navbar bg="primary" expand="lg" >
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <img
                                src="/logos/pri-alin.png"
                                width="60"
                                height="60"
                                // className="d-inline-block align-top"
                                alt="Pri-alin logo"
                            />{" "}
                            פרי-אלין
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle id="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/cart">
                                <Nav.Link>
                                    <i className="fas fa-shopping-cart"></i>{" "}
                                    עגלת קניות
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link>
                                    <i className="fas fa-user"></i> כניסה
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
