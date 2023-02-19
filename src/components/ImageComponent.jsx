import React from "react";

function ImageComponent({ props }) {
  return (
    <img className="product-card-image" alt={props.name} src={props.imageurl} />
  );
}

export default ImageComponent;
