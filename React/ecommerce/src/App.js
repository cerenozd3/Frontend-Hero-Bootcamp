import React from "react";
import {CartProvider} from "./context/CartContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Container } from "reactstrap";
import Home from "./page/Home";
import CartPage from "./page/CartPage";
import ProductPage from "./page/ProductPage";

function App(){
  return(
    <CartProvider>
      <Router>
        <Navbar/>
        <Container>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/category/:category" element={<Home/>}/>
            <Route path="/product/:id" element={<ProductPage/>}/>
            <Route path="/cart" element={<CartPage/>}/>
          </Routes>
        </Container>
      </Router>
    </CartProvider>
  );
}

export default App;