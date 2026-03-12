# 💍 Chauhan Jewellers - Premium Jewelry Website

A stunning, modern jewelry e-commerce website for Chauhan Jewellers, featuring elegant design, smooth animations, and exceptional user experience.

## 🌟 Features

### **Design & UI**
- 🎨 **Modern Design**: Beautiful gradient-based UI with amber/orange luxury theme
- ✨ **Smooth Animations**: Framer Motion powered micro-interactions and floating elements
- 📱 **Fully Responsive**: Mobile-first design that works perfectly on all devices
- 🎯 **Interactive Elements**: Hover effects, transitions, and engaging user interactions

### **Content Sections**
- 🏠 **Hero Section**: Eye-catching landing with animated floating jewelry elements
- ⭐ **Features**: Highlighting quality, legacy, and personalized service
- 💎 **Collections**: Showcase of Gold, Diamond, Kundan, and Silver jewelry
- 💬 **Customer Testimonials**: Social proof with customer reviews
- 📍 **Contact & Location**: Store information with integrated social links
- 💬 **WhatsApp Integration**: Direct customer support via floating WhatsApp button

### **Technical Features**
- ⚡ **Performance**: Optimized with Vite for lightning-fast development and builds
- 🎭 **Animations**: Custom CSS animations and Framer Motion effects
- 🎨 **Styling**: Tailwind CSS v4 with custom color palette and utilities
- 🔧 **Modern Stack**: React 18, Vite, and latest web technologies

## 🛠️ Tech Stack

| Technology | Version | Description |
|------------|---------|-------------|
| **React** | ^18.2.0 | UI Framework |
| **Vite** | ^7.3.1 | Build Tool & Dev Server |
| **Tailwind CSS** | ^4.2.1 | CSS Framework |
| **Framer Motion** | ^10.16.0 | Animation Library |
| **Lucide React** | ^0.263.0 | Icon Library |
| **React Icons** | ^4.10.0 | Additional Icons |

## 🚀 Getting Started

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn

### **Installation**

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chauhan-jewellers
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
chauhan-jewellers/
├── public/
│   └── vite.svg              # Vite logo
├── src/
│   ├── assets/
│   │   └── react.svg         # React logo
│   ├── App.jsx               # Main application component
│   ├── App.css               # Custom animations and styles
│   ├── index.css             # Tailwind CSS and base styles
│   └── main.jsx              # Application entry point
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind configuration
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

## 🎨 Customization

### **Color Scheme**
The website uses a custom amber/orange color palette defined in `tailwind.config.js`:

```javascript
colors: {
  gold: {
    50: '#fffdf0',
    // ... more shades
    950: '#713f12',
  },
  luxury: {
    50: '#fdfaf7',
    // ... more shades
    950: '#5c3d1f',
  }
}
```

### **Animations**
Custom animations are defined in `App.css`:
- `gradient-shift`: Animated gradient text
- `float-gold/diamond/kundan/silver`: Floating jewelry elements

### **Typography**
- **Display Font**: Playfair Display (serif, for headings)
- **Body Font**: Inter (sans-serif, for content)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🚀 Deployment

### **Build for Production**
```bash
npm run build
```

### **Preview Production Build**
```bash
npm run preview
```

### **Deploy to Netlify/Vercel**
1. Run `npm run build`
2. Upload the `dist` folder to your hosting provider
3. Configure your domain and SSL

## 📞 Business Information

**Chauhan Jewellers**
- 📍 **Address**: City Rd, Gate, Batala, Punjab 143505
- 📞 **Phone**: +91 83053 00009
- ⏰ **Hours**: Open · Closes 8:00 PM
- 🌐 **Social**: [Facebook](https://www.facebook.com/chauhanjewellers) | [Instagram](https://www.instagram.com/chauhan_jewellers_batala)

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |

## 🎯 Performance Features

- ⚡ **Code Splitting**: Automatic code splitting with Vite
- 🗜️ **Optimized Assets**: Image and asset optimization
- 🔄 **Hot Module Replacement**: Instant development feedback
- 📦 **Tree Shaking**: Eliminates unused code
- 🎨 **CSS Purging**: Removes unused Tailwind CSS

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary to Chauhan Jewellers. All rights reserved.

## 🎉 Acknowledgments

- **React Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For the smooth animations
- **Lucide Icons** - For the beautiful icon set
- **Vite Team** - For the lightning-fast build tool

---

**Made with ❤️ for Chauhan Jewellers - The Family Jeweller for Generations**
