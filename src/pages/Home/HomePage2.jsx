import React from "react";
import { Grid, Button } from "@mui/material";
import OptionCard from "../../components/OptionCard";

import Macbook from "../../assets/images/macbook.png";
import iPhone from "../../assets/images/iphone.png";
import iPad from "../../assets/images/ipad.png";
import watch from "../../assets/images/watch.png";

import "./styles/homepage2.css";

function HomePage2() {
  let products = [
    { product: "iPhone", location: iPhone },
    { product: "iPad", location: iPad },
    { product: "Macbook", location: Macbook },
    { product: "Accessories", location: watch },
  ];
  console.log(Macbook);
  return (
    <>
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        direction="row"
      >
        {products.map((item) => {
          return (
            <OptionCard
              key={item.product}
              product={item.product}
              img={item.location}
            />
          );
        })}
      </Grid>
    </>
  );
}

export default HomePage2;
