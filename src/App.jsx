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
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
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
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-transparent to-yellow-800/20 z-0"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
          <motion.div
            animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 text-yellow-600/20"
          >
            <Gem size={60} />
          </motion.div>
          <motion.div
            animate={{ y: [20, -20, 20], rotate: [0, -180, -360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-10 text-yellow-500/20"
          >
            <Diamond size={80} />
          </motion.div>
          <motion.div
            animate={{ y: [-15, 15, -15], scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 left-1/4 text-yellow-400/20"
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
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-shift">Tells Your Story</span>
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
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Our Store
                <ChevronRight size={24} />
              </motion.button>
              <motion.button 
                className="bg-gray-800 text-yellow-400 px-10 py-5 rounded-full text-xl font-bold border-2 border-yellow-600/50 transition-all duration-300 hover:bg-gray-700 hover:border-yellow-500 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" size={24} />
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
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 to-yellow-800/20 rounded-3xl backdrop-blur-sm"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="text-center"
                >
                  <div className="w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Why Choose Chauhan Jewellers?</h2>
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
                className="bg-gradient-to-br from-gray-700 to-gray-800 p-10 lg:p-12 rounded-3xl text-center shadow-xl border border-yellow-600/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-yellow-500/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full mb-8 text-white shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{feature.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {feature.features.map((feat, i) => (
                    <span key={i} className="bg-gray-700 text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold border border-yellow-600/50">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Our Exclusive Collections</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Discover our handcrafted jewelry pieces that blend tradition with contemporary elegance</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Gem size={48} />,
                title: "Gold Jewelry",
                description: "Timeless 22K Gold Masterpieces that embody luxury and tradition. Each piece tells a story of elegance.",
                items: ["Mangalsutras", "Jhumkas", "Kadas", "Chains", "Rings", "Bangles"],
                bgGradient: "from-yellow-600 via-yellow-500 to-yellow-700",
                borderColor: "border-yellow-500",
                animation: "animate-float-gold",
                featured: true,
                shimmer: "from-yellow-500/50 via-yellow-400/60 to-yellow-600/50"
              },
              {
                icon: <Diamond size={48} />,
                title: "Diamond Jewelry",
                description: "Exquisite diamond pieces that sparkle with brilliance and elegance for every special occasion.",
                items: ["Diamond Rings", "Earrings", "Pendants", "Bracelets"],
                bgGradient: "from-gray-300 via-gray-200 to-gray-400",
                borderColor: "border-gray-400",
                animation: "animate-float-diamond",
                featured: true,
                shimmer: "from-gray-300/50 via-gray-200/60 to-gray-400/50",
                sparkle: true
              },
              {
                icon: <Crown size={48} />,
                title: "Kundan Jewelry",
                description: "Traditional Kundan work that reflects our rich cultural heritage and master craftsmanship.",
                items: ["Kundan Sets", "Jhumkas", "Tikkas", "Mathapatti"],
                bgGradient: "from-yellow-700 via-yellow-600 to-yellow-800",
                borderColor: "border-yellow-600",
                animation: "animate-float-kundan",
                featured: true,
                shimmer: "from-yellow-600/50 via-yellow-500/60 to-yellow-700/50",
                traditional: true
              },
              {
                icon: <Star size={48} />,
                title: "Silver Jewelry",
                description: "Elegant silver jewelry with intricate designs and lasting shine for modern tastes.",
                items: ["Silver Chains", "Anklets", "Toe Rings", "Pendants"],
                bgGradient: "from-gray-300 via-slate-200 to-gray-400",
                borderColor: "border-gray-400",
                animation: "animate-float-silver",
                featured: true,
                shimmer: "from-gray-200/50 via-slate-100/60 to-gray-300/50",
                modern: true
              }
            ].map((collection, index) => (
              <motion.div
                key={index}
                className={`relative bg-gradient-to-br ${collection.bgGradient} p-8 lg:p-10 rounded-3xl text-center shadow-2xl border ${collection.borderColor} transition-all duration-300 hover:-translate-y-3 hover:shadow-3xl min-h-[550px] flex flex-col justify-between overflow-hidden group ${collection.featured ? (collection.sparkle ? 'ring-4 ring-blue-300/50 ring-offset-4' : collection.traditional ? 'ring-4 ring-amber-300/50 ring-offset-4' : collection.modern ? 'ring-4 ring-gray-300/50 ring-offset-4' : 'ring-4 ring-yellow-300/50 ring-offset-4') : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* Dynamic Featured Badge */}
                {collection.featured && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className={`bg-gradient-to-r ${collection.sparkle ? 'from-blue-400 to-cyan-400' : collection.traditional ? 'from-amber-400 to-orange-400' : collection.modern ? 'from-gray-400 to-slate-400' : 'from-yellow-400 to-amber-400'} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1`}>
                      {collection.sparkle ? <Diamond size={12} /> : collection.traditional ? <Crown size={12} /> : collection.modern ? <Star size={12} /> : <Sparkles size={12} />}
                      {collection.sparkle ? 'Premium' : collection.traditional ? 'Heritage' : collection.modern ? 'Modern' : 'Featured'}
                    </div>
                  </div>
                )}
                
                {/* Enhanced Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
                {collection.featured && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${collection.shimmer} opacity-60 pointer-events-none`}></div>
                )}
                
                <div className="relative z-10">
                  {/* Enhanced Icon Container */}
                  <div className={`inline-flex items-center justify-center w-24 h-24 ${collection.featured ? (collection.sparkle ? 'bg-gradient-to-br from-blue-100 to-cyan-100' : collection.traditional ? 'bg-gradient-to-br from-amber-100 to-orange-100' : collection.modern ? 'bg-gradient-to-br from-gray-100 to-slate-100' : 'bg-gradient-to-br from-yellow-100 to-amber-100') : 'bg-white/90'} backdrop-blur-sm rounded-full mb-8 text-gray-800 shadow-xl ${collection.featured ? (collection.sparkle ? 'ring-4 ring-blue-300/30' : collection.traditional ? 'ring-4 ring-amber-300/30' : collection.modern ? 'ring-4 ring-gray-300/30' : 'ring-4 ring-yellow-300/30') : ''}`}>
                    {collection.icon}
                  </div>
                  
                  {/* Enhanced Title */}
                  <h3 className={`text-2xl font-bold mb-4 ${collection.featured ? 'text-gray-900' : 'text-gray-900'}`}>
                    {collection.title}
                    {collection.featured && (
                      <span className="inline-block ml-2">
                        {collection.sparkle ? <Diamond className="inline-block w-5 h-5 text-blue-600" /> : collection.traditional ? <Crown className="inline-block w-5 h-5 text-amber-600" /> : collection.modern ? <Star className="inline-block w-5 h-5 text-gray-600" /> : <Crown className="inline-block w-5 h-5 text-yellow-600" />}
                      </span>
                    )}
                  </h3>
                  
                  {/* Enhanced Description */}
                  <p className={`text-sm leading-relaxed mb-6 ${collection.featured ? 'text-gray-800 font-medium' : 'text-gray-800'}`}>
                    {collection.description}
                  </p>
                  
                  {/* Enhanced Items List */}
                  <ul className="flex flex-wrap gap-2 justify-center mb-8">
                    {collection.items.map((item, itemIndex) => (
                      <li 
                        key={itemIndex} 
                        className={`${collection.featured ? (collection.sparkle ? 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border-blue-300' : collection.traditional ? 'bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border-amber-300' : collection.modern ? 'bg-gradient-to-r from-gray-100 to-slate-100 text-gray-800 border-gray-300' : 'bg-gradient-to-r from-yellow-100 to-amber-100 text-amber-800 border-amber-300') : 'bg-white/70 text-gray-800 border-white/50'} px-3 py-1 rounded-full text-xs font-bold border shadow-md transition-all duration-300 hover:scale-105`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Enhanced Button */}
                <motion.button 
                  className={`relative z-10 flex items-center justify-center gap-2 ${collection.featured ? (collection.sparkle ? 'bg-gradient-to-r from-blue-400 to-cyan-400 text-white shadow-xl hover:from-blue-500 hover:to-cyan-500' : collection.traditional ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-white shadow-xl hover:from-amber-500 hover:to-orange-500' : collection.modern ? 'bg-gradient-to-r from-gray-400 to-slate-400 text-white shadow-xl hover:from-gray-500 hover:to-slate-500' : 'bg-gradient-to-r from-yellow-400 to-amber-400 text-white shadow-xl hover:from-yellow-500 hover:to-amber-500') : 'bg-white text-gray-800 shadow-lg hover:bg-gray-800 hover:text-white'} px-6 py-3 rounded-full font-bold transition-all duration-300`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Collection
                  <ChevronRight size={18} />
                </motion.button>
                
                {/* Enhanced Animation Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent ${collection.animation} pointer-events-none`}></div>
                {collection.featured && (
                  <div className={`absolute inset-0 bg-gradient-to-t ${collection.sparkle ? 'from-blue-200/20 via-transparent to-cyan-200/20' : collection.traditional ? 'from-amber-200/20 via-transparent to-orange-200/20' : collection.modern ? 'from-gray-200/20 via-transparent to-slate-200/20' : 'from-yellow-200/20 via-transparent to-amber-200/20'} pointer-events-none animate-pulse`}></div>
                )}
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">What Our Customers Say</h2>
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
                className="bg-gradient-to-br from-gray-700 to-gray-800 p-8 lg:p-10 rounded-3xl shadow-xl border border-yellow-600/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" size={20} />
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Visit Our Store</h2>
              <p className="text-xl text-gray-300 mb-12">Experience our collection in person at our premium Batala location</p>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <strong className="block text-white mb-2 text-lg">Address</strong>
                    <p className="text-gray-300 text-lg">City Rd, Gate, Batala, Punjab 143505</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <strong className="block text-white mb-2 text-lg">Phone</strong>
                    <p className="text-lg"><a href="tel:+918305300009" className="text-yellow-400 font-bold hover:text-yellow-500 transition-colors">+91 83053 00009</a></p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
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
              className="bg-gradient-to-br from-yellow-600 to-yellow-700 p-16 rounded-3xl text-center text-white shadow-2xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8">
                <Award size={40} className="text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Perfect Piece?</h3>
              <p className="text-xl mb-10 opacity-90">Visit us today and discover why we're Batala's most trusted jeweller for generations</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  className="bg-white text-yellow-600 text-lg font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:bg-gray-900 hover:text-yellow-400"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Directions
                  <ChevronRight size={20} className="ml-2" />
                </motion.button>
                <motion.button 
                  className="bg-transparent text-white text-lg font-bold px-6 py-3 rounded-full border-2 border-yellow-400 flex items-center justify-center gap-2 transition-all duration-300 hover:bg-yellow-400 hover:text-gray-900"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-3 text-2xl font-bold text-yellow-400">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                  <Crown className="w-5 h-5 text-white" />
                </div>
                <span className="font-display">Chauhan Jewellers</span>
              </div>
              <p className="text-gray-400 text-lg">The Family Jeweller for Generations</p>
              <div className="flex gap-4 mt-2">
                <Shield className="w-5 h-5 text-yellow-400" />
                <TrendingUp className="w-5 h-5 text-yellow-400" />
                <Award className="w-5 h-5 text-yellow-400" />
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
