import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../redux/actions/user.actions";

const Header = () => {
    const dispatch = useDispatch();
    const { loading, error, loggedUserData } = useSelector(
        (state) => state.loggedUser
    );

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header>
            <Navbar bg="primary" expand="sm">
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
                            {loggedUserData ? (
                                <NavDropdown title={loggedUserData.name} id='username' >
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>פּרוֹפִיל</NavDropdown.Item>
                                    </LinkContainer>
                                        <NavDropdown.Item onClick={logoutHandler}>יציאה</NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <LinkContainer to="/login">
                                    <Nav.Link>
                                        <i className="fas fa-user"></i> כניסה
                                    </Nav.Link>
                                </LinkContainer>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
