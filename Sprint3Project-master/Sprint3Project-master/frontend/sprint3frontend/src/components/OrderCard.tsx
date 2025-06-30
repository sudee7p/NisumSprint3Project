import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, DollarSign, Package, Star, Truck } from 'lucide-react';

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

interface OrderCardProps {
  order: Order;
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  const navigate = useNavigate();

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'in transit': return 'bg-blue-100 text-blue-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-1">
              Order #{order.orderId}
            </h3>
            <div className="flex items-center space-x-4 text-sm text-slate-600">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(order.orderDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <DollarSign className="h-4 w-4" />
                <span>₹{order.totalAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
            {order.status}
          </span>
        </div>

        <div className="flex space-x-3 mb-4 overflow-x-auto">
          {order.items.slice(0, 3).map((item, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={item.image}
                alt={item.productName}
                className="h-16 w-16 object-cover rounded-lg border border-slate-200"
              />
            </div>
          ))}
          {order.items.length > 3 && (
            <div className="flex-shrink-0 h-16 w-16 bg-slate-100 rounded-lg border border-slate-200 flex items-center justify-center">
              <span className="text-xs text-slate-600 font-medium">
                +{order.items.length - 3}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => navigate(`/order/${order.orderId}`)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm flex items-center space-x-2"
          >
            <Package className="h-4 w-4" />
            <span>Order Details</span>
          </button>
          
          <button
            onClick={() => navigate(`/order/${order.orderId}/status`)}
            className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors font-medium text-sm flex items-center space-x-2"
          >
            <Truck className="h-4 w-4" />
            <span>Order Status</span>
          </button>
          
          <button
            onClick={() => navigate(`/order/${order.orderId}/actions`)}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-sm flex items-center space-x-2"
          >
            <Star className="h-4 w-4" />
            <span>Review</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;