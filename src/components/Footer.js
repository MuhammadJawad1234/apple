import React from "react";
import { Grid } from "@mui/material";
// import { color, fontWeight } from "@mui/system";
const Footer = () => {
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={2}
          lg={2}
          style={{ background: "#F5F5F7" }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          lg={8}
          style={{ background: "#F5F5F7" }}
        >
          <p style={{ textAlign: "justify" }}>
            Copyright © 2022 Apple Inc. All rights reserved. Privacy Policy
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={2}
          lg={2}
          style={{ background: "#F5F5F7" }}
        ></Grid>
      </Grid>
    </>
  );
};
export default Footer;
