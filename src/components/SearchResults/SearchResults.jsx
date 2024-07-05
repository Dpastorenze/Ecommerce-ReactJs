import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Config/Firebase"; 
import { Box, Card, CardBody, CardFooter, Divider, Flex, Heading, Image, Stack, Text, Button } from "@chakra-ui/react";

const SearchResults = () => {
  const { searchTerm } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const productsCollection = collection(db, "productos");
      const productsSnapshot = await getDocs(productsCollection);
      const productsList = productsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsList);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const results = products.filter((product) =>
        product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts(products);
    }
  }, [searchTerm, products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Box padding={5}>
      <Heading mb={5}>Resultados de búsqueda para: {searchTerm}</Heading>
      <Flex wrap="wrap" justify="center" gap={6}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Card key={product.id} maxW="sm" borderRadius="lg" overflow="hidden" boxShadow="md">
              <CardBody>
                <Image
                  src={product.img}
                  alt={product.nombre}
                  borderRadius="lg"
                  objectFit="cover"
                  boxSize='200px'
                />
                <Stack mt="6" spacing="4">
                  <Heading size="md">{product.nombre}</Heading>
                  <Text color="blue.600" fontSize="2xl">
                    ${product.precio}
                  </Text>
                  <Text fontSize='xl' mt={1} color="blue.600">
                    Stock disponible: {product.stock}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Button variant="solid" colorScheme="blue">
                  <Link to={`/producto/${product.id}`}>Ver Detalle</Link>
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <Text>No se encontraron resultados</Text>
        )}
      </Flex>
    </Box>
  );
};

export default SearchResults;
