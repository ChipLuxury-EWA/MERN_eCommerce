import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
// import products from "../../menu";
import Product from "../Product";
// import axios from "axios";

import productsApi from "../../api/products.api.js";

const HomeScreen = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        initializeProducts();
    }, []);

    const initializeProducts = async () => {
        setProducts(await productsApi.fetchProducts());
    };

    return (
        <>
            <h1>מנות חדשות</h1>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default HomeScreen;