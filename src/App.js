import React, { useState, useEffect } from "react";
import Quote from "./Quote.js";
import "./App.css";
import logo from "./No_image_available.svg";
import Img from "./Img.js";

/*
Have to use a proxy due to cors and running this application in localhost
at line  31
*/

function App() {
  const [quote, setQuote] = useState({});
  const [author, setAuthor] = useState("");
  const [img, setImg] = useState(logo);

  useEffect(() => {
    fetch("https://favqs.com/api/qotd")
      .then(response => response.json())
      .then(data => setQuote(data.quote) & setAuthor(data.quote.author));
  }, []);

  function getQuote() {
    fetch("https://favqs.com/api/qotd")
      .then(response => response.json())
      .then(data => setQuote(data.quote) & setAuthor(data.quote.author));
  }

  useEffect(() => {
    if (typeof author === "string") {
      try {
        let proxyUrl = "https://cors-anywhere.herokuapp.com/",
          targetUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageimages|pageterms&piprop=thumbnail&pithumbsize=600&titles=${author}`;
        fetch(proxyUrl + targetUrl)
          .then(response => response.json())
          .then(data => setImg(data.query.pages["0"].thumbnail.source))
          .catch(err => setImg(logo));
      } catch (error) {}
    }
  }, [author]);

  return (
    <div className="App">
      <h1>Get an amazing Quote</h1>
      <Quote data={quote} />
      <div className="picholder">
        <Img data={img} />
      </div>

      <button className="button" onClick={getQuote}>
        Click for quote
      </button>
    </div>
  );
}

export default App;
