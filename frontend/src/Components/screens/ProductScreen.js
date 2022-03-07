import React from "react";
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Rating from "../Rating";
import proudcts from "../../menu";

const ProductScreen = () => {
    const params = useParams();
    const product = proudcts.find((p) => p._id === params.id);

    return <>
    <Link to='/' className="btn btn-light my-3">תפריט ראשי</Link>
    {product.name}</>;
};

export default ProductScreen;
