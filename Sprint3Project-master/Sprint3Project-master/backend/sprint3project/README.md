# Order Tracker Backend

Spring Boot application for Order Management and Tracking System.

## Features

- Order Management
- Order History
- Invoice Generation (PDF)
- Shipment Tracking
- Feedback System
- RESTful APIs

## Technology Stack

- Spring Boot 2.7.14
- Spring Data JPA
- MySQL Database
- iText PDF for invoice generation
- Maven for dependency management

## Database Setup

1. Create MySQL database named `ordertracker`
2. Run the provided SQL scripts to create tables and insert sample data
3. Update `application.properties` with your database credentials

## API Endpoints

### Orders
- `GET /api/orders` - Get all orders for a user
- `GET /api/orders/{orderId}` - Get order details
- `GET /api/orders/{orderId}/items` - Get order items
- `GET /api/orders/{orderId}/invoice` - Get invoice details
- `GET /api/orders/{orderId}/invoice/download` - Download invoice PDF
- `POST /api/orders/{orderId}/reorder` - Reorder items

### Shipments
- `GET /api/shipments/order/{orderId}` - Get shipment details by order ID
- `GET /api/shipments/track/{trackingId}` - Track shipment by tracking ID

### Feedback
- `POST /api/feedback/seller` - Submit seller feedback
- `POST /api/feedback/delivery` - Submit delivery feedback
- `POST /api/feedback/product` - Submit product review

## Running the Application

1. Ensure MySQL is running
2. Update database credentials in `application.properties`
3. Run: `mvn spring-boot:run`
4. Application will start on `http://localhost:8080`

## Testing

Use the provided sample data to test the APIs. The frontend React application should be configured to call these endpoints.