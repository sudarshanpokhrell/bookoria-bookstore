import React, { createContext, useState, useEffect } from "react";

// Create a context for the cart
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(initialCart);
  const [addedtoCartPopup, setAddedtoCartPopup] = useState(false);
  const [popupMessage , setPopupMessage] = useState('')
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (book, quantity = 1) => {
    
    const existingBook = cart.find((item) => item.bookID === book.bookID);
    
    if (existingBook) {
      setCart(
        cart.map((item) =>
          item.bookID === book.bookID
            ? {
                ...item,
                quantity:item.quantity +  quantity,
                amount: (item.quantity + quantity ) * item.price,
              }
            : item
        )
      );
      setPopupMessage("Updated")
      setAddedtoCartPopup(true)

    } else {
      const { bookID, title, price, author, coverImage } = book;
      setCart([
        ...cart,
        {
          bookID,
          title,
          price,
          author,
          coverImage,
          quantity,
          amount: quantity * price,
        },
      ]);
      setPopupMessage("Added")
      setAddedtoCartPopup(true)

    }

  };

  const removeFromCart = (bookID) => {
    setCart(cart.filter((item) => item.bookID !== bookID));
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseQuantity = (bookID) => {
    setCart(
      cart.map((item) =>
        item.bookID === bookID
          ? {
              ...item,
              quantity: item.quantity + 1,
              amount: (item.quantity + 1) * item.price,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (bookID) => {
    setCart(
      cart.map((item) =>
        item.bookID === bookID
          ? {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : 1,
              amount: (item.quantity > 1 ? item.quantity - 1 : 1) * item.price,
            }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        addedtoCartPopup,
        setAddedtoCartPopup,
        popupMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
