import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { CartContextProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Purchase from "./components/Checkout/Purchase";
import SearchResults from "./components/SearchResults/SearchResults";





function App() {
  return (
    <ChakraProvider>
      <CartContextProvider>
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
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/purchase" element={<Purchase/>}/>
            <Route path="/search/:searchTerm" element={<SearchResults />} />

          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </ChakraProvider>
  );
}

export default App;
