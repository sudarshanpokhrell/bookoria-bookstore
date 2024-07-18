import React, { useContext } from "react";
import "./BookSection.css";
import { useGlobalContext } from "../context";
import Carausel from "./Carausel";



function Popular() {
  const { bookData } = useGlobalContext();
  const sortedSoldBooks = [...bookData].sort((a, b) => b.sold - a.sold);

 
  return (
    <div className="section-books">
      <h2 className="section-heading">Popular</h2>
      <Carausel books={sortedSoldBooks.slice(0, 8)} />
    </div>
  );
}

export default Popular;
