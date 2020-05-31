import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { bounce, fadeIn, fadeInDownBig } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
  bounce: {
    animation: "x 1.5s",
    animationName: Radium.keyframes(fadeInDownBig, "fadeInDownBig"),
  },
};

const useStyles = makeStyles((theme) => ({
  h2: {
    color: "red",
    fontFamily: "Arial",
    marginLeft: 30,
    marginTop: 30,
  },
  p: {
    color: "black",
    fontFamily: "Arial",
    marginLeft: 30,
    marginRight: 30,
    fontSize: 16,
    textAlign: "justify",
    fontWeight: "200",
  },
}));

function Solutions() {
  const style = useStyles();
  return (
    <div>
      <h2 class={style.h2}>Livrez les projets plus rapidement grâce à Slack</h2>
      <StyleRoot>
        <p class={style.p} style={styles.bounce}>
          {" "}
          Véritable outil d’ingénierie collaborative, Slack est utilisé par les
          équipes d’ingénieurs pour collaborer sur des projets et les mener à
          leur terme. Les canaux et les intégrations éliminent les obstacles
          entre les différentes équipes et les fonctions, ce qui accélère
          l’ensemble du processus de gestion de projet informatique, du
          lancement jusqu’aux validations.
        </p>
      </StyleRoot>
    </div>
  );
}

Solutions.propTypes = {};

export default Solutions;
