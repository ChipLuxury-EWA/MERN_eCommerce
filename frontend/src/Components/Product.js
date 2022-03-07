import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from './Rating'

const Product = ({ product }) => {
    // console.log(__dirname);
    // console.log(product.image);
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`product/${product._id}`}>
                <Card.Img src={product.image} variant="top" />
            </Link>
            <Card.Body>
                <Link to={`product/${product._id}`}>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="h6">{product.description}</Card.Text>
                <Card.Text as="h3">₪{product.price}</Card.Text>
                <Card.Text as="div">
                    <Rating rate={product.rating} reviews={product.numReviews} />
                </Card.Text>

            </Card.Body>
        </Card>
    );
};

export default Product;
