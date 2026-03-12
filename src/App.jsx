import React from 'react';
import { motion } from 'framer-motion';
import { Star, Phone, MapPin, Clock, Facebook, Instagram, ChevronRight, Sparkles, Gem, Crown, Heart, MessageCircle, Diamond,  Star as StarIcon, ShoppingBag, Shield, Award, TrendingUp } from 'lucide-react';
import { ThemeProvider } from './contexts/ThemeContext';
// import SimpleThemeSwitcher from './components/SimpleThemeSwitcher';
import './App.css';

function AppContent() {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* <SimpleThemeSwitcher /> */}
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-lg shadow-lg z-50 py-4 border-b border-yellow-600/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          <motion.div 
            className="flex items-center gap-3 text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent relative z-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <span className="font-display">Chauhan Jewellers</span>
          </motion.div>
          <motion.div 
            className="hidden md:flex items-center gap-6 relative z-10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="tel:+918305300009" className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <Phone size={18} />
              +91 83053 00009
            </a>
            <button className="flex items-center gap-2 bg-gray-800 text-yellow-400 px-6 py-3 rounded-full font-semibold border-2 border-yellow-600/50 transition-all duration-300 hover:bg-gray-700 hover:border-yellow-500">
              <ShoppingBag size={18} />
              Shop Now
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/10 via-transparent to-amber-900/10 z-0"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 text-amber-700/8"
          >
            <Gem size={60} />
          </motion.div>
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-10 text-amber-600/8"
          >
            <Diamond size={80} />
          </motion.div>
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 left-1/4 text-amber-500/8"
          >
            <Crown size={70} />
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-10 lg:px-8 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <motion.div 
              className="inline-flex items-center justify-center gap-2 pt-10 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-amber-200 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Sparkles size={18} className="text-amber-600" />
              The Family Jeweller for Generations
            </motion.div>
             */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8 font-display"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Exquisite Jewelry That
              <span className="block bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-shift">Tells Your Story</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Discover timeless elegance and craftsmanship at Batala's most trusted jewelry destination. 
              From traditional treasures to contemporary designs, find pieces that celebrate your special moments.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button 
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Visit Our Store
                <ChevronRight size={24} />
              </motion.button>
              <motion.button 
                className="bg-gray-800 text-amber-400 px-10 py-5 rounded-full text-xl font-bold border border-amber-700/30 transition-all duration-300 hover:bg-gray-700 hover:border-amber-600 shadow-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Collection
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-amber-500 fill-current" size={24} />
                  ))}
              </div>
              <span className="text-gray-200 font-bold text-lg">5.0 (282 reviews)</span>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative h-96 lg:h-[600px] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 to-amber-800/10 rounded-3xl backdrop-blur-sm"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="text-center"
                >
                  <div className="w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center shadow-xl">
                    <Crown className="w-24 h-24 lg:w-32 lg:h-32 text-white" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-24 lg:py-32 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Why Choose Chauhan Jewellers?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the perfect blend of tradition and innovation with our exceptional jewelry collections</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Gem size={40} />,
                title: "Exquisite Collection",
                description: "From gold and diamond to traditional designs, discover jewelry that matches your style",
                features: ["22K Gold", "Diamond", "Kundan", "Silver"]
              },
              {
                icon: <Crown size={40} />,
                title: "Trusted Legacy",
                description: "Serving Batala for generations with integrity and exceptional craftsmanship",
                features: ["Family Owned", "30+ Years", "Certified", "Authentic"]
              },
              {
                icon: <Heart size={40} />,
                title: "Personalized Service",
                description: "Expert guidance to help you find the perfect piece for every occasion",
                features: ["Expert Advice", "Custom Design", "Insurance", "Lifetime Support"]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 lg:p-12 rounded-3xl text-center shadow-lg border border-amber-800/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-amber-700/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
              >
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full mb-8 text-white shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{feature.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {feature.features.map((feat, i) => (
                    <span key={i} className="bg-gray-800 text-amber-400 px-3 py-1 rounded-full text-sm font-semibold border border-amber-700/30">
                      {feat}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Collections Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Our Exclusive Collections</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Discover our handcrafted jewelry pieces that blend tradition with contemporary elegance</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Gem size={48} />,
                title: "Gold Jewelry",
                description: "Timeless 22K Gold Masterpieces that embody luxury and tradition. Each piece tells a story of elegance.",
                items: ["Mangalsutras", "Jhumkas", "Kadas", "Chains", "Rings", "Bangles"],
                bgGradient: "from-amber-700 via-amber-600 to-amber-800",
                borderColor: "border-amber-700",
                featured: true
              },
              {
                icon: <Diamond size={48} />,
                title: "Diamond Jewelry",
                description: "Exquisite diamond pieces that sparkle with brilliance and elegance for every special occasion.",
                items: ["Diamond Rings", "Earrings", "Pendants", "Bracelets"],
                bgGradient: "from-slate-300 via-gray-200 to-slate-400",
                borderColor: "border-slate-400",
                featured: true
              },
              {
                icon: <Crown size={48} />,
                title: "Kundan Jewelry",
                description: "Traditional Kundan work that reflects our rich cultural heritage and master craftsmanship.",
                items: ["Kundan Sets", "Jhumkas", "Tikkas", "Mathapatti"],
                bgGradient: "from-amber-800 via-amber-700 to-amber-900",
                borderColor: "border-amber-800",
                featured: true
              },
              {
                icon: <Star size={48} />,
                title: "Silver Jewelry",
                description: "Elegant silver jewelry with intricate designs and lasting shine for modern tastes.",
                items: ["Silver Chains", "Anklets", "Toe Rings", "Pendants"],
                bgGradient: "from-gray-300 via-slate-200 to-gray-400",
                borderColor: "border-gray-400",
                featured: true
              }
            ].map((collection, index) => (
              <motion.div
                key={index}
                className={`relative bg-gradient-to-br ${collection.bgGradient} p-8 lg:p-10 rounded-2xl text-center shadow-lg border ${collection.borderColor} transition-all duration-500 hover:-translate-y-1 hover:shadow-xl min-h-[480px] flex flex-col justify-between overflow-hidden group`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
              >
                {/* Subtle Featured Badge */}
                {collection.featured && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-gray-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md flex items-center gap-1">
                      <Sparkles size={10} />
                      Featured
                    </div>
                  </div>
                )}
                
                {/* Subtle Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                
                <div className="relative z-10">
                  {/* Elegant Icon Container */}
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full mb-6 text-gray-800 shadow-lg">
                    {collection.icon}
                  </div>
                  
                  {/* Elegant Title */}
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    {collection.title}
                  </h3>
                  
                  {/* Elegant Description */}
                  <p className="text-sm leading-relaxed mb-6 text-gray-800">
                    {collection.description}
                  </p>
                  
                  {/* Enhanced Items List */}
                  <ul className="flex flex-wrap gap-2 justify-center mb-8">
                    {collection.items.map((item, itemIndex) => (
                      <li 
                        key={itemIndex} 
                        className="bg-white/80 text-gray-800 px-3 py-1 rounded-full text-xs font-medium border border-white/50 shadow-sm transition-all duration-300 hover:scale-105"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Elegant Button */}
                <motion.button 
                  className="relative z-10 flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:bg-gray-800 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Collection
                  <ChevronRight size={18} />
                </motion.button>
                
                {/* Subtle Animation Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-24 lg:py-32 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">What Our Customers Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Real experiences from our valued customers who trust us with their special moments</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Prabh Randhawa",
                rating: 5,
                comment: "Great jewellery collection and great owners and staff 👍🏻",
                date: "2 weeks ago"
              },
              {
                name: "Maninder Singh",
                rating: 5,
                comment: "Good dealing and designs, price also be very reasonable, excellent service.",
                date: "1 month ago"
              },
              {
                name: "Jasmeet Bajwa",
                rating: 5,
                comment: "I had a wonderful experience browsing through your selection of jewelry.",
                date: "3 weeks ago"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 lg:p-10 rounded-2xl shadow-lg border border-amber-800/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-lg text-gray-200 leading-relaxed mb-6 italic">"{testimonial.comment}"</p>
                <div className="flex justify-between items-center">
                  <p className="text-gray-200 font-bold">{testimonial.name}</p>
                  <span className="text-gray-400 text-sm">{testimonial.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="grid lg:grid-cols-2 gap-20 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Visit Our Store</h2>
              <p className="text-xl text-gray-300 mb-12">Experience our collection in person at our premium Batala location</p>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <strong className="block text-white mb-2 text-lg">Address</strong>
                    <p className="text-gray-300 text-lg">City Rd, Gate, Batala, Punjab 143505</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <strong className="block text-white mb-2 text-lg">Phone</strong>
                    <p className="text-lg"><a href="tel:+918305300009" className="text-amber-400 font-bold hover:text-amber-500 transition-colors">+91 83053 00009</a></p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <strong className="block text-white mb-2 text-lg">Hours</strong>
                    <p className="text-gray-300 text-lg">Open · Closes 8:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <a href="https://www.facebook.com/chauhanjewellers" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full font-semibold transition-all duration-300 shadow-md hover:bg-blue-700 hover:-translate-y-0.5">
                  <Facebook size={18} />
                  <span>Facebook</span>
                </a>
                <a href="https://www.instagram.com/chauhan_jewellers_batala" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-semibold transition-all duration-300 shadow-md hover:-translate-y-0.5">
                  <Instagram size={18} />
                  <span>Instagram</span>
                </a>
                <a href="tel:+918305300009" className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full font-semibold transition-all duration-300 shadow-md hover:bg-green-700 hover:-translate-y-0.5">
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
            
            <motion.div 
              className="bg-gradient-to-br from-amber-700 to-amber-800 p-16 rounded-2xl text-center text-white shadow-xl"
              whileHover={{ scale: 1.01 }}
            >
              <div className="w-20 h-20 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Award size={40} className="text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Perfect Piece?</h3>
              <p className="text-xl mb-10 opacity-90">Visit us today and discover why we're Batala's most trusted jeweller for generations</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  className="bg-white text-amber-700 text-lg font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:bg-gray-900 hover:text-amber-400"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Directions
                  <ChevronRight size={20} className="ml-2" />
                </motion.button>
                <motion.button 
                  className="bg-transparent text-white text-lg font-bold px-6 py-3 rounded-full border border-amber-400 flex items-center justify-center gap-2 transition-all duration-300 hover:bg-amber-400 hover:text-gray-900 shadow-md"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle size={20} />
                  WhatsApp Us
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-gray-950 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-3 text-2xl font-bold text-amber-400">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center shadow-lg">
                  <Crown className="w-5 h-5 text-white" />
                </div>
                <span className="font-display">Chauhan Jewellers</span>
              </div>
              <p className="text-gray-400 text-lg">The Family Jeweller for Generations</p>
              <div className="flex gap-4 mt-2">
                <Shield className="w-5 h-5 text-amber-400" />
                <TrendingUp className="w-5 h-5 text-amber-400" />
                <Award className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-lg mb-2">&copy; 2024 Chauhan Jewellers</p>
              <p className="text-gray-500 text-sm">All rights reserved | Certified Jeweller</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/918305300009?text=Hi%20Chauhan%20Jewellers!%20I'm%20interested%20in%20your%20jewelry%20collection."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center no-underline shadow-2xl z-50 transition-all duration-300 hover:scale-110 hover:shadow-green-500/50 group"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={32} />
        <span className="absolute right-24 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 shadow-lg">Chat with us on WhatsApp</span>
      </motion.a>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
