import React from "react";
import ProductCard from "../../components/ProductCard";
import macbookImg from "../../assets/images/macbook.png";

import "./styles/carousel.css";

function Carousel() {
  return (
    <>
      <h1 className="carousel-text">Our Latest Products</h1>
      <div className="slider">
        <div className="slides">
          <div>
            <ProductCard
              img={macbookImg}
              productName="Macbook"
              productPrice="Rs. 80,000"
              productDescription="Bla Bla Bla"
            />
          </div>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
