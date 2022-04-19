import '@fontsource/roboto';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { theme } from '../theme';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ChakraProvider theme={theme} resetCSS>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    </Head>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App;
