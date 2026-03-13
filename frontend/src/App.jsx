import React from 'react';
import { motion } from 'framer-motion';
import { Star, Phone, MapPin, Clock, Facebook, Instagram, ChevronRight, Sparkles, Gem, Crown, Heart, MessageCircle, Diamond, ShoppingBag, Shield, Award, TrendingUp, Menu, X, Zap, Globe, Mail, Calendar, Users, CheckCircle, ArrowRight, Play, Volume2 } from 'lucide-react';
// import InstagramGallery from './components/InstagramGallery';
import './App.css';

function AppContent() {
  const [products, setProducts] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    // Fetch products and categories from backend
    // const fetchData = async () => {
    //   try {
    //     // const productsResponse = await fetch('http://localhost:5000/api/products');
    //     // const productsData = await productsResponse.json();
    //     // setProducts(productsData);

    //     // const categoriesResponse = await fetch('http://localhost:5000/api/categories');
    //     // const categoriesData = await categoriesResponse.json();
    //     // setCategories(categoriesData);
     
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //     // Set mock data for demonstration
      
    //   }
    // };

    // fetchData();

         setProducts([
          { id: 1, name: 'Gold Necklace', category: 'gold',  description: '22K Gold Necklace', featured: true, image: 'https://i.pinimg.com/originals/03/e2/5b/03e25bd0498ea5e88293cb24aa4769a0.jpg' },
          { id: 2, name: 'Diamond Ring', category: 'diamond', description: 'IGI Certified Diamond', featured: true, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRjsJf_xdDi9_DRax91msBMOOt1U1lXKOeTEyJ3tDGWx8jAWr7W96OB0yGtIgNtDg7oXyotHtOMES0oFBh2bdzZwUSNtSds' },
          { id: 3, name: 'Silver Earrings', category: 'silver',description: '92.5 Sterling Silver', featured: false, image: 'https://m.media-amazon.com/images/I/515fm8t5wfL._SY695_.jpg' },
          { id: 4, name: 'Jadau Set', category: 'jadau',  description: 'Traditional Jadau Kundan', featured: true, image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS00Xb_0E082Bmai__yilthekKH9sNcaVmfD_XznjJy71x_I1m4F1WOl2TOfb-8PjR-_qiKAjBEG6gRUXX-UgdoxJOfL_5X' },
          { id: 5, name: 'Gold Bangles', category: 'gold',  description: '22K Gold Bangles', featured: false, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSqpScCze7HgHc9AM9Iu7ogyy6VM2yWgxuYF5Moj9PCJClED5dTklecxxcOXXQb8K5DYMVgZBNArkgSSSgOt4Lh3HcpnS1UQQ' },
          { id: 6, name: 'Diamond Pendant', category: 'diamond',description: 'Certified Diamond Pendant', featured: false, image: 'https://www.nicecreamlondon.com/cdn/shop/files/IMG-8006.png?v=1767518864&width=1800' },
          { id: 7, name: 'Silver Chain', category: 'silver', description: 'Sterling Silver Chain', featured: false, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRLDzAsqd8b3IP8-6trodnbUjur5HrAmtLULipUuW1JEKl4MtddRTKIzcmouzRyhKceSMRVBIbIBm1O8jdlojTbT6XZoNqPOQ' },
          { id: 8, name: 'Jadau Necklace', category: 'jadau', description: 'Royal Jadau Design', featured: false, image: 'https://rubans.in/cdn/shop/files/rubans-24k-gold-plated-handcrafted-ruby-emerald-studded-pearl-beaded-jewellery-set-necklace-set-1151160635.jpg?format=webp&v=1755716996&width=900' },
        ]);
  }, []);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-amber-50/30 to-white text-gray-900 overflow-x-hidden">
      {/* Ultra-Premium Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-3xl shadow-xl z-50 border-b border-amber-100/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Enhanced Logo */}
            <motion.div
              className="flex items-center gap-4 group cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <div className="relative">
                    <Crown className="w-9 h-9 text-white" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full animate-pulse shadow-lg"></div>
                  </div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 bg-clip-text text-transparent font-display tracking-tight">Chauhan Jewellers</h1>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-gray-600 font-light tracking-wide">Since 1965</p>
                  <div className="flex items-center gap-1">
                    {[...Array(3)].map((_, i) => (
                      <Sparkles key={i} className="w-3 h-3 text-amber-500" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Premium Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              <motion.a
                href="#collections"
                className="text-gray-700 hover:text-amber-600 font-medium transition-all duration-300 hover:scale-105 relative group py-2"
                whileHover={{ y: -2 }}
              >
                <span className="relative z-10">Collections</span>
                <div className="absolute inset-0 bg-amber-50/50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
              <motion.a
                href="#about"
                className="text-gray-700 hover:text-amber-600 font-medium transition-all duration-300 hover:scale-105 relative group py-2"
                whileHover={{ y: -2 }}
              >
                <span className="relative z-10">About</span>
                <div className="absolute inset-0 bg-amber-50/50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
              <motion.a
                href="#map"
                className="text-gray-700 hover:text-amber-600 font-medium transition-all duration-300 hover:scale-105 relative group py-2"
                whileHover={{ y: -2 }}
              >
                <span className="relative z-10">Visit Us</span>
                <div className="absolute inset-0 bg-amber-50/50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
              <motion.div className="flex items-center gap-4 pl-8 border-l border-amber-200">
                <motion.a
                  href="tel:+918305300009"
                  className="flex items-center gap-3 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white px-6 py-3 rounded-full font-medium shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:from-amber-600 hover:via-amber-700 hover:to-amber-800"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone size={18} className="animate-pulse" />
                  <span className="hidden xl:inline font-semibold">+91 83053 00009</span>
                  <span className="xl:hidden font-semibold">Call</span>
                  <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                </motion.a>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden text-gray-700 hover:text-amber-600 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white/95 backdrop-blur-2xl border-t border-gray-200/20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 space-y-4">
              <motion.div className="space-y-2">
                <a
                  href="#collections"
                  className="block px-4 py-3 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg font-medium transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Collections
                </a>
                <a
                  href="#about"
                  className="block px-4 py-3 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg font-medium transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#map"
                  className="block px-4 py-3 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg font-medium transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Visit Us
                </a>
              </motion.div>
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a
                  href="tel:+918305300009"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <Phone size={18} />
                  +91 83053 00009
                </a>
             
              </div>
              <div className="flex justify-center gap-4 pt-4 border-t border-gray-200">
                <a
                  href="https://www.facebook.com/chauhanjewellers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-amber-600 transition-colors duration-300"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/chauhan_jewellers_batala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-amber-600 transition-colors duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://wa.me/918305300009?text=Hi%20Chauhan%20Jewellers!%20I'm%20interested%20in%20your%20jewelry%20collection."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-amber-600 transition-colors duration-300"
                >
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Ultra-Premium Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        {/* Enhanced Video Background */}
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover scale-105"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="https://www.shutterstock.com/shutterstock/videos/1103687939/preview/stock-footage-bangalore-india-st-april-a-beautiful-indian-female-fashion-model-flaunting-traditional.webm" type="video/mp4" />
            <img
              src="https://images.unsplash.com/photo-1617029192839-5a5e5c7a3f5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Indian model with gold jewelry"
              className="w-full h-full object-cover"
            />
          </video>

          {/* Enhanced Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
        </div>

        {/* Premium Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [-30, 30, -30], rotate: [-8, 8, -8], scale: [1, 1.1, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 text-amber-400/20"
          >
            <Gem size={80} />
          </motion.div>
          <motion.div
            animate={{ y: [30, -30, 30], rotate: [8, -8, 8], scale: [1, 1.15, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-10 text-blue-400/20"
          >
            <Diamond size={100} />
          </motion.div>
          <motion.div
            animate={{ y: [-25, 25, -25], scale: [1, 1.08, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 left-1/4 text-yellow-400/20"
          >
            <Crown size={90} />
          </motion.div>
          <motion.div
            animate={{ y: [20, -20, 20], x: [-10, 10, -10] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-2/3 right-1/3 text-rose-400/20"
          >
            <Sparkles size={60} />
          </motion.div>
        </div>

        <div className=" py-5 max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Premium Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-1">
                {[...Array(3)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-white text-sm font-medium ">Premium Luxury Jewellery Since 1965</span>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </motion.div>

            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-light text-white leading-tight mb-8 font-display tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The Family
              <span className="block bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent font-semibold">Jeweller</span>
              <span className="block text-gray-200 font-light tracking-wider text-4xl md:text-5xl lg:text-6xl mt-2">for Generations</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Experience the pinnacle of luxury with our exquisite collection of 
              <span className="text-amber-300 font-medium"> 22K Gold & Certified Diamonds</span>. 
              Discover timeless elegance at Batala's most trusted jewelry destination.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white px-10 py-4 rounded-full text-base font-medium transition-all duration-500 hover:from-amber-600 hover:via-amber-700 hover:to-amber-800 hover:scale-105 hover:shadow-2xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href='#map' className="flex items-center gap-3 z-10">
                  <Crown size={20} />
                  Visit Our Store
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
              </motion.button>
              <motion.button
                className="group relative flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md text-white px-10 py-4 rounded-full text-base font-medium border border-white/30 transition-all duration-500 hover:bg-white/20 hover:border-white/50 hover:scale-105 hover:shadow-2xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Gem size={20} />
                View Collection
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </motion.div>

            {/* Enhanced Trust Indicators */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <span className="text-gray-300 font-light py-3">5.0 (320+ reviews)</span>

              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Shield size={18} className="text-amber-400" />
                <span className="text-sm font-light">BIS Certified</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Award size={18} className="text-amber-400" />
                <span className="text-sm font-light">IGI Certified</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/60 text-sm font-light">Scroll to explore</span>
            <motion.div
              className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>
        
      </section>
      {/* Product Collections Section */}
      <section id="collections" className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 font-display tracking-wide">Jewellery Collections</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 font-light">Discover our handcrafted jewelry pieces that blend tradition with contemporary elegance</p>

          {/* Premium Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 mb-20">
            <motion.div
              className="group relative bg-gradient-to-br from-amber-50 to-amber-100/90 text-gray-800 px-8 py-4 rounded-3xl border border-amber-200/60 shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <img src="/bis.webp" alt="BIS Hallmarked" className='w-10 h-10 object-contain' />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-bold text-gray-900">BIS Hallmarked</span>
                  <span className="text-sm text-gray-600 font-medium">Certified Quality Assurance</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
            </motion.div>

            <motion.div
              className="group relative bg-gradient-to-br from-blue-50 to-blue-100/90 text-gray-800 px-8 py-4 rounded-3xl border border-blue-200/60 shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <img src="/igi.jpg" alt="IGI Certified" className='w-10 h-10 object-contain' />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-bold text-gray-900">IGI Certified</span>
                  <span className="text-sm text-gray-600 font-medium">Diamond Authenticity Guaranteed</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
            </motion.div>

            <motion.div
              className="group relative bg-gradient-to-br from-rose-50 to-rose-100/90 text-gray-800 px-8 py-4 rounded-3xl border border-rose-200/60 shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Heart size={24} className="text-rose-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-bold text-gray-900">Trusted Since 1965</span>
                  <span className="text-sm text-gray-600 font-medium">58 Years of Excellence</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400/20 to-rose-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-rose-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
            </motion.div>

            <motion.div
              className="group relative bg-gradient-to-br from-emerald-50 to-emerald-100/90 text-gray-800 px-8 py-4 rounded-3xl border border-emerald-200/60 shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Shield size={24} className="text-emerald-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-bold text-gray-900">H/M Hallmarked</span>
                  <span className="text-sm text-gray-600 font-medium">Purity Guaranteed</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-emerald-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
            </motion.div>
          </div>
          </div>

          {/* Luxury Collection Showcase */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {/* Gold Jewellery Card */}
            <motion.div
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedCategory('gold')}
            >
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 transition-all duration-500 hover:border-amber-300 shadow-xl hover:shadow-2xl">
                <div className="relative h-48 bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center overflow-hidden">
                  <img
                    src="/collection-images/gold-jew.png"
                    alt="Gold Jewellery"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    Premium
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-light text-gray-900 mb-3 tracking-wide">Gold Jewellery</h3>
                  <p className="text-gray-600 text-sm mb-6 font-light">22K & 24K Pure Gold Collections</p>
                  <div className="flex items-center justify-center gap-2 text-amber-600 group-hover:text-amber-700 transition-colors duration-300">
                    <span className="text-sm font-medium">Explore Collection</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
            </motion.div>

            {/* Diamonds Jewellery Card */}
            <motion.div
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedCategory('diamond')}
            >
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 transition-all duration-500 hover:border-blue-300 shadow-xl hover:shadow-2xl">
                <div className="relative h-48 bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center overflow-hidden">
                  <img
                    src="/collection-images/diamond-jew.png"
                    alt="Diamonds Jewellery"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    Certified
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-light text-gray-900 mb-3 tracking-wide">Diamonds Jewellery</h3>
                  <p className="text-gray-600 text-sm mb-6 font-light">IGI Certified Diamonds</p>
                  <div className="flex items-center justify-center gap-2 text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                    <span className="text-sm font-medium">Explore Collection</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
            </motion.div>

            {/* Silver Jewellery Card */}
            <motion.div
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedCategory('silver')}
            >
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 transition-all duration-500 hover:border-gray-400 shadow-xl hover:shadow-2xl">
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center overflow-hidden">
                  <img
                    src="/collection-images/silver-jew.png"
                    alt="Silver Jewellery"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-700/30 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    Sterling
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-light text-gray-900 mb-3 tracking-wide">Silver Jewellery</h3>
                  <p className="text-gray-600 text-sm mb-6 font-light">92.5 Sterling Silver</p>
                  <div className="flex items-center justify-center gap-2 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    <span className="text-sm font-medium">Explore Collection</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
            </motion.div>

            {/* Jadau Kundans Card */}
            <motion.div
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedCategory('jadau')}
            >
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 transition-all duration-500 hover:border-rose-300 shadow-xl hover:shadow-2xl">
                <div className="relative h-48 bg-gradient-to-br from-rose-50 to-pink-50 flex items-center justify-center overflow-hidden">
                  <img
                    src="/collection-images/jadau-jew.png"
                    alt="Jadau Kundans"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    Traditional
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-light text-gray-900 mb-3 tracking-wide">Jadau Kundans</h3>
                  <p className="text-gray-600 text-sm mb-6 font-light">Traditional Artistry</p>
                  <div className="flex items-center justify-center gap-2 text-rose-600 group-hover:text-rose-700 transition-colors duration-300">
                    <span className="text-sm font-medium">Explore Collection</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-rose-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
            </motion.div>
          </div>

          {/* Luxury Premium Collection Banner */}
          <motion.div
            className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-3xl p-10 mb-20 border border-amber-200/60 shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Crown size={24} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-light text-gray-900 tracking-wide">Premium Collection</h3>
                </div>
                <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">Exclusive 22K Gold & Certified Diamond Masterpieces crafted with precision and passion</p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-2xl border border-amber-200/60 shadow-md hover:shadow-lg transition-all duration-300">
                    <Shield size={16} className="text-amber-600" />
                    <span className="text-sm font-medium text-gray-800">BIS Certified</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-2xl border border-amber-200/60 shadow-md hover:shadow-lg transition-all duration-300">
                    <Award size={16} className="text-amber-600" />
                    <span className="text-sm font-medium text-gray-800">IGI Certified</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-2xl border border-amber-200/60 shadow-md hover:shadow-lg transition-all duration-300">
                    <Heart size={16} className="text-amber-600" />
                    <span className="text-sm font-medium text-gray-800">Lifetime Warranty</span>
                  </div>
                </div>
              </div>
              <motion.button
                className="group relative bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white px-8 py-4 rounded-2xl font-medium text-base transition-all duration-500 hover:from-amber-700 hover:via-amber-800 hover:to-amber-900 hover:scale-105 hover:shadow-2xl flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Gem size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                View Premium Collection
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
              </motion.button>
            </div>
          </motion.div>

          {/* Enhanced Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-8 py-3 rounded-2xl text-sm font-medium transition-all duration-500 ${selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:shadow-md'
                }`}
            >
              <span className="flex items-center gap-2">
                <Sparkles size={16} />
                All Collections
              </span>
            </button>
            <button
              onClick={() => setSelectedCategory('gold')}
              className={`px-8 py-3 rounded-2xl text-sm font-medium transition-all duration-500 ${selectedCategory === 'gold'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-amber-300 hover:bg-amber-50 hover:shadow-md'
                }`}
            >
              <span className="flex items-center gap-2">
                <span className="text-lg">💛</span>
                Gold Jewellery
              </span>
            </button>
            <button
              onClick={() => setSelectedCategory('diamond')}
              className={`px-8 py-3 rounded-2xl text-sm font-medium transition-all duration-500 ${selectedCategory === 'diamond'
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md'
                }`}
            >
              <span className="flex items-center gap-2">
                <span className="text-lg">💎</span>
                Diamonds Jewellery
              </span>
            </button>
            <button
              onClick={() => setSelectedCategory('silver')}
              className={`px-8 py-3 rounded-2xl text-sm font-medium transition-all duration-500 ${selectedCategory === 'silver'
                  ? 'bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md'
                }`}
            >
              <span className="flex items-center gap-2">
                <span className="text-lg">🥈</span>
                Silver Jewellery
              </span>
            </button>
            <button
              onClick={() => setSelectedCategory('jadau')}
              className={`px-8 py-3 rounded-2xl text-sm font-medium transition-all duration-500 ${selectedCategory === 'jadau'
                  ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-rose-300 hover:bg-rose-50 hover:shadow-md'
                }`}
            >
              <span className="flex items-center gap-2">
                <span className="text-lg">👑</span>
                Jadau Kundans
              </span>
            </button>
          </div>

          {/* Luxury Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="group relative bg-white rounded-3xl overflow-hidden border border-gray-200 transition-all duration-500 hover:border-amber-300 hover:shadow-2xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {product.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-10">
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 font-light leading-relaxed">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                        <Star className="w-4 h-4 text-yellow-400" />
                      </div>
                      <span className="text-xs text-gray-500 font-medium">4.8</span>
                    </div>
                    <motion.button
                      className="text-amber-600 hover:text-amber-700 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Heart size={18} className="group-hover:fill-current" />
                    </motion.button>
                  </div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* About Section */}
      <section className="py-2 lg:py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-2 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 font-display tracking-wide">About Us</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-6">
              A legacy of excellence since 1965. Located at City Road, Batala, we are proud to be the family jeweller for generations, bringing timeless craftsmanship and elegant jewellery designs to our valued customers.
            </p>
            
            {/* Combined Badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              {/* Legacy Badge */}
              <div className="inline-flex items-center bg-white rounded-full shadow-lg px-6 py-3">
                <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                </svg>
                <span className="text-amber-800 font-semibold">Established 1965</span>
                <span className="text-gray-400 mx-2">•</span>
                <span className="text-gray-600">3 Generations of Trust</span>
              </div>
              
              {/* Google Rating Badge */}
              <div className="inline-flex items-center bg-white rounded-full shadow-lg px-6 py-3">
                <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span className="text-2xl font-bold text-gray-900 mr-2">5.0</span>
                <span className="text-gray-600 mr-2">(282 reviews)</span>
                <span className="text-sm text-gray-500">• Jewelry Store in Batala, Punjab</span>
              </div>
            </div>
          </div>

          {/* Customer Reviews Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 italic mb-3">"Great jewellery collection and great owners and staff 👍🏻"</p>
              <p className="text-sm font-semibold text-gray-900">Prabh Randhawa</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 italic mb-3">"Good dealing and designs, price also be very reasonable, excellent service."</p>
              <p className="text-sm font-semibold text-gray-900">Maninder Singh</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 italic mb-3">"I had a wonderful experience browsing through your selection of jewelry."</p>
              <p className="text-sm font-semibold text-gray-900">Jasmeet Bajwa</p>
            </div>
          </div>

          {/* Call to Action for Reviews */}
          <div className="text-center">
            <a 
              href="https://share.google/4abwn5jaP0khOixda" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              Leave a Google Review
            </a>
            <p className="text-sm text-gray-500 mt-3">Share your experience with us</p>
          </div>
        </div>
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
                    <p className="text-gray-700 text-base">Mon to Saturday :  Closes 8:00 PM</p>
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
            <div id='map' className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-full">
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
