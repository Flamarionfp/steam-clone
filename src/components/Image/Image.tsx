import React from 'react';
import { Image as ChakraImage } from '@chakra-ui/react';
import * as NextImage from 'next/image';
import { ImageProps } from './Image.types';
import { useStorybook } from '../../hooks/useStorybook'
import { sizes } from '../../theme/sizes'
import { calcRemToPx, convertRemStringToNumber } from '../../helpers/sizes'

export const Image: React.FC<ImageProps> = (props) => {
  const { src, alt, w, h } = props;
  const { isRunningInStorybook } = useStorybook();

  function getImageSize(w: number, h: number): { width: number, height: number } {
    const rmValueW = sizes[w]
    const rmValueH = sizes[h]

    const values = {
      width: convertRemStringToNumber(rmValueW),
      height: convertRemStringToNumber(rmValueH)
    }

    const { width, height } = values;

    return { width: calcRemToPx(width), height: calcRemToPx(height) }
  }

  const { width, height } = getImageSize(w, h);

  if (isRunningInStorybook) {
    return (
      <ChakraImage src={src} alt={alt} w={w} h={h} />
    )
  }

  return (
    <NextImage.default src={src} alt={alt} width={width} height={height} />
  )
}