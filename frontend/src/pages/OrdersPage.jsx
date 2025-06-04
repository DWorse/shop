import React, { useEffect, useState } from 'react';
import api from '../api/api';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get('/orders').then(res => setOrders(res.data));
  }, []);

  return (
    <div>
      <h2>🧾 Усі замовлення</h2>
      {orders.map(order => (
        <div key={order.id}>
          <strong>#{order.id}</strong> — {order.customerName} — {order.status} — {order.date}
        </div>
      ))}
    </div>
  );
};

export default OrdersPage;
