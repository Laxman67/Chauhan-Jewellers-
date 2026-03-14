import React from 'react';
import { motion } from 'framer-motion';
import { Star, Phone, MapPin, Clock, Facebook, Instagram, ChevronRight, Sparkles, Gem, Crown, Heart, MessageCircle, Diamond, ShoppingBag, Shield, Award, TrendingUp, Menu, X, Zap, Globe, Mail, Calendar, Users, CheckCircle, ArrowRight, Play, Volume2 } from 'lucide-react';
// import InstagramGallery from './components/InstagramGallery';
import './App.css';
// Hero background images for carousel
import heroImages from './utils/hero-images';
import ProductCollection from './components/ProductCollection';
import About from './components/About';
import Visit from './components/Visit';
import Footer from './components/Footer';

function AppContent() {
  const [products, setProducts] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

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
          { id: 2, name: 'Diamond Ring', category: 'diamond', description: 'IGI Certified Diamond', featured: true, image: './diamond-jewellery/LR/DLR.jpg' },
          { id: 3, name: 'Silver Earrings', category: 'silver',description: '92.5 Sterling Silver', featured: false, image: 'https://images.unsplash.com/photo-1725266698872-5222fbf45404?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { id: 5, name: 'Gold Bangles', category: 'gold',  description: '22K Gold Bangles', featured: false, image: 'https://media.istockphoto.com/id/1276740602/photo/fancy-designer-antique-golden-bracelets-for-woman-fashion.jpg?s=612x612&w=0&k=20&c=o5TWngItYKHAve9byTQxy2U1ebvjdnk5opm8dNJdj1o=' },
          { id: 6, name: 'Diamond Pendant', category: 'diamond',description: 'Certified Diamond Pendant', featured: false, image: 'https://www.nicecreamlondon.com/cdn/shop/files/IMG-8006.png?v=1767518864&width=1800' },
          { id: 7, name: 'Silver Chain', category: 'silver', description: 'Sterling Silver Chain', featured: false, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRLDzAsqd8b3IP8-6trodnbUjur5HrAmtLULipUuW1JEKl4MtddRTKIzcmouzRyhKceSMRVBIbIBm1O8jdlojTbT6XZoNqPOQ' },
          { id: 8, name: 'Jadau Necklace', category: 'jadau', description: 'Royal Jadau Design', featured: false, image: 'https://rubans.in/cdn/shop/files/rubans-24k-gold-plated-handcrafted-ruby-emerald-studded-pearl-beaded-jewellery-set-necklace-set-1151160635.jpg?format=webp&v=1755716996&width=900' },
        ]);
  }, []);

     

  // Auto-rotate carousel images
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

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
        {/* Jewelry Image Slideshow Background */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: currentImageIndex === index ? 1 : 0,
              }}
            />
          ))}
        </div>

        {/* Enhanced Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
        
        {/* Floating Jewelry Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 text-amber-400/20"
            animate={{ 
              y: [0, -20, 0], 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <Gem size={60} />
          </motion.div>
          <motion.div
            className="absolute top-40 right-20 text-amber-300/20"
            animate={{ 
              y: [0, -15, 0], 
              rotate: [0, -5, 5, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          >
            <Crown size={50} />
          </motion.div>
          <motion.div
            className="absolute bottom-40 left-20 text-yellow-400/20"
            animate={{ 
              y: [0, -25, 0], 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          >
            <Diamond size={55} />
          </motion.div>
          <motion.div
            className="absolute bottom-20 right-10 text-amber-200/20"
            animate={{ 
              y: [0, -18, 0], 
              rotate: [0, -8, 8, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 6.5, repeat: Infinity, delay: 1.5 }}
          >
            <Sparkles size={45} />
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
                <a href='#contact' className="flex items-center gap-3 z-10">
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

     
        
      </section>
      {/* Product Collections Section */}
    <ProductCollection filteredProducts={filteredProducts} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory } />



      {/* About Section */}
    <About/>


      {/* Premium Showroom Section */}
      <Visit/>

     

      {/* Footer */}
      <Footer/>

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
