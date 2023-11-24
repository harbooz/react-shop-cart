import "./App.css";
import { CartProvider } from "react-use-cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import AppContextProvider from "./context/AppContextProvider";
import CartPage from "./pages/Cart";
import Cart from "./components/Cart";
import Searched from "./pages/Searched";


function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <BrowserRouter>
          <CartProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/searched/:searchTerm" element={<Searched />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>  
            <Cart/>        
          </CartProvider>
        </BrowserRouter>
      </AppContextProvider>
    </div>
  );
}

export default App;