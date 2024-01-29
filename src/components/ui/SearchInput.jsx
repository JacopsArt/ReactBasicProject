import { useState } from 'react';
import { Input } from '@chakra-ui/react';

export const SearchInput = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <Input size='md' w='300px' mt='4rem'
      placeholder="Search recipe"
      value={searchTerm}
      onChange={handleChange}
    />
  );
};