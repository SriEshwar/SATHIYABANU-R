import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css';

const CartPage = () => {
  const { cartItems, removeFromCart, placeOrder } = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page container">
      {/* <h2>Your Cart</h2> */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="cart-item-info">
                <h4>{item.title}</h4>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total Amount: ${total.toFixed(2)}</h3>
            <button onClick={placeOrder} className="place-order-btn">Place Order</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;





// import React, { useContext } from 'react';
// import { CartContext } from '../context/CartContext';
// import './Cart.css';

// const CartPage = () => {
//   const { cartItems, removeFromCart } = useContext(CartContext);

//   const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <div className="cart-page container">
//       {/* <h2>Your Cart</h2> */}
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           {cartItems.map(item => (
//             <div key={item.id} className="cart-item">
//               <img src={item.image} alt={item.title} />
//               <div className="cart-item-info">
//                 <h4>{item.title}</h4>
//                 <p>Quantity: {item.quantity}</p>
//                 <p>Price: ${item.price.toFixed(2)}</p>
//                 <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
//                 <button onClick={() => removeFromCart(item.id)}>Remove</button>
//               </div>
//             </div>
//           ))}
//           <div className="cart-total">
//             <h3>Total Amount: ${total.toFixed(2)}</h3>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;

