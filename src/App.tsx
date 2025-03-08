import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Store from "./pages/Store";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./Components/Navbar";
import { ShoppingCartProvider } from "./Context/ShoppingCartContext";

const App = () => {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
};

export default App;
