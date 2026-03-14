import { ArrowRight, Award, ChevronRight, Crown, Gem, Heart, Shield, Sparkles, Star } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion';


const ProductCollection = ({filteredProducts,selectedCategory,setSelectedCategory}) => {
  return (
    <section id="collections" className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 font-display tracking-wide">Jewellery Collections</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-16 font-light tracking-wide">Crafted for the modern connoisseur</p>

          {/* Sleek Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-12 mb-24">
            <motion.div
              className="group flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <img src="/bis.webp" alt="BIS" className='w-10 h-10 object-contain' />
              </div>
              <div className="text-center">
                <span className="text-sm font-semibold text-gray-900 tracking-wide">BIS Hallmark</span>
                <span className="text-xs text-gray-500 block mt-1">Certified Quality</span>
              </div>
            </motion.div>

            <motion.div
              className="group flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <img src="/igi.jpg" alt="IGI" className='w-10 h-10 object-contain' />
              </div>
              <div className="text-center">
                <span className="text-sm font-semibold text-gray-900 tracking-wide">IGI Certified</span>
                <span className="text-xs text-gray-500 block mt-1">Diamond Authenticity</span>
              </div>
            </motion.div>

            <motion.div
              className="group flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Heart size={24} className="text-rose-500" />
              </div>
              <div className="text-center">
                <span className="text-sm font-semibold text-gray-900 tracking-wide">Since 1965</span>
                <span className="text-xs text-gray-500 block mt-1">58 Years Heritage</span>
              </div>
            </motion.div>

            <motion.div
              className="group flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Shield size={24} className="text-emerald-500" />
              </div>
              <div className="text-center">
                <span className="text-sm font-semibold text-gray-900 tracking-wide">H/M Hallmark</span>
                <span className="text-xs text-gray-500 block mt-1">Purity Guaranteed</span>
              </div>
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
  )
}

export default ProductCollection