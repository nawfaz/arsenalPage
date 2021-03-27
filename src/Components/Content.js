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
    fontWeight: "200",
  },
}));

function Content() {
  const style = useStyles();
  return (
    <div>
      <h2 class={style.h2}>Arsenal Football Club</h2>
      <StyleRoot>
        <p class={style.p} style={styles.bounce}>
          Arsenal Football Club is a phahahaharofessional football club based in
          Islington, London, England, that plays in the Premier League, the top
          flight of English football. The club has won 13 League titles, a
          record 13 FA Cups, two League Cups, 15 FA Community Shields, the only
          League Centenary Trophy, one UEFA Cup Winners' Cup and one
          Inter-Cities Fairs Cup. <br></br>
          <br></br>Arsenal was the first club from the South of England to join
          The Football League, in 1893, and they reached the First Division in
          1904. Relegated only once, in 1913, they continue the longest streak
          in the top division,[3] and have won the second-most top-flight
          matches in English football history.[4] In the 1930s, Arsenal won five
          League Championships and two FA Cups, and another FA Cup and two
          Championships after the war. In 1970–71, they won their first League
          and FA Cup Double. Between 1989 and 2005, they won five League titles
          and five FA Cups, including two more Doubles. They completed the 20th
          century with the highest average league position.[5]<br></br>
          <br></br>Herbert Chapman won Arsenal's first national trophies, but
          died prematurely of pneumonia in 1934. He helped introduce the WM
          formation, floodlights, and shirt numbers,[6] and added the white
          sleeves and brighter red to the club's kit. Arsène Wenger was the
          longest-serving manager and won the most trophies. He won a record
          seven FA Cups, and his title-winning team set an English record for
          the longest top-flight unbeaten league run at 49 games between 2003
          and 2004,[7] and in 2003-04 going an entire season unbeaten for the
          first time in modern history,[8] receiving the nickname The
          Invincibles. Texte de test!!
        </p>
      </StyleRoot>
    </div>
  );
}

Content.propTypes = {};

export default Content;
