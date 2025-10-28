import React from "react";
import "./Quote.css";
import { useState } from "react";
import { useEffect } from "react";

const Quote = () => {
  const [quote, setQuote] = useState([]);
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    fetch("https://api.api-ninjas.com/v2/quotes", {
      headers: {
        "X-Api-Key": process.env.REACT_APP_NINJA_API_KEY,
      },
    })
      .then((response) => {
        console.log("Response status:", response.status);
        console.log("Response headers:", response.headers);
        return response.json();
      })
      .then((data) => {
        console.log("Response data:", data);
        // Handle the data here - you'll need to update this based on the API response format
        if (data && data.length > 0) {
          setQuote(' " ' + data[0].quote + ' " ');
          setAuthor(" - " + data[0].author);
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setQuote("Error fetching quote");
        setAuthor("");
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
