import React, { useState, useContext, createContext } from "react";
import data from "./assets/data";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [newsLetterEmail, setNewsLetterEmail] = useState("");
  const [bookData, setBookData] = useState(data);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [subMenuLocation, setSubMenuLocation] = useState({});
  const [subMenu, setSubMenu] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [showBooks, setShowBooks] = useState([]);

  const openSubMenu = (text, coordinates) => {
    const genresList = bookData
      .filter((book) => book.category === text)
      .map((book) => book.genre);
    const finalGenreList = [`All ${text}`, ...new Set(genresList)];
    setSubMenuLocation(coordinates);
    setSubMenu(finalGenreList);
    setIsSubMenuOpen(true);
  };
  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        bookData,
        isSubMenuOpen,
        setIsSubMenuOpen,
        openSubMenu,
        closeSubMenu,
        subMenuLocation,
        subMenu,
        isSearch,
        setIsSearch,
        newsLetterEmail,
        setNewsLetterEmail,
        showBooks,
        setShowBooks
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
