import React from "react";
import "./styles/carousel.css";
import ProductCard from "../../components/ProductCard";

import Macbook from "../../assets/images/macbook.png";

function Carousel() {
  return (
    <>
      <h1 className="carousel-text">Our Latest Products</h1>
      <div className="slider">
        <div className="slides">
          <div>
            <ProductCard
              img={Macbook}
              productName="Macbook"
              productPrice="800$"
              productDescription="safasdashd adasdh askjdh jahd ashda dhasd adjasdhas dhasd alsdasdals dasd asfas"
            />
          </div>
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
