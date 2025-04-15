import React from 'react';
import { motion } from 'framer-motion';
import './LevelIndicator.css';

function LevelIndicator({ level }) {
  const getLevel = () => {
    let levels = [];
    const maxLevel = 5; // You can adjust the maxLevel based on your needs.
    for (let i = 1; i <= maxLevel; i++) {
      levels.push(
        <motion.div
          key={i}
          className={`level ${i <= level ? 'active' : ''}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
        />
      );
    }
    return levels;
  };

  return (
    <div className="level-indicator">
      {getLevel()}
    </div>
  );
}

export default LevelIndicator;
