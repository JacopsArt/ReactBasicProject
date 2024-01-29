// RecipePage.jsx

import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  VStack,
  HStack,
  Text,
  Tag,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

const RecipePage = ({ recipe, onBackButtonClick }) => {
  return (
    <Center h="100vh">
      <Box w="60%">
        <Flex justify="space-between" align="center" mb={4}>
          <HStack spacing={4}>
            <Button 
              onClick={onBackButtonClick}
              leftIcon={<ArrowBackIcon />}
              variant="outline"
            >
              Back
            </Button>
          </HStack>
        </Flex>

        {/* Banner with image */}
        <Image src={recipe.image} alt={recipe.label} objectFit="cover" w="100%" h="100px" />

        <Flex justify="space-between" align="center" mt={4}>
          {/* Centered title */}
          <Heading>{recipe.label}</Heading>
        </Flex>

        <Flex h="70vh">
          {/* Left column */}
          <VStack w="50%" spacing={4} align="flex-start">
            <Text>Meal Type: {recipe.mealType}</Text>
            <Text>Dish Type: {recipe.dishType}</Text>
            <Text>Total Cooking Time: {recipe.totalTime} min</Text>
            <Text>Servings: {recipe.servings}</Text>
            {/* Add more details as needed */}
          </VStack>

          {/* Right column */}
          <VStack w="50%" spacing={2} align="flex-start">
            {/* Health labels */}
            <HStack w="100%" spacing={1} wrap="wrap">
              {recipe.healthLabels.map((label) => (
                <Tag
                  key={label}
                  bgColor="purple.200"
                  color="white"
                  size="sm"
                  mt={1}
                >
                  {label}
                </Tag>
              ))}
            </HStack>

            <Text>Diet Label: {recipe.dietLabels.join(", ")}</Text>
            <Text>Cautions: {recipe.cautions.join(", ")}</Text>
            {/* Ingredients */}
            <Text>Ingredients:</Text>
            <VStack align="flex-start" spacing={1}>
              {recipe.ingredients.map((ingredient, index) => (
                <Text key={index}>{ingredient.text}</Text>
              ))}
            </VStack>

            <Text>
              Total Nutrients:
              <br />
              Energy: {recipe.totalNutrients.energy} kcal
              <br />
              Protein: {recipe.totalNutrients.protein} g
              <br />
              Fat: {recipe.totalNutrients.fat} g
              <br />
              Carbs: {recipe.totalNutrients.carbs} g
              <br />
              Cholesterol: {recipe.totalNutrients.cholesterol} mg
              <br />
              Sodium: {recipe.totalNutrients.sodium} mg
            </Text>
            {/* Add more details as needed */}
          </VStack>
        </Flex>
      </Box>
    </Center>
  );
};

export default RecipePage;
