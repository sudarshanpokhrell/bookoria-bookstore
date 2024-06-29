import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import "./Footer.css";
function Footer() {
  const [nepalTime, setNepalTime] = useState(getNepalTime());

  // Function to get Nepal time
  function getNepalTime() {
    const now = new Date();
    const nepalTime = now.toLocaleTimeString("en-US", {
      timeZone: "Asia/Kathmandu",
    });

    return nepalTime;
  }

  // Update Nepal time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setNepalTime(getNepalTime());
    }, 1000);

    return () => clearInterval(interval); // Cleanup function to clear interval
  }, []); // Empty dependency array ensures effect runs only once
  return (
    <div className="footer">
      <div className="top-section">
        <div className="top-1">
          <h1 className="heading">bookoria</h1>
          <p className="paragraph">
            BOOKORIA offers a world of stories and insights. Discover our
            curated collection of fiction, non-fiction, and classics, and
            transform your reading journey. Explore a new adventure with every
            book.
          </p>
        </div>
        <div className="top-2">
          <h2 className="top-heading">Quick Links</h2>
          <ul className="top-2-ul">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Feedback </a>
            </li>
            <li>
              <a href="#">Customer Service </a>
            </li>
          </ul>
        </div>
        <div className="top-3">
          <h2 className="top-heading">Get in Touch</h2>
          <ul className="top-3-ul">
            <li>
              Address: <a href="">Kathmandu,Nepal</a>
            </li>
            <li>
              Cell: <a href="">+977 98674598</a>
            </li>
            <li>
              Email: <a href="">contact@bookoria.com</a>
            </li>
            <li>Time: {nepalTime} </li>
          </ul>
        </div>
      </div>
      <div className="middle-section">
        <FaFacebook className="footer-icon" />
        <FaInstagram className="footer-icon" />
      </div>
      
      <div className="bottom-section">
        © 2024, <a href="">BOOKORIA</a>
      </div>
    </div>
  );
}

export default Footer;
