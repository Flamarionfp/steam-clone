import * as NextLink from 'next/link';
import { ChakraComponent } from '@chakra-ui/react'

export interface LinkProps extends NextLink.LinkProps {
  label: string;
  style: ChakraComponent<"a", {}>
}