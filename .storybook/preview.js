import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { addDecorator } from '@storybook/react';
import { theme } from '../src/theme';

addDecorator((stories) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      {stories()}
    </ChakraProvider>
  );
});
