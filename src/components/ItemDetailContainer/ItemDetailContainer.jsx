import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../data/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Flex } from "@chakra-ui/react";
import { FadeLoader } from 'react-spinners'


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getProductById(productId)
      .then((data) => {
        if (!data) {
          navigate("/*");
        } else {
          setProducto(data);
        }
      })

      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);
  console.log(producto);
  return (
    <>
      {loading ? (
        <Flex justify={"center"} align={"center"} h={"50vh"} >
          <FadeLoader color="#010005" />
        </Flex>
      ) : (
        <ItemDetail {...producto} />
      )}
    </>
  );
};

export default ItemDetailContainer;
