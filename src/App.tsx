import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Store from "./pages/Store";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./Components/Navbar";
import { ShoppingCartProvider } from "./Context/ShoppingCartContext";
const App = () => {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar></Navbar>
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>{" "}
            <Route path="/About" element={<About></About>}></Route>{" "}
            <Route path="/Store" element={<Store></Store>}></Route>
          </Routes>
        </Container>{" "}
      </ShoppingCartProvider>
    </>
  );
};

export default App;
