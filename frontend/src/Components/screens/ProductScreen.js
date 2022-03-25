import React, { useState, useEffect } from "react";
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { fetchProductById } from "../../services/products.service.js";
import Rating from "../Rating";

const ProductScreen = () => {
    const [product, setProduct] = useState({});
    const params = useParams();

    useEffect(() => {
        async function getProduct() {
            setProduct(await fetchProductById(params.id));
        }
        getProduct();
    }, [params.id]);

    return (
        <>
            <Link to="/" className="btn btn-primary btn-lg my-3">
                תפריט ראשי
            </Link>

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
                        <ListGroup.Item>מחיר: ₪{product.price}</ListGroup.Item>
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

                            <ListGroup.Item>
                                <Button
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
        </>
    );
};

export default ProductScreen;
