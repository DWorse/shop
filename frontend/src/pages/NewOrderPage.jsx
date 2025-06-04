import React, { useState } from 'react';
import api from '../api/api';

const NewOrderPage = () => {
  const [customerName, setCustomerName] = useState('');
  const [message, setMessage] = useState('');

  const createOrder = () => {
    if (!customerName.trim()) return alert('Введіть імʼя покупця');
    api.post('/orders', { customerName }).then(res => {
      setMessage(`✅ Замовлення #${res.data.id} створено`);
      setCustomerName('');
    });
  };

  return (
    <div>
      <h2>➕ Створити нове замовлення</h2>
      <input
        type="text"
        placeholder="Імʼя покупця"
        value={customerName}
        onChange={e => setCustomerName(e.target.value)}
      />
      <button onClick={createOrder}>Створити</button>
      <div>{message}</div>
    </div>
  );
};

export default NewOrderPage;
