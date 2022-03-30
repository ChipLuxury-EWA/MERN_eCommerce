import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Button,
    Card,
    Col,
    Form,
    Image,
    ListGroup,
    Row,
} from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import Rating from "../Rating";
import { listProductDetails } from "../../redux/actions/product.actions.js";
import Loader from "../Loader.js";
import Message from "../Message.js";

const ProductScreen = () => {
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        dispatch(listProductDetails(params.id));
    }, [dispatch, params.id]);

    const addToCart = () => {
        navigate(`/cart/${params.id}?quantity=${quantity}`)
    }

    return (
        <>
            <Link to="/" className="btn btn-primary btn-lg my-3">
                תפריט ראשי
            </Link>

            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <Row>
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid />
                    </Col>
                    <Col md={3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating
                                    rate={product.rating}
                                    reviews={product.numReviews}
                                />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                מחיר: ₪{product.price}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                תיאור: {product.description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Row>
                                        <Col>מחיר:</Col>
                                        <Col>
                                            <strong>₪{product.price}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Row>
                                        <Col>מלאי:</Col>
                                        <Col>
                                            <strong>
                                                {product.countInStock > 0
                                                    ? "במלאי"
                                                    : "חסר"}
                                            </strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                {product.countInStock > 0 && (
                                    <ListGroup>
                                        <Row>
                                        {/* TODO: fix the bootswatch dropdown arrow */}
                                            <Col>כמות</Col>
                                            <Col>
                                                <Form.Control
                                                    as="select"
                                                    value={quantity}
                                                    onChange={(e) =>
                                                        setQuantity(
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    {[
                                                        ...Array(
                                                            product.countInStock
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
                                        </Row>
                                    </ListGroup>
                                )}

                                <ListGroup.Item>
                                    <Button
                                        onClick={addToCart}
                                        type="button"
                                        disabled={product.countInStock === 0}
                                    >
                                        הוסף לעגלה
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            )}
        </>
    );
};

export default ProductScreen;
