import React from 'react';
import { LinkProps } from './Link.types'
import * as NextLink from 'next/link';
import { chakra } from '@chakra-ui/react'

export const Link: React.FC<LinkProps> = (props) => {
  const { href, label, style } = props;

  return (
    <NextLink.default href={href} passHref>
      <chakra.a color="#DAE6F1" {...style}>{label}</chakra.a>
    </NextLink.default>
  )
}