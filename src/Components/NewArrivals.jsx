import React, { useContext } from "react";
import "./BookSection.css";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import Carausel from "./Carausel";

function NewArrivals() {
  const { bookData } = useGlobalContext();
  const sortedByPublicationDate = bookData.sort((a, b) => {
    const dateA = new Date(a.publicationDate);
    const dateB = new Date(b.publicationDate);

    return dateB - dateA;
  });

  return (
    <div className="section-books">
      <h2 className="section-heading">New Arrivals</h2>
      <Carausel books={sortedByPublicationDate.slice(0, 8)} />
    </div>
  );
}

export default NewArrivals;
