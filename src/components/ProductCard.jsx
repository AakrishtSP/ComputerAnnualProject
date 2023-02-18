import React from "react";
import { Grid } from "@mui/material";
import "./styles/productcard.css";
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <div className="product-card-container">
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <img
            className="product-card-image"
            src={props.img}
            alt={props.productName}
          />
        </Grid>
        <Grid item className="product-card-texts">
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Link to="">{props.productName}</Link>
            </Grid>
            <Grid item>{props.productPrice}</Grid>
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
