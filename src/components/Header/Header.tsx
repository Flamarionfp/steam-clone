import React from 'react';
import { Box, HStack, Text, Link, Divider, Menu, MenuButton, MenuList, MenuItem, Flex } from '@chakra-ui/react';
import { HeaderProps } from './Header.types';
import { Button } from '../Button'
import { DownloadIcon } from '@chakra-ui/icons'

export const Header: React.FC<HeaderProps> = (props) => {
  // const { isAuthenticated } = props;

  return (
    <Box bg="darkGray.500" h="26" pt="2">
      <HStack justify="flex-end" maxW="80%">
        <Button onClick={() => null} displayName="Instale o Steam" leftIcon={<DownloadIcon />} />
        <Link color="#F0FBFF" fontSize="xs" fontWeight="thin" _hover={{}}>
          iniciar sessão
        </Link>
        <Divider orientation="vertical" h="3" />
        <Menu>
          <MenuButton as="button">
            <Text color="#F0FBFF" fontSize="xs" fontWeight="thin">
              idioma
            </Text>
          </MenuButton>
          <MenuList>
            <MenuItem>Português</MenuItem>
            <MenuItem>Inglês</MenuItem>
            <MenuItem>Espanhol</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
}