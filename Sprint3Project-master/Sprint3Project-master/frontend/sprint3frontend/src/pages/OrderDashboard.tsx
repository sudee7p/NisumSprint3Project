import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Package, Building2, User, Store } from 'lucide-react';
import InvoiceDetails from '../components/InvoiceDetails';

interface OrderDetails {
  orderId: string;
  orderDate: string;
  totalAmount: number;
  status: string;
  warehouseId: number;
  warehouseName: string;
  sellerId: number;
  sellerName: string;
  items: Array<{
    orderItemId: string;
    productId: string;
    productName: string;
    sku: string;
    quantity: number;
    unitPrice: number;
    discount: number;
    finalPrice: number;
    size: string;
    color: string;
    status: string;
    image: string;
  }>;
  invoice?: {
    invoiceNo: string;
    date: string;
    paymentMode: string;
    totalAmount: number;
  };
}

const OrderDashboard: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call - using your actual database structure
    setTimeout(() => {
      if (orderId === "1001") {
        // Order 1001 has items (OrderItemID 2001, 2002), invoice (InvoiceID 7001), and WarehouseID 101
        setOrderDetails({
          orderId: "1001",
          orderDate: "2025-05-01",
          totalAmount: 4898.00,
          status: "Shipped",
          warehouseId: 101,
          warehouseName: "Warehouse - Bangalore North",
          sellerId: 1,
          sellerName: "FashionFirst",
          items: [
            {
              orderItemId: "2001",
              productId: "301",
              productName: "Men Cotton Shirt",
              sku: "SHRT-MN1",
              quantity: 2,
              unitPrice: 999.00,
              discount: 100.00,
              finalPrice: 1798.00,
              size: "M",
              color: "Blue",
              status: "Ordered",
              image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=300"
            },
            {
              orderItemId: "2002",
              productId: "302",
              productName: "Women Floral Dress",
              sku: "DRSS-WM1",
              quantity: 1,
              unitPrice: 1499.00,
              discount: 300.00,
              finalPrice: 1199.00,
              size: "L",
              color: "Red",
              status: "Ordered",
              image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=300"
            }
          ],
          invoice: {
            invoiceNo: "INV-2025-1001",
            date: "2025-05-01",
            paymentMode: "Credit Card",
            totalAmount: 4898.00
          }
        });
      } else if (orderId === "1002") {
        // Order 1002 has NO items, NO invoice, WarehouseID 101
        setOrderDetails({
          orderId: "1002",
          orderDate: "2025-05-02",
          totalAmount: 4000.00,
          status: "Shipped",
          warehouseId: 101,
          warehouseName: "Warehouse - Bangalore North",
          sellerId: 1,
          sellerName: "FashionFirst",
          items: [] // No items in database
          // No invoice in database
        });
      } else if (orderId === "1003") {
        // Order 1003 has NO items, NO invoice, WarehouseID 102
        setOrderDetails({
          orderId: "1003",
          orderDate: "2025-05-02",
          totalAmount: 6000.00,
          status: "Shipped",
          warehouseId: 102,
          warehouseName: "Warehouse - Delhi NCR",
          sellerId: 2,
          sellerName: "UrbanTrendz",
          items: [] // No items in database
          // No invoice in database
        });
      }
      setLoading(false);
    }, 1000);
  }, [orderId]);

  const handleDownloadInvoice = () => {
    // Simulate PDF download
    alert('Invoice download started!');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!orderDetails) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-600 text-lg">Order not found</p>
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

      {/* Order Details Section */}
      <div className="bg-white rounded-xl shadow-md border border-slate-200 mb-6">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center space-x-3 mb-4">
            <Package className="h-6 w-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-slate-800">Order Details</h1>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-slate-600">Order ID</p>
              <p className="font-semibold text-slate-800">#{orderDetails.orderId}</p>
            </div>
            <div>
              <p className="text-sm text-slate-600">Order Date</p>
              <p className="font-semibold text-slate-800">
                {new Date(orderDetails.orderDate).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-600">Status</p>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {orderDetails.status}
              </span>
            </div>
            <div>
              <p className="text-sm text-slate-600">Total Amount</p>
              <p className="font-semibold text-slate-800">₹{orderDetails.totalAmount.toFixed(2)}</p>
            </div>
          </div>
          
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-slate-600">Seller</p>
              <div className="inline-flex items-center space-x-2 font-semibold text-green-600">
                <Store className="h-4 w-4" />
                <span>{orderDetails.sellerName}</span>
              </div>
            </div>
            <div>
              <p className="text-sm text-slate-600">Warehouse</p>
              <Link
                to={`/warehouse/${orderDetails.warehouseId}`}
                className="inline-flex items-center space-x-2 font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Building2 className="h-4 w-4" />
                <span>{orderDetails.warehouseName}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Order Items Section */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Order Items</h2>
          {orderDetails.items.length === 0 ? (
            <div className="text-center py-8">
              <Package className="h-12 w-12 text-slate-400 mx-auto mb-3" />
              <p className="text-slate-600">No items found for this order</p>
              <p className="text-sm text-slate-500 mt-1">This order may be pending item assignment</p>
            </div>
          ) : (
            <div className="space-y-4">
              {orderDetails.items.map((item) => (
                <div key={item.orderItemId} className="flex items-center space-x-4 p-4 border border-slate-200 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.productName}
                    className="h-20 w-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-800">{item.productName}</h3>
                    <p className="text-slate-600">SKU: {item.sku}</p>
                    <p className="text-slate-600">Size: {item.size} | Color: {item.color}</p>
                    <p className="text-slate-600">Quantity: {item.quantity}</p>
                    <div className="flex items-center space-x-2">
                      <span className="text-slate-500 line-through">₹{item.unitPrice.toFixed(2)}</span>
                      <span className="font-semibold text-blue-600">₹{(item.finalPrice / item.quantity).toFixed(2)} each</span>
                      <span className="text-green-600 text-sm">Save ₹{item.discount.toFixed(2)}</span>
                    </div>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${
                      item.status === 'Ordered' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-slate-800">
                      ₹{item.finalPrice.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Invoice Details Section - Only show if invoice exists */}
      {orderDetails.invoice && (
        <InvoiceDetails
          invoice={orderDetails.invoice}
          onDownload={handleDownloadInvoice}
        />
      )}

      {/* Show message if no invoice exists */}
      {!orderDetails.invoice && (
        <div className="bg-white rounded-xl shadow-md border border-slate-200">
          <div className="p-6 text-center">
            <Package className="h-12 w-12 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-600">No invoice available for this order</p>
            <p className="text-sm text-slate-500 mt-1">Invoice will be generated once payment is processed</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDashboard;