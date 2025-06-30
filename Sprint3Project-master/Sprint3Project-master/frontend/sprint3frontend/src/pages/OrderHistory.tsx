import React, { useState, useEffect } from 'react';
import OrderCard from '../components/OrderCard';
import { Package } from 'lucide-react';

interface Order {
  orderId: string;
  orderDate: string;
  totalAmount: number;
  status: string;
  items: Array<{
    productName: string;
    quantity: number;
    price: number;
    image: string;
  }>;
  deliveryDate?: string;
}

const OrderHistory: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call - using your actual database structure
    setTimeout(() => {
      setOrders([
        {
          orderId: "1001",
          orderDate: "2025-05-01",
          totalAmount: 4898.00,
          status: "Shipped",
          items: [
            {
              productName: "Men Cotton Shirt",
              quantity: 2,
              price: 1798.00,
              image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=200"
            },
            {
              productName: "Women Floral Dress",
              quantity: 1,
              price: 1199.00,
              image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=200"
            }
          ]
        },
        {
          orderId: "1002",
          orderDate: "2025-05-02",
          totalAmount: 4000.00,
          status: "Shipped",
          items: [
            {
              productName: "Sample Product",
              quantity: 1,
              price: 4000.00,
              image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=200"
            }
          ]
        },
        {
          orderId: "1003",
          orderDate: "2025-05-02",
          totalAmount: 6000.00,
          status: "Shipped",
          items: [
            {
              productName: "Premium Product",
              quantity: 1,
              price: 6000.00,
              image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=200"
            }
          ]
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center space-x-3 mb-8">
        <Package className="h-8 w-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-slate-800">Order History</h1>
      </div>
      
      {orders.length === 0 ? (
        <div className="text-center py-12">
          <Package className="h-16 w-16 text-slate-400 mx-auto mb-4" />
          <p className="text-slate-600 text-lg">No orders found</p>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <OrderCard key={order.orderId} order={order} />
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;