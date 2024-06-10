import ItemCount from "../ItemCount/ItemCount";
import { ToastContainer, toast } from "react-toastify";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";


import { useCart } from "../CartContext/CartContext";
import Swal from "sweetalert2";

const ItemDetail = ({ nombre, stock, img, id, precio,descripcion }) => {
  const onAdd = (quantity) => {
    toast(`Agregaste ${quantity} unidades`);
  };
  const { addToCart } = useCart();

  

  const handleAddToCart = () => {
    addToCart({ nombre, precio, img});
  };
  const handleComprarClick = () => {
    const product = { id, nombre, precio, img, descripcion };

    addToCart(product);
    Swal.fire({
      title: 'Producto agregado al carrito',
      text: `Has agregado ${nombre} al carrito.`,
      icon: 'success',
      confirmButtonText: 'Continuar'
    });
  };

  return (
    <Box backgroundColor={"#DBD3D8"} >
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        margin={"30px"}
        justify={"center"}
        
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={img}
          alt=""
          
        />

        <Stack  >
          <CardBody >
            <Heading size="md" >{nombre}</Heading>

            <Text py="2"> {descripcion}
            </Text>
          </CardBody>
          <Text color="blue.600" fontSize="2xl" m={10}>
            ${precio}
          </Text>

          <CardFooter  >
            <ButtonGroup spacing="4">
              <Button variant="solid" colorScheme="blue" onClick={handleComprarClick}>
                Comprar
              </Button>
              <Button
                variant="ghost"
                colorScheme="blue"
                onClick={handleAddToCart}
              >
                <ItemCount stock={stock} valorInicial={1} onAdd={onAdd}/>
                <ToastContainer />
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Stack>
      </Card>
    </Box>
  );
};

export default ItemDetail;
