import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BMIResult from './BMIResult';
import LevelIndicator from './LevelIndicator';
import OIP from '../Image/OIP.png';
import './Bmi.css';

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const calculateBMI = () => {
    setError('');
    
    if (!weight || !height) {
      setError('Please enter both weight and height');
      return;
    }

    if (weight <= 0 || height <= 0) {
      setError('Weight and height must be positive numbers');
      return;
    }

    const bmiValue = (weight / (height * height)).toFixed(2);
    setBMI(bmiValue);
    determineCategory(bmiValue);
  };

  const determineCategory = (bmiValue) => {
    if (bmiValue < 18.5) setCategory("Underweight");
    else if (bmiValue < 24.9) setCategory("Normal");
    else if (bmiValue < 29.9) setCategory("Overweight");
    else setCategory("Obese");
  };

  const handleInputChange = (e, setter) => {
    const value = e.target.value;
    if (value === '' || (parseFloat(value) >= 0 && !isNaN(value))) {
      setter(value);
    }
  };

  return (
    <motion.div 
      className="bmi-calculator-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="bmi-container"
        variants={containerVariants}
      >
        <motion.h2 
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          BMI Calculator
        </motion.h2>

        <motion.div 
          className="input-group"
          variants={itemVariants}
        >
          <label>Weight (kg)</label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="number"
            value={weight}
            onChange={(e) => handleInputChange(e, setWeight)}
            placeholder="Enter weight"
            step="0.1"
          />
        </motion.div>

        <motion.div 
          className="input-group"
          variants={itemVariants}
        >
          <label>Height (m)</label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="number"
            value={height}
            onChange={(e) => handleInputChange(e, setHeight)}
            placeholder="Enter height"
            step="0.01"
          />
        </motion.div>

        <AnimatePresence>
          {error && (
            <motion.div 
              className="error-message"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={calculateBMI}
        >
          Calculate BMI
        </motion.button>

        <AnimatePresence>
          {bmi && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <BMIResult bmi={bmi} category={category} />
              <LevelIndicator bmi={parseFloat(bmi)} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div 
        className="bmiimg"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img src={OIP} alt="BMI Illustration" />
      </motion.div>
    </motion.div>
  );
}

export default BMICalculator;
