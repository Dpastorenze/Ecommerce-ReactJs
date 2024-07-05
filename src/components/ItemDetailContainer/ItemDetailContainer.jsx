import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Flex } from "@chakra-ui/react";
import { FadeLoader } from "react-spinners";
import { db } from "../../Config/Firebase";
import { doc, getDoc } from "firebase/firestore";
import Context from "../../context/CartContext";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  const navigate = useNavigate();

  const {currentQuantity}=useContext(Context)

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const queryRef = doc(db, "productos", productId);
        const response = await getDoc(queryRef);
        
        if (response.exists()) {
          const newItem = {
            ...response.data(),
            id: response.id,
          };
          setProducto(newItem);
        } else {
          
          navigate('/');
        }
      } catch (error) {
        console.error("Error fetching product data: ", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [productId, navigate]);


  return (
    <>
      {loading ? (
        <Flex justify={"center"} align={"center"} h={"50vh"}>
          <FadeLoader color="#010005" />
        </Flex>
      ) : (
        <ItemDetail {...producto} currentQuantity={currentQuantity(productId)}/>
      )}
    </>
  );
};

export default ItemDetailContainer;