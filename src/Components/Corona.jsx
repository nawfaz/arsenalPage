import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "30ch",
    },
  },
}));

export default function BasicTextFields() {
  const [country, setCountry] = useState("");
  const [infos, setInfos] = useState([]);
  const classes = useStyles();

  const retrieveInfo = (info) => {
    console.log(info);
    var str =
      "https://api.covid19api.com/dayone/country/" +
      info +
      "/status/confirmed/live";
    fetch(str)
      .then((res) => res.json())
      .then((data) => {
        setInfos(data);
      });
  };

  return (
    <div style={{ marginLeft: 550, marginTop: 50 }}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          id="outlined-basic"
          label="Country"
          variant="outlined"
        />
      </form>
      <Button
        onClick={() => retrieveInfo(country)}
        style={{ marginLeft: 100 }}
        variant="outlined"
        color="primary"
      >
        Search
      </Button>
    </div>
  );
}
