import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import products from '../data/product';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
    alert('Product added to cart!');
  };

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-detail container">
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>{product.price.toFixed(2)}</h3>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;





// import React, { useContext } from 'react';
// import { useParams } from 'react-router-dom';
// import { CartContext } from '../context/CartContext';
// import products from '../data/product';
// import './ProductDetail.css';

// const ProductDetail = () => {
//   const { id } = useParams();
//   const product = products.find(p => p.id === parseInt(id));
//   const { addToCart } = useContext(CartContext);

//   if (!product) {
//     return <div>Product not found!</div>;
//   }

//   return (
//     <div className="product-detail container">
//       <img src={product.image} alt={product.title} />
//       <div className="product-info">
//         <h2>{product.title}</h2>
//         <p>{product.description}</p>
//         {/* Remove the $ symbol */}
//         <h3>{product.price.toFixed(2)}</h3>
//         <button onClick={() => addToCart(product)}>Add to Cart</button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;




// import React, { useContext } from 'react';
// import { useParams } from 'react-router-dom';
// import { CartContext } from '../context/CartContext';
// import products from '../data/product';
// import './ProductDetail.css';

// const ProductDetail = () => {
//   const { id } = useParams();
//   const product = products.find(p => p.id === parseInt(id));
//   const { addToCart } = useContext(CartContext);

//   if (!product) {
//     return <div>Product not found!</div>;
//   }

//   return (
//     <div className="product-detail container">
//       <img src={product.image} alt={product.title} />
//       <div className="product-info">
//         <h2>{product.title}</h2>
//         <p>{product.description}</p>
//         <h3>Rs.{product.price.toFixed(2)}</h3>
//         <button onClick={() => addToCart(product)}>Add to Cart</button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
