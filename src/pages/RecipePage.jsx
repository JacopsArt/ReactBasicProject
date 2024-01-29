import React from 'react';

const RecipePage = ({ recipe, onBackButtonClick }) => {
  return (
    <div>
      <h2>{recipe.label}</h2>
      {/* Display other details of the selected recipe */}
      <button onClick={onBackButtonClick}>Back</button>
    </div>
  );
};

export default RecipePage;
