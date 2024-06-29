import React from "react";
import "./NewsLetter.css";
import { useGlobalContext } from "../context";

function NewsLetter() {
  const { newsLetterEmail, setNewsLetterEmail } = useGlobalContext();
  const enterNewsLetter = (e)=>{
    setNewsLetterEmail(e.target.value)
  }
  return (
    <div className="newsletter">
      <div className="newsletter-p">
        <h2 className="newsletter-heading">Subscribe to Our Newsletter!</h2>
        <p className="newsletter-text">
          Unlock the door to endless adventures with our exclusive deals! Dive
          into a world of discounts and savings where every book is a ticket to
          new realms. Don't just read stories, live them, at Bookoria
        </p>
      </div>
      <form className="newsletter-form" action="">
        <input type="email" placeholder="Enter your email" onChange={enterNewsLetter}  value={newsLetterEmail}/>
        <button className="newsletter-button">Subscribe</button>
      </form>
    </div>
  );
}

export default NewsLetter;
