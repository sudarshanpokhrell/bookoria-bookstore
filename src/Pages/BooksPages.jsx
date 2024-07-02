import React, { useEffect, useContext, useState } from "react";
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
    } else if(bookCategory === "all books"){
      setShowBooks([...bookData].sort((a,b)=> a.bookID - b.bookID ))
    } else {
      setShowBooks([...bookData].filter((book) => book.genre === bookCategory));
    }
  }, [bookCategory, bookData, setShowBooks]);

  const [selectedOption , setSelectedOption] = useState("")
  const [selectedBooks , setSelectedBooks]= useState([])
  const handleSelection = (e)=>{
    e.preventDefault();
    setSelectedOption(e.target.value)
  }

  useEffect(()=>{
    if(selectedOption === "alphabetically"){
      setSelectedBooks([...showBooks].sort((a ,b)=> a.title.localeCompare(b.title)))
    }else if(selectedOption === "new-to-old"){
      setSelectedBooks([...showBooks].sort((a,b)=> new Date(b.publicationDate) - new Date(a.publicationDate) ))
    }else if(selectedOption === "old-to-new"){
      setSelectedBooks([...showBooks].sort((a,b)=> new Date(a.publicationDate) - new Date(b.publicationDate) ))
    }else if(selectedOption === "low-to-high"){
      setSelectedBooks([...showBooks].sort((a,b)=> a.price - b.price))
    }else if(selectedOption === "high-to-low"){
      setSelectedBooks([...showBooks].sort((a,b)=> (b.price) - (a.price)))
    }
    else{
      setSelectedBooks(showBooks)
    }
  },[selectedOption , bookCategory, selectedBooks])

  if(selectedBooks.length > 0 ){
    return (
      <div className="books-page">
        <h1 className="section-heading">{bookCategory}</h1>
        <div className="books-container">
          <div className="sort-by">
            <span> Sort by:</span>
            <select onChange={handleSelection}>
              <option value="">Select option</option>
              <option value="alphabetically">Alphabetically , A-Z</option>
              <option value="new-to-old">Date, new to old</option>
              <option value="old-to-new">Date, old to new</option>
              <option value="low-to-high">Price, low to high</option>
              <option value="high-to-low">Price, high to low</option>
            </select>
          </div>
          <div className="books-list">
            {selectedBooks.map((book, index) => (
              <div className="book-item" key={index}>
                <Link to={`/bookoria-bookstore/book/${book.title}`} className="book-link">
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
  }else{
    return(
      <div className="books-page">
        <h1 className="section-heading">{bookCategory}</h1>
        <div className="no-books-found">
          No books found.
        </div>
      </div>
    )
  }
  
}

export default BooksPages;
