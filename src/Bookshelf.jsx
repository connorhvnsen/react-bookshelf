import React from "react";
import { Book } from "./Book.jsx";
import { BookThree } from "./BookThree.jsx";

export default function Bookshelf(props) {
  // TODO maps
  const books = [
    { title: "Dune" },
    { title: "Prey" },
    { title: "The Quantunm Evolution" },
    { title: "Think and Grow Rich" },
    { title: "The Creative Act" },
  ];

  const totalBooks = books.length;
  const spacing = 0.75; // Adjust the spacing between books

  return (
    <>
      {books.map((book, index) => {
        let x = (index - Math.floor(totalBooks / 2)) * spacing;
        return (
          <BookThree position={[x, 0, 0]} title={book.title} key={index} />
        );
      })}
    </>
  );
}
