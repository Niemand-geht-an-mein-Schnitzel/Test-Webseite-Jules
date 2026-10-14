import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { products } from '../data/products';

const Products = () => {
  return (
    <section className="py-32 bg-zinc-950 relative border-t border-zinc-900/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Exclusive Software
            </h2>
            <p className="text-zinc-400 text-lg">
              Entdecken Sie unser Portfolio an professionellen Desktop-Anwendungen und Tools, entworfen für höchste Ansprüche.
            </p>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-luxury-gold hover:text-yellow-400 font-medium transition-colors pb-1 border-b border-luxury-gold/30 hover:border-yellow-400"
          >
            View All Products <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-sm bg-zinc-900 border border-zinc-800/80 mb-6 aspect-video">
                {/* Image placeholder with slight zoom on hover */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60"></div>
              </div>

              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-luxury-gold transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-zinc-400 line-clamp-2">
                    {product.description}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center shrink-0 group-hover:bg-luxury-gold group-hover:border-luxury-gold group-hover:text-zinc-950 transition-all duration-300 text-zinc-500">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
