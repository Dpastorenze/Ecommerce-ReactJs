import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getProducts,getProductsByCategory,getProductById } from '../../data/asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { FadeLoader } from 'react-spinners'

const ItemListConteiner = ({title}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading]=useState(true);
  const {categoryId}=useParams();

  console.log(categoryId);
  useEffect(() => {
    setLoading(true)
  const dataProductos = categoryId ? getProductsByCategory (categoryId) : getProducts();
  dataProductos
  .then((data)=> setProducts(data))
  .catch((error)=>console.log(error))
  .finally(()=>setLoading(false))
  },[categoryId]);

  return (
    <Flex
      direction={"column"}
      justify={"space-between"}
      align={"center"}
      backgroundColor={"#DED3D8"}
      h={'100%'}
    >
      
      <Heading>{title}</Heading>
      {
      loading ? 
      <Flex justify={'center'} align={'center'} h={'50vh'} >
      <FadeLoader color="#010005" />
      </Flex>
      :
      <ItemList products={products} />
      
      }
    </Flex>
  );
}

export default ItemListConteiner
