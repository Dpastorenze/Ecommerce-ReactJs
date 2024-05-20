import React, { Profiler } from "react";
import CartWidget from "../CartWidget/CartWidget";
import {
  Box,
  Center,
  Flex,
  Heading,
  Img,
  InputRightElement,
  TagRightIcon,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Input } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex
      h={"10vh"}
      w={"100%"}
      justify={'space-between'}
      backgroundColor={'#DBD3D8'}
      align={'left'}
      padding={'10px'}
    >
      <Menu>
        <MenuButton
          as={Button}
          colorScheme='blue'
          leftIcon={<GiHamburgerMenu />}
          
          
        >
          Cuenta
        </MenuButton>
        <Heading fontSize={'xl'} >
            
            logo
            
        </Heading>
        <MenuList>
          <MenuGroup>
            <MenuItem>Perfil</MenuItem>
            <MenuItem>Compras realizadas </MenuItem>
            <MenuItem>Preguntas</MenuItem>
            
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title='Utilidades'>
            <MenuItem>Contacto</MenuItem>
            <MenuItem>Derechos reservados</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
      <Flex justify={'center'}align={'center'}>
        <Input
          placeholder="Si Buscas Aca Seguro Encontras"
          opacity={1}
          size={"md"}
          width={"xs"}
          backgroundColor={"whitesmoke"}
        />
      </Flex>

      <CartWidget />
        <Flex>

        </Flex>

    </Flex>
  );
};

export default NavBar;
