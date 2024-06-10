import React from "react";
import Item from "../Item/Item";
import { Box, Flex } from "@chakra-ui/react";

const ItemList = ({ products }) => {
  return (
    
    <Flex
      wrap={"wrap"}
      justify={"space-evenly"}
      align={"center"}
      mt={10}
      mb={5}
    >
      {products.map((prod) => (
        <Box key={prod.id}>
          <Item {...prod} />
        </Box>
      ))}
    </Flex>
  );
};

export default ItemList;
