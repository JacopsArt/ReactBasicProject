import React from 'react';
import { Button } from '@chakra-ui/react'; // Import Chakra UI components

const RecipePage = ({ recipe, onBackButtonClick }) => {
  return (
    <div>
      <h2>{recipe.label}</h2>
      {/* Display other details of the selected recipe */}

      {/* Chakra UI Button */}
      <Button
        bgColor="blue.300"
        color="white"
        size="sm"
        onClick={onBackButtonClick}
        mt={4}
      >
        Back
      </Button>
    </div>
  );
};

export default RecipePage;
