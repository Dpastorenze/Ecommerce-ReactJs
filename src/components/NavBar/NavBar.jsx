import React, { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Flex, Heading, Img } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { IoIosSearch } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo/Logo.gif";

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
    }
  };

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
        <Heading fontSize={"xl"}>
          <ChakraLink as={Link} to="/">
            <Img w={"55px"} h={'65px'} borderRadius={"10px"} src={Logo} />
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

  <Flex justify={"center"} align={"center"} as="form" onSubmit={handleSearchSubmit}>
        <Input
          placeholder="Si Buscas Aca Seguro Encontras"
          opacity={1}
          size={"md"}
          width={"xs"}
          backgroundColor={"whitesmoke"}
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Button type="submit" colorScheme="blue" ml={2}>
          <IoIosSearch />
        </Button>
      </Flex>
      <CartWidget />
    </Flex>
  );
};

export default NavBar;
