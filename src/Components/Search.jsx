import React, { useState, useEffect } from "react";
import "./Search.css";
import { useGlobalContext } from "../context";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

function Search() {
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const { isSearch, setIsSearch, bookData } = useGlobalContext();

  useEffect(() => {
    if (isSearch) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    // Cleanup function to remove class on unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isSearch]);

  const cancelSearch = () => {
    setIsSearch(false);
    setSearchSuggestions([]);
  };

  const handleSearchChange = (e) => {
    setSearchItem(e.target.value);
  };
  useEffect(() => {
    const searchResults = bookData
      .filter(
        (book) =>
          book.title.toLowerCase().includes(searchItem.toLowerCase()) ||
          book.author.toLowerCase().includes(searchItem.toLowerCase())
      )
      .slice(0, 4);
    setSearchSuggestions(searchResults);
  },[searchItem, isSearch]);
  if (isSearch) {
    return (
      <div className="search-window">
        <div className="search-section">
          <input
            type="text"
            className="search-input"
            placeholder="Uncover hidden treasures... Search the bibliographic abyss!"
            autoFocus
            onChange={handleSearchChange}
            value={searchItem}
          />
          <RxCross1 className="cross-icon" onClick={cancelSearch} />
        </div>
        <div className="black-section" onClick={cancelSearch}></div>

        {searchSuggestions.length > 0 && (
          <div className="suggestion-window">
            <h2 className="suggestion-text">Suggestions:</h2>
            <div className="suggestions">
              {searchSuggestions.map((book, index) => {
                return (
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/book/${book.title}`}
                    key={index}
                  >
                    <div
                      onClick={cancelSearch}
                      className="suggestion-item"
                      key={index}
                    >
                      <div className="suggestion-image-section">
                        <img src={book.coverImage} alt="" />
                      </div>
                      <div className="suggestion-info-section">
                        <p className="book-name">{book.title}</p>
                        <p className="book-author">{book.author}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            <br />
          </div>
        )}
      </div>
    );
  } else {
    return <></>;
  }
}

export default Search;
