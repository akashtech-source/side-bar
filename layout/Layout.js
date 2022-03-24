import { Grid } from "@material-ui/core";
import React from "react";
import Sidebar from "../src/Views/Sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <Grid container>
        <Grid item lg={2} md={2}>
          <Sidebar />
        </Grid>
        <Grid item lg={10} md={10}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
