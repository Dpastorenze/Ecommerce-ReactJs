import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { IoCartSharp } from "react-icons/io5";

const CartWidget = () => {
  return (
    <Flex fontSize={'25px'} justify={'center'} align={'center'}>
      <IoCartSharp/>(0)
    </Flex>
  )
}

export default CartWidget
