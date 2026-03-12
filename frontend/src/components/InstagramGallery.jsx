// Instagram Gallery Component
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Heart, MessageCircle, Share2 } from 'lucide-react';

const InstagramGallery = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sample Instagram posts data (in real implementation, this would come from Instagram API)
  const samplePosts = [
    {
      id: 1,
      image: 'https://via.placeholder.com/400x400/fbbf24/1f2937?text=Gold+Necklace',
      caption: 'Exquisite 22K gold necklace with traditional design ✨ #ChauhanJewellers #GoldJewelry',
      likes: 245,
      comments: 18,
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/400x400/fbbf24/1f2937?text=Diamond+Ring',
      caption: 'Perfect for your special moment 💍 Diamond engagement rings available now! #Diamond #Engagement',
      likes: 189,
      comments: 12,
      timestamp: '5 hours ago'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/400x400/fbbf24/1f2937?text=Kundan+Set',
      caption: 'Traditional Kundan set for the modern bride 🌟 #Kundan #BridalJewelry',
      likes: 342,
      comments: 28,
      timestamp: '1 day ago'
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/400x400/fbbf24/1f2937?text=Silver+Earrings',
      caption: 'Elegant silver earrings for everyday elegance 🌙 #SilverJewelry #Elegant',
      likes: 156,
      comments: 9,
      timestamp: '2 days ago'
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/400x400/fbbf24/1f2937?text=Wedding+Collection',
      caption: 'Complete wedding collection now available! Make your big day special 👑 #WeddingJewelry',
      likes: 428,
      comments: 35,
      timestamp: '3 days ago'
    },
    {
      id: 6,
      image: 'https://via.placeholder.com/400x400/fbbf24/1f2937?text=Bracelet+Design',
      caption: 'Modern bracelet designs with traditional touch 💎 #Bracelet #ModernJewelry',
      likes: 201,
      comments: 15,
      timestamp: '4 days ago'
    }
  ];

  useEffect(() => {
    // Simulate loading Instagram posts
    setTimeout(() => {
      setPosts(samplePosts);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <section className="py-24 lg:py-32 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto"></div>
            <p className="text-gray-400 mt-4">Loading Instagram gallery...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-amber-50 via-white to-beige-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Instagram className="w-8 h-8 text-pink-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
              Instagram Gallery
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Follow us on Instagram for the latest designs, exclusive offers, and behind-the-scenes content
          </p>
          <a 
            href="https://www.instagram.com/chauhan_jewellers_batala" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <Instagram size={20} />
            Follow @chauhan_jewellers_batala
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border border-amber-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-amber-300/70 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
            >
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.caption}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm line-clamp-3">{post.caption}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between text-gray-600 text-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Heart size={16} className="text-red-500" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle size={16} />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  <span className="text-gray-400">{post.timestamp}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 mb-6">
            Tag us in your jewelry moments with <span className="text-amber-700 font-semibold">#ChauhanJewellers</span> to be featured!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://www.instagram.com/chauhan_jewellers_batala" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-amber-50 text-amber-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 border border-amber-300/50 hover:bg-amber-100 hover:border-amber-400"
            >
              <Instagram size={18} />
              View on Instagram
            </a>
            <a 
              href="https://wa.me/918305300009?text=Hi%20Chauhan%20Jewellers!%20I%20saw%20your%20Instagram%20post%20and%20I'm%20interested%20in%20your%20jewelry."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-green-700"
            >
              <MessageCircle size={18} />
              Enquire on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramGallery;
