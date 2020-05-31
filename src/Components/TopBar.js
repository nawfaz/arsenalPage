import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import logo from "./arsenal.png";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function TopBar() {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <Link to="/">
            <img src={logo} alt="logo" height="30" width="50" />
          </Link>
          <Link className={classes.links} to="/">
            <Button style={{ color: "grey" }}>Arsenal</Button>
          </Link>

          <Link className={classes.links} to="solutions">
            <Button style={{ color: "grey" }}>Players & Staff</Button>
          </Link>

          <Link className={classes.links} to="ressources">
            <Button style={{ color: "grey" }}>Honours</Button>
          </Link>

          <Link className={classes.links} to="corona">
            <Button style={{ color: "grey" }}>Corona</Button>
          </Link>

          <Link className={classes.links} to="login">
            <Button
              raised={true}
              style={{ borderColor: "red", marginLeft: 925 }}
              className={classes.colorBtn}
              variant="outlined"
            >
              Login
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
  },
  colorBtn: {
    color: "red",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  color: {
    color: "#3498DB",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "",
    color: theme.palette.text.secondary,
  },
  links: {
    textDecoration: "none",
  },
}));
