import React, { useContext } from "react";
import "./BookSection.css";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import CartContext from '../CartContext';

function NewArrivals() {
  const { bookData } = useGlobalContext();
  const sortedByPublicationDate = bookData.sort((a, b) => {
    const dateA = new Date(a.publicationDate);
    const dateB = new Date(b.publicationDate);

    return dateB - dateA;
  });
  const {  addToCart } = useContext(CartContext);

  console.log(sortedByPublicationDate);

  return (
    <div className="section-books">
      <h2 className="section-heading">New Arrivals</h2>
      <div className="book-container">
        {sortedByPublicationDate.slice(0, 4).map((book, index) => (
          <div className="book-div" key={index}>
            <Link to={`/bookoria-bookstore/book/${book.title}`} key={index} className="book-link-hover">
              <div className="book-card">
                <img
                  className="book-img"
                  src={book.coverImage}
                  alt={book.title}
                />
                <div className="book-details">
                  <div>
                    <div className="book-title">{book.title.length >= 50 ? `${book.title.substring(0,47)}...` : book.title }</div>
                    <div className="book-price">$ {book.price}</div>
                  </div>
                </div>
              </div>
            </Link>
            <button className="add-to-cart" onClick={() => addToCart(book, 1)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewArrivals;
