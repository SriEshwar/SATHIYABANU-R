// import React from 'react';
// import { Link } from 'react-router-dom';
// import products from '../data/products';
// import './ProductList.css';

// const ProductList = () => {
//   return (
//     <div className="product-list container">
//       {products.map((product) => (
//         <div key={product.id} className="product-item">
//           <img src={typeof product.image === 'function' ? product.image() : product.image} alt={product.title} />
//           <h4>{product.title}</h4>
//           <p>${product.price.toFixed(2)}</p>
//           <Link to={`/product/${product.id}`}>View Details</Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;








import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/product';
import './ProductList.css'; // Make sure to add appropriate styling in ProductList.css

const ProductList = () => {
  return (
    <div className="product-list container">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <p>${product.price.toFixed(2)}</p>
          <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;









// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './ProductList.css';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then((res) => res.json())
//       .then((data) => setProducts(data));
//   }, []);

//   return (
//     <div>
//       <h3>Products</h3>
//       <div className="product-list">
//         {products.map((product) => (
//           <div key={product.id} className="product-item">
//             <h4>{product.title}</h4>
//             <img src={product.image} alt={product.title} />
//             <p>${product.price}</p>
//             <Link to={`/product/${product.id}`}>View Details</Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;
