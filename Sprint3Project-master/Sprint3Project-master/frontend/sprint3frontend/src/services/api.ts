import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Order APIs
export const orderApi = {
  getAllOrders: () => api.get('/orders'),
  getOrderById: (orderId: string) => api.get(`/orders/${orderId}`),
  getOrderItems: (orderId: string) => api.get(`/orders/${orderId}/items`),
  getInvoice: (orderId: string) => api.get(`/orders/${orderId}/invoice`),
  downloadInvoice: (orderId: string) => api.get(`/orders/${orderId}/invoice/download`, { responseType: 'blob' }),
};

// Shipment APIs
export const shipmentApi = {
  getShipmentDetails: (orderId: string) => api.get(`/shipments/order/${orderId}`),
  getShipmentItems: (shipmentId: string) => api.get(`/shipments/${shipmentId}/items`),
  trackShipment: (trackingId: string) => api.get(`/shipments/track/${trackingId}`),
};

// Feedback APIs
export const feedbackApi = {
  submitSellerFeedback: (orderId: string, rating: number) => 
    api.post(`/feedback/seller`, { orderId, rating }),
  submitDeliveryFeedback: (orderId: string, rating: number) => 
    api.post(`/feedback/delivery`, { orderId, rating }),
  submitProductReview: (productId: string, rating: number) => 
    api.post(`/feedback/product`, { productId, rating }),
};

// Reorder API
export const reorderApi = {
  reorderItems: (orderId: string) => api.post(`/orders/${orderId}/reorder`),
};

export default api;