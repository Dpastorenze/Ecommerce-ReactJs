import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import PageNotFound from "./components/PageNotFound/PageNotFound";

import { CartProvider } from "./components/CartContext/CartContext";

function App() {
  return (
    <ChakraProvider>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListConteiner title="NoLoNecesitoLoQuiero" />}
            />
            <Route
              path="/categorias/:categoryId"
              element={<ItemListConteiner title="NoLoNecesitoLoQuiero" />}
            />
            <Route
              path="/producto/:productId"
              element={<ItemDetailContainer />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ChakraProvider>
  );
}

export default App;
