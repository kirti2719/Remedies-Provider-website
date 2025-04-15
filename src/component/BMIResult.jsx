import React from 'react';

function BMIResult({ bmi, category }) {
  return (
    <div className="result">
      <h3>Your BMI: {bmi}</h3>
      <p className={`category ${category.toLowerCase()}`}>{category}</p>
    </div>
  );
}

export default BMIResult;
