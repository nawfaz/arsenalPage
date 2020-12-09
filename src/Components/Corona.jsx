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
  const [infos, setInfos] = useState(0);
  const [date, setDate] = useState("");
  const [deaths, setDeaths] = useState("");
  const [recovered, setRecovered] = useState("");
  const classes = useStyles();

  const retrieveInfo = (info) => {
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then((data) => {
        data.Countries.find((c) => {
          if (c.Country === country) {
            console.log(c);
            setInfos(c.TotalConfirmed);
            setDate(c.Date);
            setDeaths(c.TotalDeaths);
            setRecovered(c.TotalRecovered);
          }
        });
      })
      .catch((e) => alert("Error 429 : TOO many requests. Try again."));
  };

  return (
    <div style={{ marginLeft: 550, marginTop: 50 }}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          id="outlined-basic"
          label="Country"
          color="secondary"
          variant="outlined"
        />
        <Button
          onClick={() => retrieveInfo()}
          style={{ marginLeft: 30 }}
          variant="outlined"
          color="secondary"
        >
          Search Results
        </Button>
        <TextField
          value={date}
          id="outlined-basic"
          color="secondary"
          label="Date"
          variant="outlined"
        />

        <TextField
          value={infos}
          id="outlined-basic"
          color="secondary"
          label="Number of Confirmed cases"
          variant="outlined"
        />

        <TextField
          value={deaths}
          id="outlined-basic"
          color="secondary"
          label="Number of Deaths"
          variant="outlined"
        />

        <TextField
          value={recovered}
          id="outlined-basic"
          color="secondary"
          label="Number of Persons Recovered"
          variant="outlined"
        />
      </form>
    </div>
  );
}
