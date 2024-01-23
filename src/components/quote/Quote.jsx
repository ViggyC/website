import React from "react";
import "./Quote.css";
import { useState } from "react";
import { useEffect } from "react";

const Quote = () => {
  const [quote, setQuote] = useState([]);
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        console.log("data: ", data);
        var numQuotes = data.length;
        var randomQuote = Math.floor(Math.random() * numQuotes);
        setQuote(' " ' + data[randomQuote].text + ' " ');
        setAuthor(
          " -" +
            data[randomQuote].author.substring(
              0,
              data[randomQuote].author.indexOf(",")
            )
        );
      });
  }, []);

  return (
    <div className="quote-div">
      <div>{quote}</div>
      <div>{author}</div>
    </div>
  );
};

export default Quote;
