import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeScreen from "./Components/screens/HomeScreen";
import ProductScreen from "./Components/screens/ProductScreen";

const App = () => {
    return (
        <Router>
            <div dir="rtl">
                <Header />
                <main className="py-3">
                    <Container>
                        <Routes>
                            <Route exact path="/" element={<HomeScreen />} />
                            <Route path="/product/:id" element={<ProductScreen />} />
                        </Routes>
                    </Container>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
