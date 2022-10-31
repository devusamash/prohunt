import React from "react";
import Logo from "../assets/images/Logo.png";
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";
import "../App.css";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <Box sx={{ boxShadow: 15 }}>
      <Grid className="footer" container spacing={0}>
        <Grid className="footer_container" item md={12} sm={12} xs={12}>
          <img className="footer_logo" src={Logo} />
        </Grid>
        <Grid className="footer_container" item xs={4}></Grid>
        <Grid item md={4}>
          <h4 className="footer_heading">
            ProHunt is a platform for independent professionals and business
            owners to connect and collaborate. You can use this to find, hire
            and collaborate with the best people.
          </h4>
          <Grid
            cotainer
            className="footer_social"
            spacing={4}
            md={12}
            sm={12}
            xs={12}
          >
            <GoogleIcon />
            <FacebookRoundedIcon />
            <InstagramIcon />
          </Grid>
        </Grid>
        <Grid className="footer_container" item xs={4} maxWidth="xs"></Grid>
      </Grid>
      <Grid className="footer_bottom_bar" item xs={12} maxWidth="xs">
        <h5 style={{ color: "white" }}>
          All Rights Reserved By Usama Shaukat @ 2022
        </h5>
      </Grid>
    </Box>
  );
}

export default Footer;
