# 💎 Chauhan Jewellers - Premium E-commerce Website

A luxury jewellery e-commerce website for Chauhan Jewellers in Batala, Punjab. Built with React, Node.js, and modern web technologies.

## ✨ Features

### 🏪 Frontend Features
- **Luxury UI Design** - Premium, elegant interface with smooth animations
- **Product Catalog** - Dynamic product display with category filtering
- **Responsive Design** - Mobile-optimized layout
- **WhatsApp Integration** - Direct customer enquiries via WhatsApp
- **Google Maps** - Store location integration
- **Instagram Gallery** - Social media integration
- **Smooth Animations** - Framer Motion powered interactions
- **Modern UI** - Tailwind CSS styling

### 🛠 Backend Features
- **RESTful API** - Complete CRUD operations for products
- **Image Upload** - Multer-based file handling
- **Admin Panel** - Product management interface
- **Database** - JSON-based storage (easily upgradeable to MongoDB)
- **Security** - Helmet, CORS, rate limiting
- **Error Handling** - Comprehensive error management

### 📦 Product Categories
- **Gold Jewelry** - Traditional and modern gold pieces
- **Diamond Jewelry** - Premium diamond collections
- **Kundan Jewelry** - Traditional Indian designs
- **Silver Jewelry** - Contemporary silver items

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chauhan-jewellers
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Start the Backend Server**
   ```bash
   cd ../backend
   npm start
   ```
   The backend will run on `http://localhost:5000`

5. **Start the Frontend Development Server**
   ```bash
   cd ../frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

## 📁 Project Structure

```
chauhan-jewellers/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   │   └── InstagramGallery.jsx
│   │   ├── App.jsx          # Main App component
│   │   ├── main.jsx         # Entry point
│   │   └── App.css          # Styles
│   ├── public/              # Static assets
│   └── package.json
├── backend/                 # Node.js backend
│   ├── server.js            # Express server
│   ├── admin.html           # Admin panel
│   ├── admin.js             # Admin panel JavaScript
│   ├── database.json       # Product database
│   ├── uploads/             # Image uploads
│   └── package.json
└── README.md               # This file
```

## 🎯 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Add new product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Categories
- `GET /api/categories` - Get all categories

### Contact
- `POST /api/contact` - Submit contact form

## 🔧 Admin Panel

Access the admin panel at: `http://localhost:5000/admin.html`

### Features:
- **Product Management** - Add, edit, delete products
- **Image Upload** - Drag and drop image uploads
- **Statistics** - View product counts and featured items
- **Real-time Updates** - Instant product list updates

## 📱 Mobile Responsiveness

The website is fully responsive and works seamlessly on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Design System

### Colors
- **Primary**: Yellow (#fbbf24, #f59e0b)
- **Secondary**: Gray gradients
- **Accent**: White and black contrasts

### Typography
- **Headings**: Custom display fonts
- **Body**: System fonts for optimal performance

### Animations
- **Framer Motion**: Smooth page transitions
- **Hover Effects**: Interactive elements
- **Loading States**: Skeleton screens

## 🔒 Security Features

- **Helmet.js**: Security headers
- **CORS**: Cross-origin resource sharing
- **Rate Limiting**: API protection
- **File Upload Validation**: Image type and size restrictions
- **Input Sanitization**: XSS protection

## 📈 Performance Optimizations

- **Lazy Loading**: Images and components
- **Code Splitting**: React.lazy implementation
- **Image Optimization**: WebP support
- **Caching**: Browser caching headers

## 🛠 Technologies Used

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Multer** - File uploads
- **Helmet** - Security
- **CORS** - Cross-origin requests

## 📞 Business Information

**Chauhan Jewellers**
- 📍 City Road, Bhandari Gate, Batala, Punjab 143505
- 📞 +91 83053 00009
- 🕐 Open - Closes 8:00 PM
- 🌐 [chauhanjewellers.com](https://chauhanjewellers.com)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is proprietary to Chauhan Jewellers.

## 🚀 Future Enhancements

- **Payment Gateway Integration** - Razorpay/PayU
- **User Authentication** - Customer accounts
- **Order Management** - Complete order processing
- **Live Chat** - Customer support
- **SEO Optimization** - Search engine optimization
- **PWA Support** - Progressive web app
- **Multi-language Support** - Hindi/Punjabi

## 📞 Support

For technical support:
- 📧 Email: tech@chauhanjewellers.com
- 📞 Phone: +91 83053 00009

---

**Built with ❤️ for Chauhan Jewellers**
