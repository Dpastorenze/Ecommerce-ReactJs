import React, { Profiler } from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Flex, Heading, Img } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Input } from "@chakra-ui/react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo/Logo.gif";

const NavBar = () => {
  return (
    <Flex
      h={"10vh"}
      w={"100%"}
      justify={"space-between"}
      backgroundColor={"#DBD3D8"}
      align={"center"}
      padding={"10px"}
    >
      <Menu>
        <MenuButton
          as={Button}
          colorScheme="blue"
          leftIcon={<GiHamburgerMenu />}
        >
          Cuenta
        </MenuButton>

        <MenuList>
          <MenuGroup>
            <MenuItem>Perfil</MenuItem>
            <MenuItem>Compras realizadas </MenuItem>
            <MenuItem>Preguntas</MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Utilidades">
            <MenuItem>Contacto</MenuItem>
            <MenuItem>Derechos reservados</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
      <Menu>
        <Heading fontSize={"xl"}>
          <ChakraLink as={Link} to="/">
            <Img w={"50px"} borderRadius={"10px"} src={Logo} />
          </ChakraLink>
        </Heading>
        <MenuButton as={Button} colorScheme="blue" rightIcon={<IoIosSearch />}>
          Categorias
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link to="/categorias/Gastronomia">Gastronomia</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/categorias/Bazar">Bazar</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/categorias/Indumentaria">Indumentaria</Link>
          </MenuItem>
        </MenuList>
      </Menu>

      <Flex justify={"center"} align={"center"}>
        <Input
          placeholder="Si Buscas Aca Seguro Encontras"
          opacity={1}
          size={"md"}
          width={"xs"}
          backgroundColor={"whitesmoke"}
        />
      </Flex>

      <CartWidget />
    </Flex>
  );
};

export default NavBar;
