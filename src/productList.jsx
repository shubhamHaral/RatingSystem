import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './product';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Product List</h1>
      <div className="product-list">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
