'use client';
import { motion } from 'framer-motion';
const HeroSection = () => {
  return (
    <motion.div
      className="hedaerText"
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <h1>Hello, Everyone</h1>
      <h2>You can translate upto 30 languages</h2>
    </motion.div>
  );
};

export default HeroSection;
