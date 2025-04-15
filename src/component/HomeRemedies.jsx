import React from 'react';
import './HomeRemedies.css';
import Almond from '../incredient/Almond.jpeg';
import Cinnamon from '../incredient/Cinnamon.jpg';
import Ginger from '../incredient/Ginger.jpg';

import Honeys from '../incredient/honeys.jpg';
import Lemon from '../incredient/Lemon.webp';
import Oats from '../incredient/Oats.jpeg';
import Spinach from '../incredient/Spinach.jpeg';
import OliveOil from '../incredient/Oliveoil.jpeg';
import Yogurt from '../incredient/Yogurt.jpeg';

export default function HomeRemedies() {
  const remedies = [
    { name: 'Almond', image: Almond, benefits: 'Rich in healthy fats, vitamin E, and helps in heart health.', bodyPart: 'Heart', minerals: 'Magnesium', vitamins: 'Vitamin E' },
    { name: 'Cinnamon', image: Cinnamon, benefits: 'Contains antioxidants, helps regulate blood sugar levels.', bodyPart: 'Blood', minerals: 'Calcium', vitamins: 'Vitamin K' },
    { name: 'Ginger', image: Ginger, benefits: 'Aids digestion, reduces nausea, and fights infections.', bodyPart: 'Stomach', minerals: 'Potassium', vitamins: 'Vitamin B6' },
    
    { name: 'Honey', image: Honeys, benefits: 'Natural antibacterial, helps soothe sore throats and aids digestion.', bodyPart: 'Throat', minerals: 'Zinc', vitamins: 'Vitamin B' },
    { name: 'Lemon', image: Lemon, benefits: 'High in vitamin C, supports immune function and aids digestion.', bodyPart: 'Immune System', minerals: 'Calcium', vitamins: 'Vitamin C' },
    { name: 'Oats', image: Oats, benefits: 'Rich in fiber, helps lower cholesterol and supports digestion.', bodyPart: 'Digestive System', minerals: 'Iron', vitamins: 'Vitamin B1' },
    { name: 'Spinach', image: Spinach, benefits: 'Loaded with iron, vitamins, and supports bone health.', bodyPart: 'Bones', minerals: 'Iron', vitamins: 'Vitamin A, Vitamin K' },
    { name: 'Olive Oil', image: OliveOil, benefits: 'Contains healthy fats, supports heart health and reduces inflammation.', bodyPart: 'Heart', minerals: 'Iron', vitamins: 'Vitamin E' },
    { name: 'Yogurt', image: Yogurt, benefits: 'Rich in probiotics, improves gut health and boosts immunity.', bodyPart: 'Gut', minerals: 'Calcium', vitamins: 'Vitamin D' }
  ];

  return (
    <div className="homehead">
      <div className="homeremedies">
        {remedies.map((remedy, index) => (
          <div key={index} className="homeremedies-info">
            <img src={remedy.image} alt={remedy.name} />
            <p>{remedy.name}</p>
            <p className="benefits">{remedy.benefits}</p>
            <p className="bodypart">Good for: {remedy.bodyPart}</p>
            <p className="minerals">Minerals: {remedy.minerals}</p>
            <p className="vitamins">Vitamins: {remedy.vitamins}</p>
          </div>
        ))}
      </div>
    </div>
  );
}