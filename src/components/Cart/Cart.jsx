import { Button, Flex, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Context from '../../context/CartContext'
import { TiDelete } from "react-icons/ti";
import { Link } from 'react-router-dom';

const Cart = () => {
  const {cart,removeItem,clearCart,incrementarItem,decrementarItem}=useContext(Context)
  console.log('carrito',cart)
  if(cart.length===0){
    return(
    <Flex direction={'column'} justify={'center'} align={'center'}>

      <Link to='/'>Ver productos</Link>
    </Flex>
    )
  }
  
  const total = cart.reduce((acc, prod) => acc + prod.precio * prod.quantity, 0);

  return (
    <TableContainer>
      <Table variant="simple">
        
        <Thead>
          <Tr>
            <Th>Nombre</Th>
            <Th>Cantidad</Th>
            <Th></Th>
            <Th>Precio</Th>
            <Th>Subtotal</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          { cart.map ((prod) => (
            <Tr key={prod.id}>
              <Td>{prod.nombre}</Td>
              <Td>{prod.quantity}  </Td>
              <Td>
                <Button onClick={()=>decrementarItem(prod.id)}>-</Button>
                {prod.quantity}
                <Button onClick={()=>incrementarItem(prod.id,prod.stock)}>+</Button>
                {prod.quantity}
              </Td>
              <Td>{prod.precio}</Td>
                <Td>{prod.precio * prod.quantity }</Td>
                <Td><Button onClick={()=>removeItem(prod.id)}>
                <TiDelete />  
                  </Button></Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th colSpan={3}>Total</Th>
            <Th>{total}</Th>
            <Th>
              <Button colorScheme="red" onClick={clearCart}>
                Vaciar Carrito
              </Button>
              </Th>
              <Th><Link to='/Checkout'>Finalizar compra</Link></Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default Cart
