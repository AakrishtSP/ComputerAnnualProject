import React from "react";
import { Grid } from "@mui/material";
import "./styles/productcard.css";
import { Link } from "react-router-dom";
import ImageComponent from "./ImageComponent";

function ProductCard({ props }) {
  return (
    <div className="product-card-container">
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <ImageComponent props={props} />
        </Grid>
        <Grid item className="product-card-texts">
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Link to="">{props.name}</Link>
            </Grid>
            <Grid item>${props.price}</Grid>
          </Grid>
        </Grid>
        <Grid item className="product-card-description">
          {props.description}
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductCard;
