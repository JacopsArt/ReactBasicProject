// RecipeCard.jsx
import React from "react";
import { Card, Image, CardBody, Stack, Heading, Text, Flex } from "@chakra-ui/react";
import { Tag } from "./RecipeListPage.jsx";


export const RecipeCard = ({ recipe }) => {
  return (
    <Card
      borderRadius="xl"
      w="sm"
      onClick={() => {}}
      cursor="pointer"
      _hover={{ transform: "scale(1.01)" }}
    >
      <CardBody>
        <Image h={64} w="sm" src={recipe.image} borderRadius="xl" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{recipe.label}</Heading>
          <Text>{/* Add other details of the recipe here */}</Text>
          <Flex gap={2}>
            {recipe.healthLabels.includes("Vegan") && (
              <Tag bgColor="green.300" color="white" size="sm" mt={1} mr={1}>
                Vegan
              </Tag>
            )}
            {recipe.healthLabels.includes("Vegetarian") && (
              <Tag bgColor="green.300" color="white" size="sm" mt={1}>
                Vegetarian
              </Tag>
            )}
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};
