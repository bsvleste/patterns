import React from "react";
import { Children } from "react";

const Each = ({ render, of }) =>
  Children.toArray(of.map((item: unknown, index: unknown) => render(item, index)))
export default function EachPatterns() {
  const books = [
    { id: 1, title: "The book1" },
    { id: 2, title: "The book2" },
    { id: 3, title: "The book3" },
    { id: 4, title: "The book4" },
  ]
  return (
    <>
      <ul>
        <Each of={books} render={(item: { title: unknown }, index: unknown) =>
          <li>{`index ${index} do livro ${item.title}`}</li>
        } />
      </ul>
    </>
  )
}