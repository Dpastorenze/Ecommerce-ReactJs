import React, { useState } from 'react'
import {  Button,  Flex, Heading } from '@chakra-ui/react'

const ItemCount = ({stock, valorInicial, onAdd}) => {
    const [ count, setCount ] = useState(valorInicial)

    const incrementar = () => {
        count < stock && setCount(count + 1)
    }

    const decrementar = () => {
        count > valorInicial && setCount(count - 1)
    }

  return (
    <Flex align={'center'} justify={'center'} direction={'column'}>
        <Flex align={'center'} mb={4} >
        <Button colorScheme='blue'onClick={decrementar}>-</Button>
        <Heading fontSize={20} p={2}>{count}</Heading>
        <Button colorScheme='blue' onClick={incrementar}>+</Button>
        </Flex>
        <Button onClick={() => onAdd(count)} isDisabled={stock <= 0}>Agregar al carrito</Button>
        
    </Flex>
  )
}

export default ItemCount