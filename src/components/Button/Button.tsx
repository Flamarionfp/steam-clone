import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = (props) => {
  const { displayName, onClick = () => null, leftIcon } = props;

  return (
    <ChakraButton
      onClick={onClick}
      bg="green.500"
      color="white"
      borderRadius="1px"
      h="6"
      fontSize="xs"
      fontWeight="normal"
      leftIcon={leftIcon}
      _focus={{}}
    >
      {displayName}
    </ChakraButton>
  );
}