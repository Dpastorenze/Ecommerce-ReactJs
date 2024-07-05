import React, { useContext, useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Config/Firebase";
import ItemCount from "../ItemCount/ItemCount";
import Context from "../../context/CartContext";

const ItemDetail = ({
  nombre,
  stock,
  img,
  id,
  precio,
  descripcion,
  currentQuantity,
}) => {
  const [cantidad, setCantidad] = useState(0);
  const [currentStock, setCurrentStock] = useState(stock);
  const { addItem, setDirectPurchase } = useContext(Context);
  const maxAv = currentStock - currentQuantity;
  const navigate = useNavigate();

  const onAdd = (quantity) => {
    const item = {
      id,
      nombre,
      precio,
      img,
      stock,
    };
    addItem(item, quantity);
    toast(`Agregaste ${quantity} unidades`);
    setCantidad(quantity);
  };

  const buy = async (quantity) => {
    const item = {
      id,
      nombre,
      precio,
      img,
      stock,
    };

    const docRef = doc(db, "productos", id);
    const productDoc = await getDoc(docRef);
    const currentStock = productDoc.data().stock;

    setDirectPurchase({ ...item, quantity });
    navigate("/Purchase");
  };

  return (
    <Flex
      backgroundColor={"#DBD3D8"}
      justify={"center"}
      align={"center"}
      p={5}
      w={"100%"}
    >
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
          <Text fontSize="xl" mt={1} m={5} color="blue.600">
            Stock disponible: {currentStock}
          </Text>
          <Text fontSize="xl" mt={1} m={5} color="blue.600">
            Cantidad actual en el carrito: {currentQuantity}
          </Text>
          <CardFooter>
            <Flex
              direction={"column"}
              align={"center"}
              justify={"center"}
              w={"100%"}
            >
              <Flex align={"center"} justify={"center"} w={"100%"}>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  mt={3}
                  onClick={() => buy(1)}
                  isDisabled={stock <= 0}
                >
                  Comprar
                </Button>
              </Flex>
              <Button variant="ghost" colorScheme="blue" mt={4}>
                <Link to="/">Seguir comprando</Link>
              </Button>
            </Flex>
            <ItemCount stock={maxAv} valorInicial={1} onAdd={onAdd} />
          </CardFooter>
        </Stack>
      </Card>
      <ToastContainer />
    </Flex>
  );
};

export default ItemDetail;
