import React from "react";

function Img(props) {
  return (
    <div>
      <img className="pic" src={props.data} alt="nopicture" />
    </div>
  );
}

export default Img;
