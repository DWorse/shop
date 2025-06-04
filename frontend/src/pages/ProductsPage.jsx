import React, { useEffect, useState } from 'react';
import api from '../api/api';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products').then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h2>📦 Продукти</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            <strong>{p.name}</strong> — {p.category} — ${p.price} — {p.stock} шт
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
