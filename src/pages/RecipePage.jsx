import {
  Box,
  Button,
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
    <Flex flexDirection="column" align="center" height="100vh">
      <Box width="60%" height="100%">
        <Flex
          backgroundColor="red.300"
          justify="space-between"
          align="center"
          p="2rem 0 "
        >
          <Button
            onClick={onBackButtonClick}
            leftIcon={<ArrowBackIcon />}
            variant="outline"
          >
            Back
          </Button>
        </Flex>

        <Box className="imageBanner">
          <Image
            src={recipe.image}
            alt={recipe.label}
            objectFit="cover"
            w="100%"
            h="250px"
          />
        </Box>

        {/* Main content */}
        <Flex className="leftColumn" flexDirection="row" color="white">
          <Box flex="1" bg="green.500">
            <Text>{recipe.mealType}</Text>
            <Heading>{recipe.label}</Heading>
            <Text>{recipe.dishType}</Text>
            <Text>Total Cooking Time: {recipe.totalTime} min</Text>
            <Text>Servings: {recipe.servings}</Text>
            <Heading as="h4" size="md">
              Ingredients:
            </Heading>
            <VStack align="flex-start" spacing={1}>
              {recipe.ingredients.map((ingredient, index) => (
                <Text key={index}>{ingredient.text}</Text>
              ))}
            </VStack>
          </Box>
          <Box className="rightColumn" flex="1" bg="tomato">
            <Box className="healthLabels">
              <Text>Health labels</Text>
              <HStack wrap="wrap">
                {recipe.healthLabels.map((label) => (
                  <Tag
                    key={label}
                    bgColor="purple.200"
                    color="white"
                    fontSize="lg"
                    mt={1}
                  >
                    {label}
                  </Tag>
                ))}
              </HStack>
            </Box>
            <Box className="dietLabels">
              <Text>Diet:</Text>
              <HStack wrap="wrap">
                {recipe.dietLabels.map((label) => (
                  <Tag
                    key={label}
                    bgColor="green.200"
                    color="white"
                    fontSize="lg"
                    mt={1}
                  >
                    {label}
                  </Tag>
                ))}
              </HStack>
            </Box>
            <Box className="cautions">
              <Text>Cautions:</Text>
              <HStack wrap="wrap">
                {recipe.cautions.map((caution) => (
                  <Tag
                    key={caution}
                    bgColor="red.200"
                    color="white"
                    fontSize="lg"
                    mt={1}
                  >
                    {caution}
                  </Tag>
                ))}
              </HStack>
            </Box>
            <Box className="totalNutrients">
              <Text>Total Nutrients:</Text>
              <HStack align="flex-start" spacing={8}>
                <Flex direction="column">
                  <Text>
                    {Math.round(recipe.totalNutrients?.ENERC_KCAL?.quantity)}{" "}
                    {recipe.totalNutrients?.ENERC_KCAL?.unit}
                  </Text>
                  <Text>Energy</Text>
                </Flex>
                <Flex direction="column">
                  <Text>
                    {Math.round(recipe.totalNutrients?.PROCNT?.quantity)}{" "}
                    {recipe.totalNutrients?.PROCNT?.unit}
                  </Text>
                  <Text>Protein</Text>
                </Flex>
                <Flex direction="column">
                  <Text>
                    {Math.round(recipe.totalNutrients?.FAT?.quantity)}{" "}
                    {recipe.totalNutrients?.FAT?.unit}
                  </Text>
                  <Text>Fat</Text>
                </Flex>
                <Flex direction="column">
                  <Text>
                    {Math.round(recipe.totalNutrients?.CHOCDF?.quantity)}{" "}
                    {recipe.totalNutrients?.CHOCDF?.unit}
                  </Text>
                  <Text>Carbs</Text>
                </Flex>
                <Flex direction="column">
                  <Text>
                    {Math.round(recipe.totalNutrients?.CHOLE?.quantity)}{" "}
                    {recipe.totalNutrients?.CHOLE?.unit}
                  </Text>
                  <Text>Cholesterol</Text>
                </Flex>
                <Flex direction="column">
                  <Text>
                    {Math.round(recipe.totalNutrients?.NA?.quantity)}{" "}
                    {recipe.totalNutrients?.NA?.unit}
                  </Text>
                  <Text>Sodium</Text>
                </Flex>
              </HStack>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default RecipePage;
