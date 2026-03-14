import { Award, Clock, Crown, Facebook, Gem, Heart, Instagram, MapPin, MessageCircle, Phone, Shield, Sparkles, Users } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion';


const Visit = () => {
  return (
         <section id="contact" className="py-18 lg:py-32 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-6 py-3 rounded-full mb-6">
              <Crown size={20} />
              <span className="text-sm font-semibold">Premium Showroom Experience</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 font-display tracking-wide">Visit Our Showroom</h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Experience our exquisite collection in person at our premium Batala location. 
              Discover timeless elegance and exceptional craftsmanship in our welcoming showroom.
            </p>
          </motion.div>

          {/* Full Width Luxury Experience Section */}
          <motion.div
            className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-3xl shadow-2xl p-8 lg:p-10 border border-amber-200/60 mb-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white px-6 py-3 rounded-2xl mb-6">
                  <Sparkles size={20} />
                  <span className="font-semibold">Luxury Experience</span>
                </div>
                <h3 className="text-3xl font-light text-gray-900 mb-4">Why Visit Our Showroom?</h3>
                <p className="text-gray-700 text-lg leading-relaxed font-light max-w-3xl mx-auto">
                  Step into a world of elegance and discover our handcrafted masterpieces in person. 
                  Our premium showroom offers an intimate setting to explore our exclusive collections.
                </p>
              </div>

              {/* Premium Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md mx-auto mb-4">
                    <Gem size={24} className="text-amber-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Exclusive Collections</h4>
                  <p className="text-gray-600 text-sm font-light">View our complete range of 22K Gold, Certified Diamonds, and Traditional Jadau pieces</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md mx-auto mb-4">
                    <Users size={24} className="text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Expert Consultation</h4>
                  <p className="text-gray-600 text-sm font-light">Personalized guidance from our experienced jewelry specialists</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md mx-auto mb-4">
                    <Shield size={24} className="text-emerald-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Certified Authenticity</h4>
                  <p className="text-gray-600 text-sm font-light">All pieces come with BIS and IGI certification guarantees</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md mx-auto mb-4">
                    <Heart size={24} className="text-rose-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Family Tradition</h4>
                  <p className="text-gray-600 text-sm font-light">58 years of trusted service and craftsmanship excellence</p>
                </div>
              </div>

              {/* Premium CTA */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg border border-amber-200/40 max-w-4xl mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Crown size={24} className="text-amber-600" />
                    <h4 className="text-xl font-semibold text-gray-900">Ready to Visit?</h4>
                  </div>
                  <p className="text-gray-600 mb-6 font-light">Book your private consultation or walk in during business hours</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.a
                      href="tel:+918305300009"
                      className="flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:from-amber-600 hover:to-amber-700 hover:scale-105 hover:shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Phone size={20} />
                      <span>Call Now</span>
                    </motion.a>
                    <motion.a
                      href="https://wa.me/918305300009?text=Hi%20Chauhan%20Jewellers!%20I'd%20like%20to%20schedule%20a%20visit%20to%20your%20showroom."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* <MessageCircle size={20} /> */}
                      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="30" height="30" />
                      <span>WhatsApp</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-1 lg:gap-16 items-stretch">
            {/* Enhanced Contact Information Card */}
         

            {/* Additional Trust Indicators */}
            <motion.div
              className="mt-20 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 mb-6 font-light">Trusted by generations of families in Batala and beyond</p>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-2 text-amber-600">
                  <Award size={20} />
                  <span className="font-medium">BIS Certified</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600">
                  <Gem size={20} />
                  <span className="font-medium">IGI Certified</span>
                </div>
                <div className="flex items-center gap-2 text-rose-600">
                  <Heart size={20} />
                  <span className="font-medium">Since 1965</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-600">
                  <Shield size={20} />
                  <span className="font-medium">Lifetime Warranty</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  )
}

export default Visit