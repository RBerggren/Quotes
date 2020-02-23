import React from "react";
import "./App.css";

function Quote(props) {
  return (
    <div className="divquote">
      <div className="top">
        <p className="quote">{props.data.body}</p>
      </div>

      <br />
      <div className="bot">
        {"-"}
        <p className="author"> {props.data.author}</p>
      </div>
    </div>
  );
}

export default Quote;
