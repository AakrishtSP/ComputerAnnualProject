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
          <img
            className="product-card-image"
            src={props.img}
            alt={props.productName}
          />
        </Grid>
        <Grid item>
          <Grid
            container
            justifyContent="space-around"
            alignItems="center"
            direction="row"
          >
            <Grid item xs={9} className="product-card-name">
              {props.productName}
            </Grid>
            <Grid item xs={2} className="product-card-price">
              {props.productPrice}
            </Grid>
          </Grid>
        </Grid>
        <Grid item className="product-card-description">
          {props.productDescription}
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductCard;
