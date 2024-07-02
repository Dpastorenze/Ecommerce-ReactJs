import React, { useState, useContext } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Flex,
  Input,
  Heading,
  Button,
  Box,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Timestamp, addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import Context from "../../context/CartContext";
import { db } from "../../Config/Firebase";

const Checkout = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    repeatemail: "",
    phone: "",
  });
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const { cart, getTotal, clearCart } = useContext(Context);
  const navigate = useNavigate();

  const updateUser = (event) => {
    setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!user.name) {
      errors.name = "Tenés que llenar el campo con tu nombre";
    } else if (user.name.length < 4) {
      errors.name = "El nombre debe tener al menos 4 caracteres";
    }
    if (!user.email) {
      errors.email = "Tenés que llenar el campo con tu email";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(user.email)) {
      errors.email = "El email no es válido";
    }
    if (!user.repeatemail) {
      errors.repeatemail = "Tenés que repetir tu email";
    } else if (user.email !== user.repeatemail) {
      errors.repeatemail = "Los emails no coinciden";
    }
    if (!user.phone) {
      errors.phone = "Tenés que llenar el campo con tu teléfono";
    }

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const getOrder = async () => {
    if (!validateForm()) {
      return;
    }
if(cart.length==0){
  console.log('no agregaste nada al carrito');
  return
}

    setLoading(true);
    const coleccion = collection(db, "orders");


    try {
      for (const item of cart) {
        const docRef = doc(db, "productos", item.id);
        const productDoc = await getDoc(docRef);
        const currentStock = productDoc.data().stock;
        if (currentStock >= item.quantity) {
          await updateDoc(docRef, {
            stock: currentStock - item.quantity,
          });
        } else {
          console.log(`no hay stock suficiente ${item.nombre}`);
          setLoading(false);
          return;
        }
      }
      

      const order = {
        buyer: user,
        cart: cart,
        total: getTotal(),
        fecha: Timestamp.now(),
      };
      const orderRef = await addDoc(coleccion, order);
      Swal.fire({
        title: "Gracias por tu compra",
        text: `El número de orden es ${orderRef.id}`,
        icon: "success",
        confirmButtonText: "Ir al inicio",
      }).then((result) => {
        clearCart();
        navigate("/");
      });
    } catch (error){
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex direction={"column"} align={"center"} justify={"center"}>
  {cart.map((prod) => (
        <Box key={prod.id} mb={5} display="flex" alignItems="center">
          <Image src={prod.img} alt={prod.nombre} boxSize="50px" mr={5} />
          <Heading size="md">{prod.nombre}</Heading>
        </Box>
      ))}
      <Flex direction="column" justify={"center"} align={"center"}>
        <Heading mb={5}>Último paso...</Heading>
        <FormControl isInvalid={!!error.name} mb={3}>
          <FormLabel>Nombre</FormLabel>
          <Input
            type="text"
            name="name"
            placeholder="Ingresa tu nombre aquí"
            onChange={updateUser}
          />
          <FormErrorMessage>{error.name}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!error.email} mb={3}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="Ingresa tu email aquí"
            onChange={updateUser}
          />
          <FormErrorMessage>{error.email}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!error.repeatemail} mb={3}>
          <FormLabel>Repetir Email</FormLabel>
          <Input
            type="email"
            name="repeatemail"
            placeholder="Repite tu email"
            onChange={updateUser}
          />
          <FormErrorMessage>{error.repeatemail}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!error.phone} mb={5}>
          <FormLabel>Teléfono</FormLabel>
          <Input
            type="text"
            name="phone"
            placeholder="Ingresa tu teléfono"
            onChange={updateUser}
          />
          <FormErrorMessage>{error.phone}</FormErrorMessage>
        </FormControl>
      </Flex>
      <Button
        colorScheme="blue"
        isLoading={loading}
        loadingText="Procesando"
        onClick={getOrder}
      >
        Finalizar compra
      </Button>
    </Flex>
  );
};

export default Checkout;
