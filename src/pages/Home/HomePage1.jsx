import React from "react";
import { Grid, Button } from "@mui/material";
import "./styles/homepage1.css";
import macbookImg from "../../assets/images/macbook.png";

const HomePage1 = () => {
  return (
    <div id="home-pg1">
      <Grid item>
        <Grid
          container
          justifyContent="center"
          alignItems="stretch"
          direction="column"
        >
          <Grid item>
            <img src={macbookImg} id="home-macbook" />
          </Grid>

          <Grid item>
            <Grid
              container
              justifyContent="center"
              alignItems="flex-start"
              direction="column"
            >
              <Grid item>
                <h1 className="home-statement">bringing the best experience</h1>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  sx={{
                    ":hover": {
                      bgcolor: "primary.main",
                    },
                  }}
                  id="home-shop-for-btn1"
                >
                  Shop For iPhone
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  sx={{
                    ":hover": {
                      bgcolor: "primary.main",
                    },
                  }}
                  id="home-shop-for-btn2"
                >
                  Shop For iPad
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  sx={{
                    ":hover": {
                      bgcolor: "primary.main",
                    },
                  }}
                  id="home-shop-for-btn3"
                >
                  Shop For Mac
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  sx={{
                    ":hover": {
                      bgcolor: "primary.main",
                    },
                  }}
                  id="home-shop-for-btn4"
                >
                  Shop For Accessories
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage1;
