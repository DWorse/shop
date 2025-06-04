import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div style={{ border: '1px solid #ccc', marginBottom: '1rem', padding: '1rem' }}>
      <h4>{product.name}</h4>
      <p>Категорія: {product.category}</p>
      <p>Ціна: ${product.price}</p>
      <p>В наявності: {product.stock}</p>
    </div>
  );
};

export default ProductCard;
