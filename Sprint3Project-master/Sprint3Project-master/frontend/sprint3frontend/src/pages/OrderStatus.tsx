import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Truck, Package, MapPin, Calendar, Hash } from 'lucide-react';

interface ShipmentDetails {
  shipmentId: string;
  status: string;
  trackingId: string;
  shippedDate: string;
  deliveredDate?: string;
  estimatedDelivery?: string;
}

interface ShipmentItem {
  orderItemId: string;
  productName: string;
  quantity: number;
  image: string;
}

const OrderStatus: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const [shipmentDetails, setShipmentDetails] = useState<ShipmentDetails | null>(null);
  const [shipmentItems, setShipmentItems] = useState<ShipmentItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call - using your actual database structure
    setTimeout(() => {
      if (orderId === "1001") {
        // Order 1001 has shipment (ShipmentID 5001) with items
        setShipmentDetails({
          shipmentId: "5001",
          status: "In Transit",
          trackingId: "BLUEDART12345",
          shippedDate: "2025-05-02",
          estimatedDelivery: "2025-05-05"
        });
        
        setShipmentItems([
          {
            orderItemId: "2001",
            productName: "Men Cotton Shirt",
            quantity: 2,
            image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=200"
          },
          {
            orderItemId: "2002",
            productName: "Women Floral Dress",
            quantity: 1,
            image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=200"
          }
        ]);
      } else if (orderId === "1002") {
        // Order 1002 has NO shipment in database
        setShipmentDetails(null);
        setShipmentItems([]);
      } else if (orderId === "1003") {
        // Order 1003 has NO shipment in database
        setShipmentDetails(null);
        setShipmentItems([]);
      }
      
      setLoading(false);
    }, 1000);
  }, [orderId]);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'in transit': return 'bg-blue-100 text-blue-800';
      case 'shipped': return 'bg-yellow-100 text-yellow-800';
      case 'processing': return 'bg-orange-100 text-orange-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!shipmentDetails) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Orders</span>
          </Link>
        </div>
        
        <div className="bg-white rounded-xl shadow-md border border-slate-200">
          <div className="p-6 text-center">
            <Truck className="h-12 w-12 text-slate-400 mx-auto mb-3" />
            <h1 className="text-xl font-bold text-slate-800 mb-2">No Shipment Found</h1>
            <p className="text-slate-600">No shipment details available for Order #{orderId}</p>
            <p className="text-sm text-slate-500 mt-1">Shipment will be created once the order is processed</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Orders</span>
        </Link>
      </div>

      {/* Shipment Details Section */}
      <div className="bg-white rounded-xl shadow-md border border-slate-200 mb-6">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Truck className="h-6 w-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-slate-800">Order Status</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Hash className="h-5 w-5 text-slate-600" />
                <div>
                  <p className="text-sm text-slate-600">Shipment ID</p>
                  <p className="font-semibold text-slate-800">{shipmentDetails.shipmentId}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Package className="h-5 w-5 text-slate-600" />
                <div>
                  <p className="text-sm text-slate-600">Status</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(shipmentDetails.status)}`}>
                    {shipmentDetails.status}
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-slate-600" />
                <div>
                  <p className="text-sm text-slate-600">Tracking ID</p>
                  <p className="font-semibold text-slate-800">{shipmentDetails.trackingId}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-slate-600" />
                <div>
                  <p className="text-sm text-slate-600">Shipped Date</p>
                  <p className="font-semibold text-slate-800">
                    {new Date(shipmentDetails.shippedDate).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {shipmentDetails.deliveredDate ? (
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-sm text-slate-600">Delivered Date</p>
                    <p className="font-semibold text-green-600">
                      {new Date(shipmentDetails.deliveredDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ) : shipmentDetails.estimatedDelivery ? (
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-slate-600">Estimated Delivery</p>
                    <p className="font-semibold text-blue-600">
                      {new Date(shipmentDetails.estimatedDelivery).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* Shipment Items Section */}
      <div className="bg-white rounded-xl shadow-md border border-slate-200">
        <div className="p-6">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Shipment Items</h2>
          {shipmentItems.length === 0 ? (
            <div className="text-center py-8">
              <Package className="h-12 w-12 text-slate-400 mx-auto mb-3" />
              <p className="text-slate-600">No shipment items found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 font-semibold text-slate-800">Product</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-800">Name</th>
                    <th className="text-right py-3 px-4 font-semibold text-slate-800">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {shipmentItems.map((item) => (
                    <tr key={item.orderItemId} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-4 px-4">
                        <img
                          src={item.image}
                          alt={item.productName}
                          className="h-12 w-12 object-cover rounded-lg"
                        />
                      </td>
                      <td className="py-4 px-4">
                        <p className="font-medium text-slate-800">{item.productName}</p>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <span className="font-medium text-slate-800">{item.quantity}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;