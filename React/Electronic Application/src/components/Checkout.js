import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);

  const handleCheckout = () => {
    // Implement payment logic here
    alert('Checkout successful');
    clearCart();
  };

  return (
    <div>
      <h3>Checkout</h3>
      <div>
        {cart.map((product) => (
          <div key={product.id}>
            <h4>{product.title}</h4>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
      <button onClick={handleCheckout}>Place Order</button>
    </div>
  );
};

export default Checkout;
