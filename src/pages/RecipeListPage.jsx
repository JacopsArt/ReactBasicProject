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
    <Center  w="100vw" flexDir="column" p="0 4rem">
      <Heading>Aroma's Recipe App</Heading>

      <SearchInput onSearch={handleSearch} />

      <Flex flexWrap="wrap" justify="space-between">
        {filteredData.map((hit) => (
          <Box
            key={hit.recipe.label}
            onClick={() => onRecipeClick(hit.recipe)}
            mb={4}
            overflow="hidden"
          >
            <RecipeCard recipe={hit.recipe} />
          </Box>
        ))}
      </Flex>
    </Center>
  );
};
