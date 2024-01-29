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
  Center,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

const RecipePage = ({ recipe, onBackButtonClick }) => {
  return (
    <Center flexDirection="column" align="left">
      <Box width="60vw"   m="2rem 0" boxShadow='dark-lg'  rounded='md' bg='white'>
        <Flex justify="space-between" align="center" p="2rem 0 ">
          <Button m="0 1rem"
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
            h="300px"
           
          />
        </Box>

        <Flex
          className="leftColumn"
          flexDirection="row"
          color="black"
          padding="2rem"
          
        >
          <Box flex="2">
            <Heading
              as="h4"
              size="md"
              color="grey"
              style={{ textTransform: "uppercase" }}
            >
              {recipe.mealType}
            </Heading>
            <Heading>{recipe.label}</Heading>
            <Text style={{ textTransform: "uppercase" }} fontWeight="500">
              {recipe.dishType || "N/A"}
            </Text>

            <Text mt="1rem">Total Cooking Time: {recipe.totalTime} min</Text>
            <Text>Servings: {recipe.yield || "N/A"}</Text>
            <Heading as="h4" size="md" mt="1rem">
              Ingredients:
            </Heading>
            <VStack align="flex-start" spacing={1}>
              {recipe.ingredients.map((ingredient, index) => (
                <Text key={index}>{ingredient.text}</Text>
              ))}
            </VStack>
          </Box>
          <Box className="rightColumn" flex="1">
            <Box className="healthLabels">
              <Heading as="h4" size="md" fontWeight="400">
                Health labels
              </Heading>
              <HStack mt="1rem" wrap="wrap">
                {recipe.healthLabels.map((label) => (
                  <Tag
                    key={label}
                    bgColor="green.200"
                    color="black"
                    fontSize="lg"
                    mt={1}
                  >
                    {label}
                  </Tag>
                ))}
              </HStack>
            </Box>
            <Box className="dietLabels">
              <Heading as="h4" size="md" fontWeight="400" mt="2rem">
                Diet:
              </Heading>
              <HStack wrap="wrap" mt="1rem">
                {recipe.dietLabels && recipe.dietLabels.length > 0 ? (
                  recipe.dietLabels.map((label) => (
                    <Tag
                      key={label}
                      bgColor="blue.200"
                      fontSize="lg"
                      mt={1}
                    >
                      {label}
                    </Tag>
                  ))
                ) : (
                  <Text>N/A</Text>
                )}
              </HStack>
            </Box>
            <Box className="cautions">
              <Heading as="h4" size="md" fontWeight="400" mt="2rem">
                Cautions:
              </Heading>
              <HStack wrap="wrap" mt="1rem">
                {recipe.cautions.map((caution) => (
                  <Tag
                    key={caution}
                    bgColor="red.300"
                    fontSize="lg"
                    mt={1}
                  >
                    {caution}
                  </Tag>
                ))}
              </HStack>
            </Box>
            <Box className="totalNutrients">
              <Heading as="h4" size="md" fontWeight="400" mt="2rem">
                Total Nutrients:
              </Heading>
              <Flex wrap="wrap" mr="1rem">
                {[
                  { key: "ENERC_KCAL", label: "Energy" },
                  { key: "PROCNT", label: "Protein" },
                  { key: "FAT", label: "Fat" },
                  { key: "CHOCDF", label: "Carbs" },
                  { key: "CHOLE", label: "Cholesterol" },
                  { key: "NA", label: "Sodium" },
                ].map((nutrient) => (
                  <Flex key={nutrient.key} direction="column" p="1rem">
                    <Text>
                      {Math.round(
                        recipe.totalNutrients?.[nutrient.key]?.quantity
                      )}{" "}
                      {recipe.totalNutrients?.[nutrient.key]?.unit}
                    </Text>
                    <Text>{nutrient.label}</Text>
                  </Flex>
                ))}
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Center>
  );
};

export default RecipePage;
