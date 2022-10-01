import React from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
  return (
    <>
      <div className="login_form">
        <div className="login-form-container">
          <LockOpenIcon className="login_form_title_icon" />
          <h1 className="login_form_title">LOGIN NOW</h1>
          <TextField
            className="text_field"
            id="email"
            label="Email"
            variant="standard"
          />
          <TextField
            className="text_field"
            id="password"
            label="Password"
            type="password"
            variant="standard"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remeber me"
          />
          <div className="submit_button">
            <Button variant="contained">Submit</Button>
          </div>

          <h5>
            Are you new to this platform?{" "}
            <a
              href="https://www.w3schools.com/html/"
              title="Go to W3Schools HTML section"
            >
              <span style={{ color: "#1665C0" }}> Register Now </span>
            </a>
          </h5>

          <Button variant="outlined" color="error" startIcon={<GoogleIcon />}>
            Sign In With Google
          </Button>
        </div>
      </div>
    </>
  );
};

export default Login;
