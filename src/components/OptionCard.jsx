import React from "react";

import { Grid } from "@mui/material";
import "./styles/OptionCard.css";

function OptionCard(props) {
  return (
    <>
      <Grid
        item
        className="option-card-container"
        style={{ margin: "20px auto" }}
      >
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          direction="column"
        >
          <Grid item>
            <img
              src={props.img}
              alt={props.product}
              className="option-card-image"
            />
          </Grid>
          <Grid>
            <h1 className="option-card-text">{props.product}</h1>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default OptionCard;
