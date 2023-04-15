'use client';
import { motion } from 'framer-motion';
import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {
  return (
    <motion.div
      className={styles.hedaerText}
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <h1>Hello, Everyone</h1>
      <h2>You can translate upto 30 languages</h2>
    </motion.div>
  );
};

export default HeroSection;
