import React, { useEffect, useState } from 'react';
import api from '../api/api';

const OrderCard = ({ order }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get(`/order-items/by-order/${order.id}`).then(res => setItems(res.data));
  }, [order.id]);

  return (
    <div style={{ border: '1px solid #888', padding: '10px', marginBottom: '10px' }}>
      <h3>Замовлення #{order.id}</h3>
      <p>Клієнт: {order.customerName}</p>
      <p>Дата: {order.date}</p>
      <p>Статус: {order.status}</p>
      <div>
        <h4>Товари:</h4>
        {items.map(item => (
          <div key={item.id} style={{ marginLeft: '10px' }}>
            <p>
              {item.product.name} (кількість: {item.quantity})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderCard;
