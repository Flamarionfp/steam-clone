import React from 'react';
import { Heading, Center, HStack, Link, Text } from '@chakra-ui/react';

const Home: React.FC = () => (
  <>
    <Center mt="20">
      <Heading color="primary.500">Welcome to this Template with Next + Chakra UI + Typescript</Heading>
    </Center>
    <Center mt="10" flexDirection="column">
      <HStack>
        <Text fontSize="lg">By: </Text>
        <Link fontSize="lg" color="primary.400" href="https://www.linkedin.com/in/flamarion-fagundes-pinto-0b037b210/">Flamarion Fagundes Pinto</Link>
      </HStack>
    </Center>
    <Center mt="5">
      <Text>Contributors: </Text>
      <Link pl="2" color="primary.400" href="https://www.linkedin.com/in/bruno-domingues-da-silva/">Bruno Domingues da Silva</Link>
    </Center>
  </>
);

export default Home;
