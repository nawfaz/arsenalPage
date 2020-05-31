import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import InfoIcon from "@material-ui/icons/Info";
import { Button } from "@material-ui/core";
import { spacing } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  color: {
    color: "white",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "",
    color: theme.palette.text.secondary,
  },
}));

export default function SecondAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar color="transparent" style={{ color: "white" }} position="static">
        <Toolbar>
          <div style={{ margin: "auto" }}>
            <h5
              className={classes.menuButton}
              style={{ display: "flex", alignItems: "baseline" }}
            >
              {" "}
              <InfoIcon fontSize="small" /> This is a Test Website.
              <h5>
                {" "}
                &nbsp; &nbsp;{" "}
                <Button
                  className={classes.menuButton}
                  variant="outlined"
                  color="inherit"
                >
                  Register
                </Button>{" "}
              </h5>
            </h5>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
