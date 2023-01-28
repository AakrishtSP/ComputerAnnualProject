import React from "react";
import "./styles/home.css";
import HomePage1 from "./HomePage1";
import HomePage2 from "./HomePage2";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <>
      <HomePage1 />
      <HomePage2 />
      <Carousel />
    </>
  );
};

export default Home;
