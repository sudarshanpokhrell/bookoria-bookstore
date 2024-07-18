import React, { useContext } from "react";
import "./Carausel.css";
import CartContext from "../CartContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {  Link } from "react-router-dom";



function Carausel({ books }) {
  const { addToCart } = useContext(CartContext);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {books.map((book) => (
          <div key={book.index} className="book-box">
            <Link
              to={`/bookoria-bookstore/book/${book.title}`}
              className="book-link-hover"
            >
              <div className="book-info-box">
                <div className="book-coverImage">
                  <img src={book.coverImage} alt={book.title} />
                </div>
                <div className="book--Info">
                  <div className="book--title">
                    {book.title.length >= 50
                      ? `${book.title.substring(0, 47)}...`
                      : book.title}
                  </div>
                  <div className="book--price">${book.price}</div>
                </div>
              </div>
            </Link>
            <div className="book--box--cart">
              <button
                className="add-to-cart"
                onClick={() => addToCart(book, 1)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carausel;
