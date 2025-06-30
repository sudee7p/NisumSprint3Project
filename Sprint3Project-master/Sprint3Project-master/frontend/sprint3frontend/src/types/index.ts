export interface Order {
  orderId: string;
  orderDate: string;
  totalAmount: number;
  status: string;
  items: OrderItem[];
  deliveryDate?: string;
  shippingAddress?: string;
  invoice?: Invoice;
}

export interface OrderItem {
  productId?: string;
  productName: string;
  quantity: number;
  price: number;
  image: string;
}

export interface Invoice {
  invoiceNo: string;
  date: string;
  paymentMode: string;
  totalAmount: number;
}

export interface ShipmentDetails {
  shipmentId: string;
  status: string;
  trackingId: string;
  shippedDate: string;
  deliveredDate?: string;
  estimatedDelivery?: string;
}