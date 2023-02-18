import React from "react";
import { Grid, TextField, Button } from "@mui/material";
function LogIn() {
  return (
    <div className="signup-container">
      <Grid
        container
        rowSpacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item className="signup-title">
          Log In
        </Grid>
        <Grid item>
          <TextField
            required
            id="email"
            label="Email Address"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextField
            required
            id="password"
            label="Password"
            variant="outlined"
            type="password"
          />
        </Grid>
        <Grid item>
          <Button variant="outlined">Log In</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default LogIn;
