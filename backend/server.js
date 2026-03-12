const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

// Static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Ensure database file exists
const dbPath = path.join(__dirname, 'database.json');
if (!fs.existsSync(dbPath)) {
  // Initialize with sample data
  const initialData = [
    {
      id: 1,
      name: "Traditional Gold Necklace",
      category: "gold",
      price: "₹45,000",
      description: "Exquisite 22K gold necklace with intricate traditional design",
      image: "/uploads/gold-necklace-1.jpg",
      featured: true
    },
    {
      id: 2,
      name: "Diamond Engagement Ring",
      category: "diamond",
      price: "₹85,000",
      description: "Stunning diamond ring perfect for special occasions",
      image: "/uploads/diamond-ring-1.jpg",
      featured: true
    },
    {
      id: 3,
      name: "Kundan Bridal Set",
      category: "kundan",
      price: "₹1,25,000",
      description: "Traditional Kundan jewelry set for brides",
      image: "/uploads/kundan-set-1.jpg",
      featured: true
    },
    {
      id: 4,
      name: "Silver Anklet",
      category: "silver",
      price: "₹3,500",
      description: "Elegant silver anklet with delicate design",
      image: "/uploads/silver-anklet-1.jpg",
      featured: false
    }
  ];
  fs.writeFileSync(dbPath, JSON.stringify(initialData, null, 2));
}

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: function (req, file, cb) {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'));
    }
  }
});

// API Routes

// Get all products
app.get('/api/products', (req, res) => {
  try {
    const data = fs.readFileSync(dbPath);
    const products = JSON.parse(data);
    
    // Filter by category if specified
    const category = req.query.category;
    if (category) {
      const filtered = products.filter(p => p.category === category);
      return res.json(filtered);
    }
    
    // Get featured products if requested
    const featured = req.query.featured;
    if (featured === 'true') {
      const featuredProducts = products.filter(p => p.featured === true);
      return res.json(featuredProducts);
    }
    
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Get single product
app.get('/api/products/:id', (req, res) => {
  try {
    const data = fs.readFileSync(dbPath);
    const products = JSON.parse(data);
    const product = products.find(p => p.id === parseInt(req.params.id));
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

// Add new product (Admin only)
app.post('/api/products', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Image file is required' });
    }

    const data = fs.readFileSync(dbPath);
    const products = JSON.parse(data);
    
    const newProduct = {
      id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      description: req.body.description || '',
      image: '/uploads/' + req.file.filename,
      featured: req.body.featured === 'true'
    };
    
    products.push(newProduct);
    fs.writeFileSync(dbPath, JSON.stringify(products, null, 2));
    
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: 'Failed to add product' });
  }
});

// Update product (Admin only)
app.put('/api/products/:id', upload.single('image'), (req, res) => {
  try {
    const data = fs.readFileSync(dbPath);
    const products = JSON.parse(data);
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    
    if (productIndex === -1) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    // Update product fields
    if (req.body.name) products[productIndex].name = req.body.name;
    if (req.body.category) products[productIndex].category = req.body.category;
    if (req.body.price) products[productIndex].price = req.body.price;
    if (req.body.description) products[productIndex].description = req.body.description;
    if (req.body.featured !== undefined) products[productIndex].featured = req.body.featured === 'true';
    
    // Update image if new one uploaded
    if (req.file) {
      // Delete old image
      const oldImagePath = path.join(__dirname, products[productIndex].image);
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
      products[productIndex].image = '/uploads/' + req.file.filename;
    }
    
    fs.writeFileSync(dbPath, JSON.stringify(products, null, 2));
    res.json(products[productIndex]);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// Delete product (Admin only)
app.delete('/api/products/:id', (req, res) => {
  try {
    const data = fs.readFileSync(dbPath);
    const products = JSON.parse(data);
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    
    if (productIndex === -1) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    // Delete image file
    const imagePath = path.join(__dirname, products[productIndex].image);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
    
    // Remove product from database
    products.splice(productIndex, 1);
    fs.writeFileSync(dbPath, JSON.stringify(products, null, 2));
    
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

// Get categories
app.get('/api/categories', (req, res) => {
  try {
    const categories = [
      { id: 'gold', name: 'Gold Jewelry', icon: '👑' },
      { id: 'diamond', name: 'Diamond Jewelry', icon: '💎' },
      { id: 'kundan', name: 'Kundan Jewelry', icon: '🌟' },
      { id: 'silver', name: 'Silver Jewelry', icon: '🌙' }
    ];
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    
    // Here you would typically:
    // 1. Validate the input
    // 2. Send email notification
    // 3. Save to database
    // 4. Send WhatsApp notification
    
    console.log('Contact form submission:', { name, email, phone, message });
    
    // For now, just return success
    res.json({ message: 'Thank you for your enquiry. We will contact you soon!' });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ error: 'Failed to process contact form' });
  }
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Chauhan Jewellers server running on port ${PORT}`);
  console.log(`📁 Uploads directory: ${uploadsDir}`);
  console.log(`💎 API endpoints available at http://localhost:${PORT}/api/`);
});
