import React from 'react';
import { motion } from 'framer-motion';
import { Star, Phone, MapPin, Clock, Facebook, Instagram, ChevronRight, Sparkles, Gem, Crown, Heart, MessageCircle, Diamond, ShoppingBag, Shield, Award, TrendingUp, Menu, X } from 'lucide-react';
// import InstagramGallery from './components/InstagramGallery';
import './App.css';

function AppContent() {
  const [products, setProducts] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    // Fetch products and categories from backend
    const fetchData = async () => {
      try {
        const productsResponse = await fetch('http://localhost:5000/api/products');
        const productsData = await productsResponse.json();
        setProducts(productsData);
        
        const categoriesResponse = await fetch('http://localhost:5000/api/categories');
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-amber-50 to-beige-50 text-gray-900">
      {/* Modern Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl shadow-xl z-50 py-4 border-b border-amber-200/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          <motion.div 
            className="flex items-center gap-3 text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <span className="font-display">Chauhan Jewellers</span>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="tel:+918305300009" className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              <Phone size={18} />
              +91 83053 00009
            </a>
            <button className="flex items-center gap-2 bg-gray-900 text-amber-400 px-6 py-3 rounded-full font-semibold border border-amber-500/50 transition-all duration-300 hover:bg-gray-800 hover:border-amber-400 hover:scale-105">
              <ShoppingBag size={18} />
              Shop Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-amber-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-amber-200/50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="px-6 py-4 space-y-4">
              <a href="tel:+918305300009" className="block text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-full font-semibold">
                <Phone size={18} className="inline mr-2" />
                +91 83053 00009
              </a>
              <button className="w-full bg-amber-50 text-amber-700 px-6 py-3 rounded-full font-semibold border-2 border-amber-300/50">
                <ShoppingBag size={18} className="inline mr-2" />
                Shop Now
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video 
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-elegant-indian-woman-with-traditional-jewelry-39880-large.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support the video */}
            <img 
              src="https://images.unsplash.com/photo-1617029192839-5a5e5c7a3f5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Indian model with gold jewelry"
              className="w-full h-full object-cover"
            />
          </video>
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/60 via-amber-800/50 to-amber-900/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40"></div>
          {/* Animated Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 via-transparent to-beige-100/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_70%)]"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [-20, 20, -20], rotate: [-5, 5, -5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 text-gray-400/10"
          >
            <Gem size={60} />
          </motion.div>
          <motion.div
            animate={{ y: [20, -20, 20], rotate: [5, -5, 5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-10 text-gray-300/10"
          >
            <Diamond size={80} />
          </motion.div>
          <motion.div
            animate={{ y: [-15, 15, -15], scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 left-1/4 text-gray-500/10"
          >
            <Crown size={70} />
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6 font-display tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              The Family Jeweller
              <span className="block text-gray-200 font-light tracking-wider">for Generations</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Luxury Gold & Diamond Jewellery in Batala. 
              Discover timeless elegance and craftsmanship at Batala's most trusted jewelry destination.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.button 
                className="flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-full text-sm font-light transition-all duration-300 hover:bg-gray-800 hover:scale-105"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Visit Our Store
                <ChevronRight size={16} />
              </motion.button>
              <motion.button 
                className="bg-transparent text-white px-8 py-3 rounded-full text-sm font-light border border-gray-400/30 transition-all duration-300 hover:bg-white/10 hover:border-gray-400/50 hover:scale-105"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Collection
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gray-300 fill-current" size={20} />
                  ))}
              </div>
              <span className="text-gray-300 font-light text-sm">5.0 (282 reviews)</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Product Collections Section */}
      <section id="collections" className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 font-display tracking-wide">Jewellery Collections</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 font-light">Discover our handcrafted jewelry pieces that blend tradition with contemporary elegance</p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <motion.div 
                className="flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-full border border-gray-200"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Shield size={16} />
                <span className="text-sm font-light">BIS Hallmarked</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-full border border-gray-200"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Award size={16} />
                <span className="text-sm font-light">IGI Certified</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-full border border-gray-200"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Heart size={16} />
                <span className="text-sm font-light">Trusted Since 1965</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-full border border-gray-200"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Shield size={16} />
                <span className="text-sm font-light">H/M Hallmarked</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Featured Collections Showcase */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {categories.map((category, index) => {
              const categoryProducts = products.filter(p => p.category === category.id);
              const featuredProduct = categoryProducts.find(p => p.featured) || categoryProducts[0];
              
              return (
                <motion.div
                  key={category.id}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 transition-all duration-300 hover:border-gray-300">
                    <div className="relative h-40 bg-gray-50 flex items-center justify-center">
                      <div className="text-5xl mb-2">{category.icon}</div>
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-light text-gray-900 mb-2 tracking-wide">{category.name}</h3>
                      <p className="text-gray-500 text-sm mb-4 font-light">{categoryProducts.length} Exclusive Designs</p>
                      <div className="flex items-center justify-center gap-2 text-gray-700">
                        <span className="text-sm font-light">Explore Collection</span>
                        <ChevronRight size={14} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Premium Collection Banner */}
          <motion.div 
            className="bg-gray-100 rounded-2xl p-8 mb-16 border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                  <Crown size={24} className="text-gray-600" />
                  <h3 className="text-2xl font-light text-gray-900 tracking-wide">Premium Collection</h3>
                </div>
                <p className="text-base text-gray-600 mb-6 font-light">Exclusive 22K Gold & Certified Diamond Masterpieces</p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200">
                    <Shield size={14} />
                    <span className="text-sm font-light">BIS Certified</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200">
                    <Award size={14} />
                    <span className="text-sm font-light">IGI Certified</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200">
                    <Heart size={14} />
                    <span className="text-sm font-light">Lifetime Warranty</span>
                  </div>
                </div>
              </div>
              <motion.button 
                className="bg-gray-900 text-white px-6 py-3 rounded-full font-light text-sm transition-all duration-300 hover:bg-gray-800 hover:scale-105 flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Gem size={16} />
                View Premium Collection
              </motion.button>
            </div>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2.5 rounded-full text-sm font-light transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              All Collections
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-light transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
          
          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 transition-all duration-300 hover:border-gray-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
              >
                <div className="relative mb-3">
                  <img 
                    src={`http://localhost:5000${product.image}`} 
                    alt={product.name}
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/300x200/f3f4f6/6b7280?text=${encodeURIComponent(product.name)}`;
                    }}
                  />
                  {product.featured && (
                    <div className="absolute top-2 right-2 bg-gray-900 text-white px-2 py-1 rounded-full text-xs font-light">
                      Featured
                    </div>
                  )}
                  
                  {/* Certification Badges on Product */}
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {product.category === 'gold' && (
                      <div className="bg-white text-gray-700 px-2 py-1 rounded-full text-xs font-light flex items-center gap-1 border border-gray-200">
                        <Shield size={8} />
                        BIS
                      </div>
                    )}
                    {product.category === 'diamond' && (
                      <div className="bg-white text-gray-700 px-2 py-1 rounded-full text-xs font-light flex items-center gap-1 border border-gray-200">
                        <Award size={8} />
                        IGI
                      </div>
                    )}
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-3 line-clamp-2 font-light">{product.description}</p>
                  
                  {/* Category and Trust Indicators */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-light text-gray-700 bg-gray-100 px-2 py-1 rounded-full">
                      {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                    </span>
                    {product.category === 'gold' && (
                      <span className="text-xs text-gray-600 font-light">22K Gold</span>
                    )}
                    {product.category === 'diamond' && (
                      <span className="text-xs text-gray-600 font-light">Certified</span>
                    )}
                  </div>
                  
                  <div className="text-xl font-light text-gray-900 mb-3">{product.price}</div>
                  
                  {/* Additional Trust Info */}
                  <div className="flex items-center gap-2 mb-4 text-xs text-gray-400">
                    <Heart size={10} className="text-gray-400" />
                    <span>Trusted Quality</span>
                    {product.category === 'gold' && (
                      <>
                        <span>•</span>
                        <span>Hallmarked</span>
                      </>
                    )}
                    {product.category === 'diamond' && (
                      <>
                        <span>•</span>
                        <span>Lab Certified</span>
                      </>
                    )}
                  </div>
                  
                  <motion.button 
                    className="w-full bg-gray-900 text-white px-4 py-2.5 rounded-full font-light text-sm transition-all duration-300 hover:bg-gray-800 hover:scale-105 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle size={14} />
                    Enquire Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* <InstagramGallery /> */}

      {/* About Section */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
           
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 font-display tracking-wide">About Chauhan Jewellers</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Chauhan Jewellers is one of Batala's most trusted jewellery destinations located at City Road, Bhandari Gate.
              With hundreds of happy customers and a 5⭐ reputation, we bring timeless craftsmanship and elegant jewellery designs.
            </p>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-24 lg:py-32 bg-white">
       
      </section>

      {/* Contact Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 font-display tracking-wide">Visit Our Showroom</h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">Experience our exquisite collection in person at our premium Batala location</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 flex flex-col h-full">
              <div className="space-y-8 flex-grow">
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-amber-200 transition-colors duration-300">
                    <MapPin size={20} className="text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2 text-sm font-semibold tracking-wide uppercase">Address</h3>
                    <p className="text-gray-700 text-base leading-relaxed">City Rd, Bhandari Gate<br />Batala, Punjab 143505</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-amber-200 transition-colors duration-300">
                    <Phone size={20} className="text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2 text-sm font-semibold tracking-wide uppercase">Phone</h3>
                    <p className="text-base"><a href="tel:+918305300009" className="text-amber-600 hover:text-amber-700 transition-colors duration-300 font-medium">+91 83053 00009</a></p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-amber-200 transition-colors duration-300">
                    <Clock size={20} className="text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2 text-sm font-semibold tracking-wide uppercase">Business Hours</h3>
                    <p className="text-gray-700 text-base">Open Daily · Closes 8:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-600 mb-6 font-medium">Connect With Us</p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://www.facebook.com/chauhanjewellers" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-medium transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-lg">
                    <Facebook size={16} />
                    <span>Facebook</span>
                  </a>
                  <a href="https://www.instagram.com/chauhan_jewellers_batala" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-medium transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-lg">
                    <Instagram size={16} />
                    <span>Instagram</span>
                  </a>
                  <a href="tel:+918305300009" className="flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-full text-sm font-medium transition-all duration-300 hover:bg-amber-700 hover:scale-105 hover:shadow-lg">
                    <Phone size={16} />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-full">
              <div className="p-6 lg:p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Find Us on Map</h3>
                <div className="rounded-xl overflow-hidden border border-gray-200 flex-grow">
                  <iframe
                    className="w-full h-full"
                    style={{ border: 0, minHeight: '400px' }}
                    loading="lazy"
                    allowFullScreen
                    src="https://maps.google.com/maps?q=Chauhan%20Jewellers%20Batala&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 text-gray-900 py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-3 text-2xl font-light text-gray-900 tracking-wide">
                <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                  <Crown className="w-5 h-5 text-white" />
                </div>
                <span className="font-display">Chauhan Jewellers</span>
              </div>
              <p className="text-gray-600 text-base font-light">The Family Jeweller for Generations</p>
              <div className="flex gap-4 mt-2">
                <Shield className="w-5 h-5 text-gray-600" />
                <TrendingUp className="w-5 h-5 text-gray-600" />
                <Award className="w-5 h-5 text-gray-600" />
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-600 text-base mb-2 font-light">&copy; 2026 Chauhan Jewellers</p>
              <p className="text-gray-500 text-sm font-light">All rights reserved | Certified Jeweller</p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/918305300009?text=Hi%20Chauhan%20Jewellers!%20I'm%20interested%20in%20your%20jewelry%20collection."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-gray-900 text-white p-3 rounded-full border border-gray-200 z-40"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={20} />
        <span className="absolute right-24 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 shadow-lg">Chat with us on WhatsApp</span>
      </motion.a>
    </div>
  );
}

export default function App() {
  return <AppContent />;
}
