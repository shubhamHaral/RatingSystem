// App.js

import React, { useState, useEffect } from 'react';
import ProductList from './productList';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(' https://fakestoreapi.com/products/1');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="app">
      <h1>Product Listing</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;
