import React from 'react';
import { useCart } from '../context/CartContext';
import { Box, Heading, Text, Stack } from '@chakra-ui/react';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <Box p="4">
      <Heading>Carrito de Compras</Heading>
      {cart.length === 0 ? (
        <Text mt="4">Tu carrito está vacío</Text>
      ) : (
        <Stack mt="4" spacing="4">
          {cart.map((product) => (
            <Box key={product.id} p="4" borderWidth="1px" borderRadius="lg">
              <Text fontSize="xl">{product.nombre}</Text>
              <Text color="blue.600" fontSize="2xl">{product.precio}</Text>
              <Button mt="2" colorScheme="red" onClick={() => removeFromCart(product.id)}>
                Eliminar
              </Button>
            </Box>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default Cart;
