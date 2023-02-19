import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard";

import "./styles/carousel.css";

function Carousel() {
  const [productData, setProductData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("https://localhost/CompProjects/api/products.php")
      .then((response) => {
        setProductData(response.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.log(error);
        setIsLoaded(true);
      });
  }, []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <h1 className="carousel-text">Our Latest Products</h1>
      <div className="slider">
        <div className="slides">
          {productData.map((product) => (
            <ProductCard props={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Carousel;
