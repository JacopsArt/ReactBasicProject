import React, { useState } from 'react';
import { Center, Heading, VStack, Image, Text, Tag, Box } from '@chakra-ui/react';
import { data } from '../utils/data';
import { SearchInput } from '../components/ui/SearchInput';

export const RecipeListPage = ({ onRecipeClick }) => {
  const [filteredData, setFilteredData] = useState(data.hits);

  const handleSearch = (searchTerm) => {
    const filteredResults = data.hits.filter((hit) =>
      hit.recipe.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredData(filteredResults);
  };

  return (
    <Center h="100vh" flexDir="column">
      <Heading>Your Recipe App</Heading>

      {/* Voeg de SearchInput toe onder de titel */}
      <SearchInput onSearch={handleSearch} />

      <Box mt={4} p={2} h="60vh" overflowY="auto">
        {filteredData.map((hit) => (
          <div key={hit.recipe.label} onClick={() => onRecipeClick(hit.recipe)}>
            <Image src={hit.recipe.image} alt={hit.recipe.label} w="200px" h="150px" borderRadius="lg" />
            <Text fontSize="lg">{hit.recipe.label}</Text>
            <Text>Diet Label: {hit.recipe.dietLabels.join(', ')}</Text>
            <Text>Cautions: {hit.recipe.cautions.join(', ')}</Text>
            <Text>Meal Type: {hit.recipe.mealType}</Text>
            <Text>Dish Type: {hit.recipe.dishType}</Text>

            <VStack spacing={1}>
              {hit.recipe.healthLabels.map((label) => (
                <Tag key={label} bgColor="green.300" color="white" size="sm">
                  {label}
                </Tag>
              ))}
            </VStack>
          </div>
        ))}
      </Box>
    </Center>
  );
};
