import {Flex,Link as ChakraLink } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react';
import { IoCartSharp } from "react-icons/io5";
import Context from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const{getQuantity}=useContext(Context)
  return (
    <Flex fontSize={'20px'} justify={'center'} align={'center'}>
  <ChakraLink as={Link} to='/cart' fontSize={'2xl'}><IoCartSharp/></ChakraLink>
      <Flex borderRadius={'solid'} >{getQuantity()>0 && getQuantity()}</Flex>
    </Flex>
  )
}

export default CartWidget
