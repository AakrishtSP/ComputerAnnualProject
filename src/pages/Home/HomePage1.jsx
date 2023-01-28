import React from "react";
import { Grid } from "@mui/material";
import "./styles/homepage1.css";
import macbookImg from "../../assets/images/macbook.png";

const HomePage1 = () => {
  return (
    <div id="home-pg1">
      <Grid
        container
        justifyContent="space-between"
        alignItems="stretch"
        direction="column"
      >
        <Grid item xs={6}>
          <img src={macbookImg} id="home-macbook" />
        </Grid>

        <Grid item xs={6}>
          <h1 className="home-statement">bringing the best experience</h1>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage1;
