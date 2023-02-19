import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import axios from "axios";

function LogIn() {
  const [loginInfo, setLoginInfo] = useState({});
  const [apiresponse, setApiresponse] = useState("");
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
            onChange={(event) => {
              setLoginInfo((info) => {
                return { ...info, email: event.target.value };
              });
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            required
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            onChange={(event) => {
              setLoginInfo((info) => {
                return { ...info, password: event.target.value };
              });
            }}
          />
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            onClick={() => {
              console.log(loginInfo);
              axios
                .post(
                  "https://localhost/CompProjects/api/login.php",
                  loginInfo,
                  {
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }
                )
                .then((response) => {
                  setApiresponse(response.data.message);
                  console.log(response.data);
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            Log In
          </Button>
        </Grid>
        <Grid item className="signup-apiresponse">
          {apiresponse}
        </Grid>
      </Grid>
    </div>
  );
}

export default LogIn;
