import React from "react";
import { Flex } from "@chakra-ui/react";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ nombre, precio, img, id }) => {
  return (
    <Card maxW="sm" borderRadius="lg" overflow="hidden" boxShadow="md" >
      <CardBody>
        <Image
          src={img}
          alt={nombre}
          borderRadius="lg"
          align="center"
          objectFit="cover"
          // w="100%"
          // h="150px"
          boxSize='200px'
                />
        <Stack mt="6" spacing="4">
          <Heading size="md">{nombre}</Heading>
          <Text color="blue.600" fontSize="2xl">
            ${precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Flex align={"center"}>
          <Button variant="solid" colorScheme="blue">
            <Link to={`/producto/${id}`}>Ver Detalle</Link>
          </Button>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default Item;
