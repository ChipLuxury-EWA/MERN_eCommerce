import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import {
    Row,
    Col,
    ListGroup,
    Image,
    Form,
    Button,
    Card,
    Badge,
    Container,
} from "react-bootstrap";
import Message from "../Components/Message";
import { addToCart, removeFromCart } from "../redux/actions/cart.actions";

const Cart = () => {
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const productID = params.id;
    const location = useLocation();
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const quantity = location.search
        ? Number(location.search.split("=")[1])
        : 1;

    useEffect(() => {
        if (productID) {
            dispatch(addToCart(productID, quantity));
        }
    }, [dispatch, productID, quantity]);

    const goBack = () => {
        navigate("/");
    };

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const checkoutHandler = () => {
        console.log("checkOut");
        navigate("/login?redirect=shipping");
    };

    // TODO: replace all js code outside of return like in DynamicLists
    return (
        <Row>
            <Col md={8}>
                <h1>עגלת קניות</h1>
                {cartItems.length === 0 ? (
                    <>
                        <Link to="/">
                            <Message message="אין מוצרים בעגלה" />
                        </Link>
                        <Button onClick={goBack}>Go Back</Button>
                    </>
                ) : (
                    <ListGroup variant="flush">
                        {cartItems.map((item) => (
                            <ListGroup.Item key={item.product}>
                                <Container>
                                    <Row>
                                        <Col md={2}>
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fluid
                                                rounded
                                            />
                                        </Col>
                                        <Col md={3}>
                                            <Link
                                                to={`/product/${item.product}`}
                                            >
                                                {item.name}
                                            </Link>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Control
                                                placeholder={`${item.price} שק`}
                                                disabled
                                            />
                                        </Col>
                                        <Col md={3}>
                                            <Form.Control
                                                as="select"
                                                value={item.quantity}
                                                onChange={(e) =>
                                                    dispatch(
                                                        addToCart(
                                                            item.product,
                                                            Number(
                                                                e.target.value
                                                            )
                                                        )
                                                    )
                                                }
                                            >
                                                {[
                                                    ...Array(
                                                        item.countInStock
                                                    ).keys(),
                                                ].map((x) => (
                                                    <option
                                                        className="dropdown-item"
                                                        key={x + 1}
                                                        value={x + 1}
                                                    >
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </Col>
                                        <Col md={1}>
                                            <Button
                                                className="btn btn-warning"
                                                onClick={() =>
                                                    removeFromCartHandler(
                                                        item.product
                                                    )
                                                }
                                            >
                                                <i className="fa fa-trash"></i>
                                            </Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>
            <Col md={4}>
                <ListGroup>
                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                        <span>סה"כ מוצרים:</span>
                        <Badge className="">
                            {cartItems.reduce(
                                (acc, item) => acc + item.quantity,
                                0
                            )}
                        </Badge>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                        <span>מחיר:</span>
                        <Badge>
                            {cartItems
                                .reduce(
                                    (acc, item) =>
                                        acc + item.quantity * item.price,
                                    0
                                )
                                .toFixed(2)}
                            <i className="fa fa-shekel-sign" />{" "}
                        </Badge>
                    </ListGroup.Item>

                    <Button
                        type="button"
                        className="btn btn-lg btn-primary"
                        disabled={cartItems.length === 0}
                        onClick={checkoutHandler}
                    >
                        קנה עכשיו
                    </Button>
                </ListGroup>
            </Col>
        </Row>
    );
};

export default Cart;
