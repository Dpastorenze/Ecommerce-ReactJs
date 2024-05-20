import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const ItemListConteiner = ({title}) => {
  return (
    <Flex justify={'right'} padding={'20px'} h={'12vh'} w={'100%'} backgroundColor={'#DED3D8'}>
      <Heading>{title}</Heading>
    </Flex>
  )
}

export default ItemListConteiner
