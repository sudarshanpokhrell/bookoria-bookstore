import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

import Search from "./Components/Search";
import SubMenu from "./Components/SubMenu";
import Book from "./Pages/Book";
import BooksPages from "./Pages/BooksPages";
import Cart from "./Pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { useGlobalContext } from "./context";
import Popup from "./Components/Popup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <SubMenu />
        <Search />
        <Popup />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:bookCategory" element={<BooksPages />} />
          <Route path="/book/:bookTitle" element={<Book />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
