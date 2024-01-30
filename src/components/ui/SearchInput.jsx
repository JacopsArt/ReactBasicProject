import { useState } from "react";
import { Input } from "@chakra-ui/react";

export const SearchInput = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filterTerms = ["vegan", "vegetarian", "pescetarian"];
    const filterTerm = filterTerms.find((term) =>
      value.toLowerCase().includes(term)
    );

    onSearch(value, filterTerm);
  };

  return (
    <Input
      size="lg"
      w="300px"
      mt="4rem"
      mb="5rem"
      variant="filled"
      color="black"
      focusBorderColor="black"
      focusColor="black"
      bg="red.200"
      placeholder="Search recipe"
      value={searchTerm}
      onChange={handleChange}
    />
  );
};
