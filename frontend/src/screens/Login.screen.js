import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import Message from "../Components/Message.js";
import Loader from "../Components/Loader.js";
import FormContainer from "../Components/FormContainer.js";
import { login } from "../redux/actions/user.actions.js";

const LoginScreen = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { loading, error, loggedUserData } = useSelector(
        (state) => state.loggedUser
    );
    const redirect = location.search ? location.search.split("=")[1] : "/";

    useEffect(() => {
        if (loggedUserData) {
            navigate(redirect);
        }
    }, [navigate, redirect, loggedUserData]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    
    return (
        <FormContainer>
            <h1>כניסה</h1>
            {error && <Message message={error} variant="danger" />}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Row>
                    <Form.Group controlId="email">
                        <Form.Label>כתובת אימייל:</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="הכנס האימייל"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group controlId="password">
                        <Form.Label>סיסמא:</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="הכנס סיסמא"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                </Row>
                <Row className="pt-2">
                    <Col xs={6}>
                        <Button type="submit" variant="primary">
                            היכנס
                        </Button>
                    </Col>
                    <Col xs={6}>
                        <Button
                            onClick={() =>
                                navigate(
                                    redirect
                                        ? `/register?redirect=${redirect}`
                                        : "/register"
                                )
                            }
                        >
                            הרשמה
                        </Button>
                    </Col>
                </Row>
            </Form>
        </FormContainer>
    );
};

export default LoginScreen;
