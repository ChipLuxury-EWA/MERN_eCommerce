import { useState, useEffect } from "react";
import { Form, Button, Row, Col, Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Message from "../Components/Message.js";
import Loader from "../Components/Loader.js";
import FormContainer from "../Components/FormContainer.js";
import { register } from "../redux/actions/user.actions.js";

const RegisterScreen = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);
    const userLogin = useSelector((state) => state.registeredUser);
    const { loading, error, registeredUserData } = userLogin;
    const redirect = location.search ? location.search.split("=")[1] : "/";

    useEffect(() => {
        if (registeredUserData) {
            navigate(redirect);
        }
    }, [navigate, registeredUserData, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage("סיסמאות לא תואמות");
        } else {
            dispatch(register(name, email, password));
        }
    };

    //TODO: change labels to floating labels
    return (
        <FormContainer>
            <h1>הרשמה</h1>
            {message && <Message message={message} variant="danger" />}
            {error && <Message message={error} variant="danger" />}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Row>
                    <Form.Group controlId="name">
                        <Form.Label>שם:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="הכנס שם"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                </Row>
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
                    <Col>
                        <Form.Group controlId="password">
                            <Form.Label>סיסמא:</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="הכנס סיסמא"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="confirmPassword">
                            <Form.Label>אמת סיסמא:</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="אמת סיסמא"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                            ></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="pt-2">
                    <Col xs={6}>
                        <Button type="submit">הרשמה</Button>
                    </Col>
                </Row>
            </Form>
            <Row>
                <Col>
                    <Badge className="btn btn-sm bg-info" onClick={()=>navigate("/login")}>כבר נרשמת? היכנס</Badge>
                </Col>
            </Row>
        </FormContainer>
    );
};

export default RegisterScreen;
