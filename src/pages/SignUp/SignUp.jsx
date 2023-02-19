import React, { useState } from "react";
import {
  Grid,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import axios from "axios";
import "./styles/signin.css";

function SignUp() {
  const [signinInfo, setSigninInfo] = useState({ gender: "male" });
  const [apiresponse, setApiresponse] = useState("");
  return (
    <div className="signup-container">
      <Grid
        container
        rowSpacing={2}
        direction="column"
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid item className="signup-title">
          Sign Up
        </Grid>
        <Grid item>
          <TextField
            required
            id="full-name"
            label="Full Name"
            variant="outlined"
            onChange={(event) => {
              setSigninInfo((info) => {
                return { ...info, name: event.target.value };
              });
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            required
            id="phone-number"
            label="Phone Number"
            variant="outlined"
            onChange={(event) => {
              setSigninInfo((info) => {
                return { ...info, phone: event.target.value };
              });
            }}
          />
        </Grid>
        <Grid item>
          <FormControl>
            <FormLabel id="signin-gender">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="signin-gender"
              defaultValue="male"
              name="radio-buttons-group"
              onChange={(event) => {
                setSigninInfo((info) => {
                  return { ...info, gender: event.target.value };
                });
              }}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item>
          <TextField
            required
            id="email"
            label="Email Address"
            variant="outlined"
            onChange={(event) => {
              setSigninInfo((info) => {
                return { ...info, email: event.target.value };
              });
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            id="birthday"
            label="Birthday"
            type="date"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(event) => {
              setSigninInfo((info) => {
                return { ...info, birth: event.target.value };
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
              setSigninInfo((info) => {
                return { ...info, password: event.target.value };
              });
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            required
            id="confirm-password"
            label="Confirm Password"
            variant="outlined"
            type="password"
            onChange={(event) => {
              setSigninInfo((info) => {
                return { ...info, cpassword: event.target.value };
              });
            }}
          />
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            onClick={() => {
              console.log(signinInfo);
              if (
                signinInfo.name == "" ||
                signinInfo.name == null ||
                signinInfo.phone == "" ||
                signinInfo.phone == null ||
                signinInfo.email == "" ||
                signinInfo.email == null ||
                signinInfo.birth == "" ||
                signinInfo.birth == null ||
                signinInfo.password == "" ||
                signinInfo.password == null
              ) {
                setApiresponse("Please fill all the fields above");
              } else {
                axios
                  .post(
                    "https://localhost/CompProjects/api/signin.php",
                    signinInfo,
                    {
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }
                  )
                  .then((response) => {
                    response.data.error
                      ? setApiresponse(response.data.message)
                      : setApiresponse("Account Successfully Created");
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }
            }}
          >
            Sign In
          </Button>
        </Grid>
        <Grid item className="signup-apiresponse">
          {apiresponse}
        </Grid>
      </Grid>
    </div>
  );
}

export default SignUp;
