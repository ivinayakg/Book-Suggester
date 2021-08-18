import "./styles.css";
import books from "./data.js";
import { useState } from "react";

export default function App() {
  const [active, setActive] = useState([books.Fiction]);

  var catergories = Object.keys(books);

  const onClickHandler = (item) => {
    setActive(books[item]);
    console.log(active);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="Brand">
          <h1>Goodbooks</h1>
        </div>
        <p>Checkout my favorite books.Select a genre to get started</p>
        <div className="catergory">
          {catergories.map((item) => {
            return (
              <button
                className="catergory-btn"
                onClick={() => {
                  onClickHandler(item);
                }}
                key={item.id}
              >
                {item}
              </button>
            );
          })}
        </div>
        <hr />
        <div>
          <ul className="book-list">
            {active.map((item) => {
              return (
                <li className="book">
                  <h3 className="book-title" key={item.name}>
                    {item.name}
                  </h3>
                  <small className="book-rating">{`${item.rating}/5`}</small>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
