import React, { useEffect, useContext, useState } from "react";
import "./Book.css";
import { useGlobalContext } from "../context";
import { useParams, Link } from "react-router-dom";
import CartContext from '../CartContext';

function Book() {
  const { cart, addToCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const { bookTitle } = useParams();
  const { bookData } = useGlobalContext();
  const book = bookData.find((item) => item.title === bookTitle);
  const sortedSoldBooks = [...bookData].sort((a, b) => b.sold - a.sold);

  const cartItem = cart.find(item => item.bookID === book.bookID);
  const initialQuantity = cartItem ? cartItem.quantity : 1; // Set initial quantity from cart or default to 1
  const [quantity, setQuantity] = useState(initialQuantity);

  
  useEffect(() => {
    window.scrollTo(0, 0);
    setQuantity(initialQuantity)
  }, [bookTitle]);

  const handleAddToCart = () => {
    addToCart(book, quantity);
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
            <p className="quantity-label">Quantity: {cartItem && '(In cart)'}</p>
            <div className="quantity-span">
              <button onClick={()=> decreaseQuantity()}>-</button>
              <span>{initialQuantity}</span>
              <button onClick={() => increaseQuantity(book.bookID)}>+</button>
            </div>
          </div>
          <div className="book-add-to-cart">
            <button onClick={handleAddToCart}>Add to cart</button>
          </div>
        </div>
      </div>
      <div className="section-books">
        <h2 className="section-heading">Recommendation:</h2>
        <div className="book-container">
          {sortedSoldBooks.slice(0, 4).map((book, index) => (
             <div className="book-div" key={index}>
             <Link to={`/bookoria-bookstore/book/${book.title}`} className="book-link-hover">
               <div className="book-card">
                 <img
                   className="book-img"
                   src={book.coverImage}
                   alt={book.title}
                 />
                 <div className="book-details">
                   <div className="book-title">
                     {book.title.length >= 50 ? `${book.title.substring(0,47)}...` : book.title }
                   </div>
                   <div className="book-price">Rs. {book.price}</div>
                 </div>
               </div>
             </Link>
             <button className="add-to-cart" onClick={() => addToCart(book, 1)}>
               Add to Cart
             </button>
           </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Book;
