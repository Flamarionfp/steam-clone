import React from "react";
import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

export interface ButtonProps extends ChakraButtonProps {
  displayName: string;
  onClick: () => void;
}