import React, { useEffect, useContext } from "react";
import "./BooksPages.css";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import CartContext from "../CartContext";

function BooksPages() {
  const { bookCategory } = useParams();
  const { bookData, showBooks, setShowBooks } = useGlobalContext();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    if (bookCategory === "Best Sellers") {
      setShowBooks([...bookData].sort((a, b) => b.sold - a.sold));
    } else if (bookCategory === "New Arrivals") {
      setShowBooks([...bookData].sort((a, b) => new Date(b.date) - new Date(a.date)));
    } else if (bookCategory === "All Fiction") {
      setShowBooks([...bookData].filter((book) => book.category === "Fiction"));
    } else if (bookCategory === "All Non-fiction") {
      setShowBooks([...bookData].filter((book) => book.category === "Non-fiction"));
    } else {
      setShowBooks([...bookData].filter((book) => book.genre === bookCategory));
    }
    console.log(bookCategory);
  }, [bookCategory, bookData, setShowBooks]);

  return (
    <div className="books-page">
      <h1 className="section-heading">{bookCategory}</h1>
      <div className="books-container">
        <div className="sort-by">
          <span> Sort by:</span>
          <select>
            <option>Date, new to old</option>
            <option>Date, old to new</option>
            <option>Price, low to high</option>
            <option>Price, high to low</option>
          </select>
        </div>
        <div className="books-list">
          {showBooks.map((book, index) => (
            <div className="book-item" key={index}>
              <Link to={`/book/${book.title}`} className="book-link">
                <div className="top-clickable">
                  <img className="book-image" src={book.coverImage} alt={book.title} />
                  <div className="books-page-information">
                    <div className="hehe">
                      <div className="book-page-name">{book.title}</div>
                      <div className="book-page-cost">${book.price}</div>
                    </div>
                  </div>
                </div>
              </Link>
              <button className="book-cart-link" onClick={() => addToCart(book)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BooksPages;
