import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeScreen from "./screens/Home.screen";
import ProductScreen from "./screens/Product.screen";
import NotFound from "./screens/NotFound.screen";
import Cart from "./screens/Cart.screen";

const App = () => {
    return (
        <Router>
            <div dir="rtl">
                <Header />
                <main className="py-3">
                    <Container>
                        <Routes>
                            <Route exact path="/" element={<HomeScreen />} />
                            <Route path="product/:id" element={<ProductScreen />} />
                            <Route path="cart" element={<Cart />}>
                                <Route path=":id" element={<Cart />} />
                            </Route>
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Container>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
