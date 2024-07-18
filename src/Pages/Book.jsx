import React, { useEffect, useContext, useState } from "react";
import "./Book.css";
import { useGlobalContext } from "../context";
import { useParams } from "react-router-dom";
import CartContext from "../CartContext";
import Carausel from "./../Components/Carausel";

function Book() {
  const { cart, addToCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);
  const { bookTitle } = useParams();
  const { bookData } = useGlobalContext();

  const book = bookData.find((item) => item.title === bookTitle);

  const suggestionBooks = bookData
    .filter(
      (item) =>
        item.category === book.category &&
        item.bookID !== book.bookID
    )
    .sort((a, b) => b.sold - a.sold)
    .slice(0, 8);

  console.log(suggestionBooks);
  if (!book) {
    return <div>Book not found</div>;
  }

  const cartItem = cart.find((item) => item.bookID === book.bookID);

  const initialQuantity = cartItem ? cartItem.quantity : 1; // Set initial quantity from cart or default to 1
  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    window.scrollTo(0, 0);
    setQuantity(initialQuantity);
  }, [bookTitle, initialQuantity]);

  const handleAddToCart = () => {
    addToCart(book, quantity);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    if (quantity < book.stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className="book-page">
      <div className="book-info-container">
        <div className="book-info-img">
          <img src={book.coverImage} alt="" />
        </div>
        <div className="book-info">
          <h3 className="book-info-title">{book.title}</h3>
          <p className="book-info-author">{book.author}</p>
          <p className="book-info-disc">{book.description}</p>
          <p className="book-info-price">$ {book.price}</p>
          <p className="book-info-language">{book.language}</p>
          <p className="book-info-format">{book.format}</p>
          <p className="book-info-stock">
            {book.stock > 0 ? "In stock" : "Out of stock"}
          </p>

          <div className="book-quantity">
            <p className="quantity-label">
              Quantity: {cartItem && "(In cart)"}
            </p>
            <div className="quantity-span">
              {cartItem ? (
                <button onClick={() => decreaseQuantity(book.bookID)}>-</button>
              ) : (
                <button onClick={handleDecreaseQuantity}>-</button>
              )}
              <span>{quantity}</span>
              {cartItem ? (
                <button onClick={() => increaseQuantity(book.bookID)}>+</button>
              ) : (
                <button onClick={handleIncreaseQuantity}>+</button>
              )}
            </div>
          </div>
          <div className="book-add-to-cart">
            <button onClick={handleAddToCart}>Add to cart</button>
          </div>
        </div>
      </div>
      <div className="section-books">
        <h2 className="section-heading">Recommendation:</h2>
        <Carausel books={suggestionBooks.slice(0, 8)} />
      </div>
    </div>
  );
}

export default Book;
