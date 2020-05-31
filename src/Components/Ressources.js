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

function Ressources() {
  const style = useStyles();
  return (
    <div>
      <h2 class={style.h2}>Le guide du télétravail dans Slack – 1ère partie</h2>
      <StyleRoot>
        <p className={style.p} style={styles.bounce}>
          Le passage soudain au télétravail de plusieurs millions de personnes
          impose aux équipes une pression supplémentaire pour maintenir leur
          rythme, se sentir connectées et accomplir correctement leurs tâches.
          Slack a été précisément conçu dans cette optique.<br></br> <br></br>
          Comme il s’agit d’une plateforme de messagerie basée sur des canaux,
          l’ensemble de votre travail, qu’il s’agisse de vos conversations, de
          vos fichiers, ou même d’applications tierces telles que Zoom ou Google
          Drive, est regroupé en un seul endroit, accessible depuis n’importe
          où. Vous pouvez ainsi accéder plus facilement à vos informations,
          collaborer efficacement avec vos collègues et, en fin de compte,
          travailler plus rapidement.<br></br>
          <br></br>Pour mettre le pied à l’étrier de vos équipes en télétravail
          avec Slack, voici trois conseils.
        </p>
      </StyleRoot>
    </div>
  );
}

Ressources.propTypes = {};

export default Ressources;
