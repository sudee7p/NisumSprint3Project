import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrderHistory from './pages/OrderHistory';
import OrderDashboard from './pages/OrderDashboard';
import OrderStatus from './pages/OrderStatus';
import ActionPage from './pages/ActionPage';
import WarehouseDetails from './pages/WarehouseDetails';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<OrderHistory />} />
            <Route path="/order/:orderId" element={<OrderDashboard />} />
            <Route path="/order/:orderId/status" element={<OrderStatus />} />
            <Route path="/order/:orderId/actions" element={<ActionPage />} />
            <Route path="/warehouse/:warehouseId" element={<WarehouseDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;