import React from "react";
import "./styles/carousel.css";

function Carousel() {
  return (
    <>
      <h1 className="carousel-text">Our Latest Products</h1>
      <div className="slider">
        <div className="slides">
          <div>Card1</div>
          <div>Card2</div>
          <div>Card3</div>
          <div>Card3</div>
          <div>Card3</div>
          <div>Card3</div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
