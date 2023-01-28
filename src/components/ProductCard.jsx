import React from "react";
import { Grid } from "@mui/material";
import "./styles/productcard.css";

function ProductCard(props) {
  return (
    <div>
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        direction="column"
      >
        <Grid item>
          <img src={props.img} alt={props.productName} />
        </Grid>
        <Grid item>
          <Grid
            container
            justifyContent="space-around"
            alignItems="center"
            direction="row"
          >
            <Grid item xs={9}>
              {props.productName}
            </Grid>
            <Grid item xs={2}>
              {props.productPrice}
            </Grid>
          </Grid>
        </Grid>
        <Grid item>{props.productDescription}</Grid>
      </Grid>
    </div>
  );
}

export default ProductCard;
