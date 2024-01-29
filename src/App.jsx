import { useState } from 'react';
import { RecipeListPage } from './pages/RecipeListPage';
import RecipePage from './pages/RecipePage';

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBackButtonClick = () => {
    setSelectedRecipe(null);
  };

  return (
    <div>
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} onBackButtonClick={handleBackButtonClick} />
      ) : (
        <RecipeListPage onRecipeClick={handleRecipeClick} />
      )}
    </div>
  );
};
