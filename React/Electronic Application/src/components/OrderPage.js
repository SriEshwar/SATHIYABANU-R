import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './OrderPage.css';

const OrderPage = () => {
  const { orders, cancelOrder } = useContext(CartContext);

  return (
    <div className="order-page container">
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>You have no orders.</p>
      ) : (
        orders.map(order => (
          <div key={order.id} className="order">
            <h3>Order #{order.id}</h3>
            <ul>
              {order.items.map(item => (
                <li key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <div className="order-item-info">
                    <h4>{item.title}</h4>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${item.price.toFixed(2)}</p>
                    <p className="total-price">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button onClick={() => cancelOrder(order.id)} className="cancel-order-btn">Cancel Order</button>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderPage;
