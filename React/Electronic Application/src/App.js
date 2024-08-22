import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import CartPage from './Pages/CartPage';
import CheckoutPage from './Pages/CheckoutPage';
// import LoginPage from './Pages/LoginPage';
import OrderPage from './components/OrderPage';
import ProductDetail from './components/ProductDetail';
import { CartProvider } from './context/CartContext';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/orders" element={<OrderPage />} /> 
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
