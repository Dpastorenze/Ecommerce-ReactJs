import React, { useEffect, useState } from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';
import { db } from '../../Config/Firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const collectionRef = collection(db, 'productos');
      const queryRef = categoryId ? query(collectionRef, where('categoria', '==', categoryId)) : collectionRef;
      const response = await getDocs(queryRef);
      const productsList = response.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(productsList);
      setLoading(false);
    };

    fetchData();
  }, [categoryId]);

  return (
    <Flex
      direction={"column"}
      justify={"space-between"}
      align={"center"}
      backgroundColor={"#DED3D8"}
      h={'100%'}
    >
      <Heading>{title}</Heading>
      {loading ? (
        <Flex justify={'center'} align={'center'} h={'50vh'}>
          <FadeLoader color="#010005" />
        </Flex>
      ) : (
        <ItemList products={products} />
      )}
    </Flex>
  );
}

export default ItemListContainer;