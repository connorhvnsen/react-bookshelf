import React, { useState } from "react";
import { Book } from "./Book.jsx";
import { BookThree } from "./BookThree.jsx";
import { useSprings, animated } from "@react-spring/three";

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
  const spacing = 1.25; // Adjust the spacing between books

  const [clickedIndex, setClickedIndex] = useState(null);

  // Calculate the position adjustments for the books based on the clicked index
  const positionAdjustments = books.map((_, index) => {
    if (clickedIndex !== null) {
      if (index < clickedIndex) {
        return -1.75; // Move the book to the left if it's before the clicked book
      } else if (index > clickedIndex) {
        return 1.75; // Move the book to the right if it's after the clicked book
      }
    }
    return 0; // Default case, no adjustment
  });

  // Use useSprings to animate the rotation of each book
  const springs = useSprings(
    books.length,
    books.map((_, index) => ({
      rotation: clickedIndex === index ? [0, -Math.PI / 2, 0] : [0, 0, 0],
      position: [
        (index - Math.floor(totalBooks / 2)) * spacing +
          positionAdjustments[index],
        0,
        0,
      ],
      config: { mass: 1, tension: 170, friction: 26 },
    }))
  );

  const handleClick = (index) => {
    setClickedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      {springs.map((props, index) => {
        let x = (index - Math.floor(totalBooks / 2)) * spacing;

        return (
          <animated.group
            {...props}
            // position={[x, 0, 0]}
            key={index}
            onClick={(event) => {
              event.stopPropagation();
              handleClick(index);
            }}
          >
            <Book title={books[index].title} key={index} />
            {/* <BookThree position={[x, 0, 0]} title={book.title} key={index} /> */}
          </animated.group>
        );
      })}
    </>
  );
}
