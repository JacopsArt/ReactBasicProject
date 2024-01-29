// RecipeListPage.jsx
import { useState } from "react";
import { Center, Heading, Box, Flex } from "@chakra-ui/react";
import { data } from "../utils/data";
import { SearchInput } from "../components/ui/SearchInput";
import { RecipeCard } from "../components/ui/RecipeCard"; // Importeer RecipeCard

export const RecipeListPage = ({ onRecipeClick }) => {
  const [filteredData, setFilteredData] = useState(data.hits);

  const handleSearch = (searchTerm) => {
    const filteredResults = data.hits.filter((hit) =>
      hit.recipe.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredData(filteredResults);
  };

  return (
    <Center h="100vh" w="100vw" flexDir="column">
      <Heading>Your Recipe App</Heading>

      <SearchInput onSearch={handleSearch} />

      <Flex mt={4} p={2} h="60vh" flexWrap="wrap" justify="space-between">
        {filteredData.map((hit) => (
          <Box
            key={hit.recipe.label}
            onClick={() => onRecipeClick(hit.recipe)}
            mb={4}
            overflow="hidden"
          >
            {/* Gebruik RecipeCard-component voor elke kaart */}
            <RecipeCard recipe={hit.recipe} />
          </Box>
        ))}
      </Flex>
    </Center>
  );
};
