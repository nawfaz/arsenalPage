import React, { useState } from "react";
import AppBar from "./Components/TopBar";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Content from "./Components/Content";
import Ressource from "./Components/Ressources";
import Solutions from "./Components/Solutions";
import SignUp from "./Components/SignUp";
import car from "./Website-Background.jpg";
import Grid from "@material-ui/core/Grid";

function App() {
  const data = useSelector((state) => state.content);

  return (
    <div
      style={{
        backgroundImage: `url(${car})`,
        height: "100vh",
        backgroundSize: "stretch",
      }}
    >
      <Grid>
        <Router>
          <AppBar />
          <Grid item xs={12} sm={6}>
            <Route path="/" exact component={Content} />
            <Route path="/ressources" exact component={Ressource} />
            <Route path="/solutions" exact component={Solutions} />
            <Route path="/login" exact component={SignUp} />
          </Grid>
        </Router>
      </Grid>
    </div>
  );
}

export default App;
