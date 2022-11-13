import React from "react";
import Book from "./ui/book.jsx";
import { books } from "../data.js";

const Featured = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="text--orange">Books</span>
          </h2>
          <div className="books">
            {books
              .filter((book) => book.rating === 5)
              .slice(0, 4)
              .map((book) => (
                <Book book={book} key={book.id}></Book>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Featured;
