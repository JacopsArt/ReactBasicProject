import { useState } from 'react';
import { RecipeListPage } from './pages/RecipeListPage';
import RecipePage from './pages/RecipePage';
import { Center } from '@chakra-ui/react';

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBackButtonClick = () => {
    setSelectedRecipe(null);
  };

  return (
    <Center h="100%" overflowY="auto" >
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} onBackButtonClick={handleBackButtonClick} />
      ) : (
        <RecipeListPage onRecipeClick={handleRecipeClick} />
      )}
    </Center>
  );
};
