import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Home from "./components/Home";
import Store from "./components/Store";
import About from "./components/About";
import ShoppingCartProvider from "./context/ShoppingCartContext";
import Footer from "./components/Footer";
import SingleProduct from "./components/SingleProduct";

import Product from "./components/Product";
import SeconNavBar from "./components/SeconNavBar";

const App = () => {
  return (
    <ShoppingCartProvider >
    
      <SeconNavBar/>
      <Container fluid className="p-0 m-0 body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
      </Container>
      <Footer/>
    </ShoppingCartProvider>
  );
};

export default App;
