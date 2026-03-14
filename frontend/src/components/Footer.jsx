import { Crown, Facebook, Instagram, MapPin, MessageCircle, Phone, Shield, Sparkles, Mail, Clock } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Crown className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Chauhan Jewellers</h3>
                <p className="text-gray-400 text-sm">Since 1965</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              A legacy of excellence in jewelry craftsmanship for over 58 years. 
              Trusted by generations for authentic gold, diamonds, and traditional jewelry.
            </p>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 font-medium">BIS & IGI Certified</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-amber-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#collections" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
                  Collections
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
                  Visit Showroom
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
                  Custom Designs
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-amber-400">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">City Rd, Bhandari Gate</p>
                  <p className="text-gray-300">Batala, Punjab 143505</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <a href="tel:+918305300009" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
                  +91 83053 00009
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <a href="mailto:info@chauhanjewellers.com" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
                  info@chauhanjewellers.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-400" />
                <div>
                  <p className="text-gray-300">Mon-Sat: 10:00 AM - 8:00 PM</p>
                  <p className="text-gray-400 text-sm">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-amber-400">Connect With Us</h4>
            <div className="space-y-4">
              <p className="text-gray-300 text-sm">
                Follow us on social media for latest collections and exclusive offers
              </p>
              <div className="flex gap-3">
                <motion.a
                  href="https://www.facebook.com/chauhanjewellers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1280px-Facebook_f_logo_%282021%29.svg.png?_=20210818083032" alt="Facebook" width="20" height="20" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/chauhan_jewellers_batala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1280px-Instagram_logo_2022.svg.png?_=20220518162235" alt="Instagram" width="20" height="20" />
                </motion.a>
                <motion.a
                  href="https://wa.me/918305300009?text=Hi%20Chauhan%20Jewellers!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="20" height="20" />
                </motion.a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-gray-700">
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-full">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="text-xs text-gray-300">BIS Hallmark</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-full">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span className="text-xs text-gray-300">IGI Certified</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-full">
                  <Sparkles className="w-4 h-4 text-rose-400" />
                  <span className="text-xs text-gray-300">58 Years</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Chauhan Jewellers. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">
                Refund Policy
              </a>
            </div>
            <div className="flex items-center gap-2 text-amber-400 text-sm">
              <Shield className="w-4 h-4" />
              <span>Authentic Jewelry Since 1965</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
