import React from 'react';
import { motion } from 'framer-motion';
import { HardDrive, Zap, ShieldCheck } from 'lucide-react';

const values = [
  {
    icon: <HardDrive className="w-8 h-8 text-luxury-gold" />,
    title: "Local-First",
    description: "Ihre Daten gehören Ihnen. Unsere Architekturen priorisieren lokale Verarbeitung für maximale Unabhängigkeit und Geschwindigkeit."
  },
  {
    icon: <Zap className="w-8 h-8 text-luxury-gold" />,
    title: "High Performance",
    description: "Optimiert bis auf den letzten Taktzyklus. Wir schreiben effizienten Code, der Ressourcen schont und sofort reagiert."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-luxury-gold" />,
    title: "Privacy & Security",
    description: "Sicherheit ist kein Feature, sondern das Fundament. Enterprise-Grade Verschlüsselung und Privacy-by-Design."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Philosophy = () => {
  return (
    <section className="py-32 bg-zinc-950 relative border-t border-zinc-900/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Core Philosophy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zinc-400 max-w-2xl mx-auto text-lg"
          >
            Unser Ansatz für Softwareentwicklung verbindet handwerkliche Präzision mit modernsten Technologien.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-zinc-900/40 border border-zinc-800/50 p-10 hover:border-luxury-gold/30 transition-colors duration-500 rounded-sm relative overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/0 via-transparent to-transparent group-hover:from-luxury-gold/5 transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>

              <div className="mb-6 relative z-10">{value.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4 relative z-10">{value.title}</h3>
              <p className="text-zinc-400 leading-relaxed relative z-10">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
