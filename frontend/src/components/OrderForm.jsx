import React, { useEffect, useState } from 'react';
import api from '../api/api';

const OrderForm = () => {
  const [products, setProducts] = useState([]);
  const [customerName, setCustomerName] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    api.get('/products').then(res => setProducts(res.data));
  }, []);

  const addItemRow = () => {
    setSelectedItems(prev => [...prev, { productId: '', quantity: 1 }]);
  };

  const updateItem = (index, field, value) => {
    const updated = [...selectedItems];
    updated[index][field] = value;
    setSelectedItems(updated);
  };

  const submitOrder = async e => {
    e.preventDefault();

    const orderPayload = {
      customerName,
      items: selectedItems.map(item => ({
        product: { id: Number(item.productId) },
        quantity: Number(item.quantity),
      })),
    };

    const { data: newOrder } = await api.post('/orders', orderPayload);

    for (const item of selectedItems) {
      await api.post('/order-items', {
        order: { id: newOrder.id },
        product: { id: Number(item.productId) },
        quantity: Number(item.quantity),
      });
    }

    setCustomerName('');
    setSelectedItems([]);
    alert('Замовлення створено');
  };

  return (
    <form onSubmit={submitOrder}>
      <div>
        <label>Ім'я Клієнта:</label><br />
        <input
          type="text"
          value={customerName}
          onChange={e => setCustomerName(e.target.value)}
          required
        />
      </div>
      <div style={{ marginTop: '10px' }}>
        <h4>Товари:</h4>
        {selectedItems.map((item, idx) => (
          <div key={idx} style={{ marginBottom: '10px' }}>
            <select
              value={item.productId}
              onChange={e => updateItem(idx, 'productId', e.target.value)}
              required
            >
              <option value="">Оберіть товар</option>
              {products.map(p => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={e => updateItem(idx, 'quantity', e.target.value)}
              style={{ width: '60px', marginLeft: '10px' }}
            />
          </div>
        ))}
        <button type="button" onClick={addItemRow}>Додати товар</button>
      </div>
      <button type="submit" style={{ marginTop: '20px' }}>Створити Замовлення</button>
    </form>
  );
};

export default OrderForm;
