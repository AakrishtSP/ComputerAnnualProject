import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import "./styles/navbar.css";
import hamburger from "../assets/icons/hamburger.png";
import logo from "../assets/icons/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Grid item className="navbar">
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        direction="row"
      >
        <Grid className="navbar-groups" item xs={5}>
          <Grid
            container
            justifyContent="flex-start"
            alignItems="stretch"
            direction="row"
          >
            <Grid item>
              <img
                className="navbar-hamburger"
                src={hamburger}
                onClick={() => {
                  setIsMenuOpen((prev) => {
                    document.getElementById("body").style.opacity = prev
                      ? "100%"
                      : "50%";
                    document.getElementById("navbar-burger").style.transform =
                      prev
                        ? "translate(0, 0)"
                        : "translate(clamp(10vw, 200px, 100vw), 0)";

                    return !prev;
                  });
                }}
                alt="hamburger"
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid classname="navbar-groups" item>
          <Link to="">
            <img href="/" className="navbar-logo" src={logo} alt="hamburger" />
          </Link>
        </Grid>

        <Grid className="navbar-groups" item xs={5}>
          <Grid
            container
            justifyContent="flex-end"
            alignItems="center"
            direction="row"
          >
            <Grid item>
              <Link to="signup">
                <Button varient="outlined" id="navbar-signup" href="signup">
                  Sign Up
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to="login">
                <Button varient="outlined" id="navbar-login" href="login">
                  Login
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item id="navbar-burger" style={{ display: "block" }}>
        <Grid
          container
          direction="column"
          justifyContent="centre"
          alignItems="flex start"
        >
          <Grid item>page 1</Grid>
          <Grid item>page 2</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Navbar;
