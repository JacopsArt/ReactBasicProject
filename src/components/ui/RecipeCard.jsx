import {
  Card,
  Image,
  CardBody,
  Stack,
  Heading,
  Flex,
  Text,
  HStack,
} from "@chakra-ui/react";
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
      <CardBody minH="500px" m="1rem">
        <Image h={64} w="sm" src={recipe.image} borderRadius="xl" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{recipe.label}</Heading>
          <Text>{recipe.dish}</Text>
          <Flex  justify="center" gap={2}>
            {recipe.healthLabels.includes("Vegan") && (
              <Tag bgColor="green.300"  size="sm" mt={1} mr={1}>
                Vegan
              </Tag>
            )}
            {recipe.healthLabels.includes("Vegetarian") && (
              <Tag  bgColor="green.300" size="sm" mt={1}>
                Vegetarian
              </Tag>
            )}
          </Flex>
          <Text textAlign="center" mt="4">
            Cautions
            <HStack justify="center" wrap="wrap" mt="1rem">
              {recipe.cautions.map((caution) => (
                <Tag key={caution} bgColor="red.300" size="sm" mt={1}>
                  {caution}
                </Tag>
              ))}
            </HStack>
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
