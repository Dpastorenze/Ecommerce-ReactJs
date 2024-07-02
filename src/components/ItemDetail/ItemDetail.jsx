import ItemCount from "../ItemCount/ItemCount";
import { ToastContainer, toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import Context from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ nombre, stock, img, id, precio, descripcion }) => {
  const [cantidad, setCantidad] = useState(0);
  const { addItem } = useContext(Context);

  const onAdd = (quantity) => {
    const item = {
      id,
      nombre,
      precio,
      img,
      stock
    };
    addItem(item, quantity);
    toast(`Agregaste ${quantity} unidades`);
    setCantidad(quantity);
  };

  return (
    <Flex backgroundColor={"#DBD3D8"} justify={"center"} align={"center"} p={5} w={'100%'}>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        margin={"30px"}
        justify={"center"}
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "400px" }}
          src={img}
          alt=""
        />
        <Stack>
          <CardBody>
            <Heading size="md">{nombre}</Heading>
            <Text py="2"> {descripcion}</Text>
          </CardBody>
          <Text color="blue.600" fontSize="2xl" m={5}>
            ${precio} 
          </Text>
          <Text fontSize='xl'  mt={1} m={5} color="blue.600">
            Stock disponible: {stock}
            </Text>
          <CardFooter>
                <Flex direction={"column"} align={"center"} justify={'center'} w={"100%"}>
                  <Flex align={'center'} justify={'center'} w={'100%'}>
                  <Button variant="solid" colorScheme="blue" mt={3}><Link to="/checkout">
                      Comprar
                      </Link>
                    </Button>
                  </Flex>
                  <Button variant="ghost" colorScheme="blue" mt={4}>
                    <Link to="/">Seguir comprando</Link>
                  </Button>
                </Flex>
             
                <ItemCount stock={stock} valorInicial={1} onAdd={onAdd} />
              
           
          </CardFooter>
          
        </Stack>
      </Card>
      <ToastContainer />
    </Flex>
  );
};

export default ItemDetail;
