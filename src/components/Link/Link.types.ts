import * as NextLink from 'next/link';
import { ChakraComponent } from '@chakra-ui/react'

export interface LinkProps extends NextLink.LinkProps {
  label: string;
  useUppercase?: boolean;
  style: ChakraComponent<"a", {}>
}