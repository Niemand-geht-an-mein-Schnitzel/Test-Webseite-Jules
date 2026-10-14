import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/20 to-zinc-950"></div>
        {/* Subtle background glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8">
            Excellence in <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold to-luxury-bronze">Software Engineering</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Wir entwickeln exklusive Coding-Programme und hochperformante Software-Lösungen für Unternehmen, die keine Kompromisse eingehen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="group relative inline-flex items-center justify-center px-8 py-4 font-medium tracking-wide text-zinc-950 bg-luxury-gold hover:bg-yellow-500 transition-colors duration-300 rounded-sm overflow-hidden">
            <span className="relative flex items-center gap-2">
              Discover Programs
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button className="px-8 py-4 font-medium tracking-wide text-zinc-300 hover:text-white transition-colors duration-300 rounded-sm border border-zinc-800 hover:border-zinc-600">
            View Solutions
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
