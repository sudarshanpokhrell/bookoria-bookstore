import React, { useContext } from "react";
import "./BookSection.css";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import CartContext from '../CartContext';

function Popular() {
  const { bookData } = useGlobalContext();
  const sortedSoldBooks = [...bookData].sort((a, b) => b.sold - a.sold);
  
  const { addToCart } = useContext(CartContext);

  return (
    <div className="section-books">
      <h2 className="section-heading">Popular</h2>
      <div className="book-container">
        {sortedSoldBooks.slice(0, 4).map((book, index) => (
          <div className="book-div" key={index}>
          <Link to={`/book/${book.title}`} className="book-link-hover">
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
  );
}

export default Popular;
