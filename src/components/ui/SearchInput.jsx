import React, { useState } from 'react';
import { Input } from '@chakra-ui/react';

export const SearchInput = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <Input
      placeholder="Search by name"
      value={searchTerm}
      onChange={handleChange}
    />
  );
};