import { useState } from 'react';
import { Input } from '@chakra-ui/react';

export const SearchInput = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <Input
      size='lg'
      w='300px'
      mt='4rem'
      mb="6rem"
      variant="filled"
      color="white"
      focusBorderColor="black"
      focusColor="black"
      bg="red.200" 
      placeholder="Search recipe"
      value={searchTerm}
      onChange={handleChange}
    />
  );
  
  
};