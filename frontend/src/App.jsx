import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import OrdersPage from './pages/OrdersPage';
import NewOrderPage from './pages/NewOrderPage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">📦 Продукти</Link> |{" "}
        <Link to="/orders">🧾 Замовлення</Link> |{" "}
        <Link to="/new-order">➕ Нове замовлення</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/new-order" element={<NewOrderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
