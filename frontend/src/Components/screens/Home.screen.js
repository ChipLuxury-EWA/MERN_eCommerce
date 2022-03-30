import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
//Redux:
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../redux/actions/product.actions.js";
//Components:
import Loader from "../Loader.js";
import Message from "../Message.js";
import Product from "../Product";


const HomeScreen = () => {
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <>
            <h1>מנות חדשות</h1>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message />
            ) : (
                <Row>
                    {products.map((product) => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
            )}
        </>
    );
};

export default HomeScreen;
