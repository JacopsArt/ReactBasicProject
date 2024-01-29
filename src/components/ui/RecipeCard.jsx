import { Card, Image, CardBody, Stack, Heading, Flex, Text, HStack, Tag } from "@chakra-ui/react";

export const RecipeCard = ({ recipe }) => {
  return (
    <Card
     m="4rem 1rem"
      borderRadius="xl"
      w="sm" 
      overflow="hidden"  
      onClick={() => {}}
      cursor="pointer"
      _hover={{ transform: "scale(1.01)", overflow: "hidden" }} 
     
    >
      <CardBody minH="500px" p="0">
        <Image
          h={64}
          w="100%"
          src={recipe.image}
          style={{ margin: "0", objectFit: "cover" }}
        />
        <Stack mt="6">
          <Heading textAlign="center" size="md">{recipe.label}</Heading>
          {recipe.dish && <Text>{recipe.dish}</Text>}
          <Flex justify="center" gap={2}>
            {recipe.healthLabels.includes("Vegan") && (
              <Tag bgColor="green.300" size="sm" mt={1} mr={1}>
                Vegan
              </Tag>
            )}
            {recipe.healthLabels.includes("Vegetarian") && (
              <Tag bgColor="green.300" size="sm" mt={1}>
                Vegetarian
              </Tag>
            )}
          </Flex>
          {recipe.dietLabels && recipe.dietLabels.length > 0 && (
            <HStack justify="center" wrap="wrap" mt="1rem">
              {recipe.dietLabels.map((label) => (
                <Tag
                  key={label}
                  bgColor="purple.200"
                  size="sm"
                >
                  {label}
                </Tag>
              ))}
            </HStack>
          )}
          {recipe.dishType && (
            <Text  textAlign="center" style={{ textTransform: "uppercase" }} >
              Dish: {recipe.dishType}
            </Text>
          )}
          {recipe.cautions.length > 0 && (
            <>
              <Text textAlign="center">
                Cautions
                <HStack justify="center" wrap="wrap" >
                  {recipe.cautions.map((caution) => (
                    <Tag key={caution} bgColor="red.300" size="sm">
                      {caution}
                    </Tag>
                  ))}
                </HStack>
              </Text>
            </>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
};
