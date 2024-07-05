import { Button, Flex, Heading, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Context from '../../context/CartContext'
import { TiDelete } from "react-icons/ti";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const Cart = () => {
  const {cart,removeItem,clearCart,incrementarItem,decrementarItem}=useContext(Context)
  const navigate = useNavigate();
  
  if(cart.length===0){
    Swal.fire({
      title: "Su carrito esta vacio",
      text: 'No podemos generar una orden con el carrito vacio',
      icon: "error",
      confirmButtonText: "Sigamos",
    });

  
    return(
    <Flex direction={'column'} justify={'center'} align={'center'}>

      <Heading color="blue.600" mt={10} borderBottom={'solid'}> <Link to='/'>Ver productos</Link> </Heading>
    </Flex>
    )
  }
  
  const total = cart.reduce((acc, prod) => acc + prod.precio * prod.quantity, 0);

  return (
    <TableContainer>
      <Table variant="simple" colorScheme=''>
        
        <Thead backgroundColor={''} >
          <Tr >
            <Th fontSize={'15px'}>Nombre</Th>
            <Th fontSize={'15px'}>Cantidad</Th>
            <Th></Th>
            <Th fontSize={'15px'}>Precio</Th>
            <Th fontSize={'15px'}>Subtotal</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody fontSize={'15px'}>
          { cart.map ((prod) => (
            <Tr key={prod.id}>
              <Td>{prod.nombre}</Td>
              <Td>{prod.quantity}  </Td>
              <Td >
                <Button mr={1} colorScheme={'blue'} onClick={()=>decrementarItem(prod.id)}>-</Button>
                {prod.quantity}
                <Button ml={1} colorScheme={'blue'} onClick={()=>incrementarItem(prod.id,prod.stock)}>+</Button>
                
              </Td>
              <Td>${prod.precio}</Td>
                <Td>${prod.precio * prod.quantity }</Td>
                <Td><Button colorScheme={'red'} fontSize={'17px'} onClick={()=>removeItem(prod.id)}>
                <TiDelete />  
                  </Button></Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th colSpan={3} fontSize={'15px'}>Total</Th>
            <Th fontSize={'15px'}>${total}</Th>
            <Th>
              <Button colorScheme="red" onClick={clearCart}>
                Vaciar Carrito
              </Button>
              </Th>
              <Th fontSize={'12px'} backgroundColor={'green'} color={'whitesmoke'} w={'10px'} borderRadius={'40px'}><Link to='/Checkout'>Finalizar compra</Link></Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default Cart
