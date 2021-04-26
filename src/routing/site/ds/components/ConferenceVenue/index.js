import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import igdtuw from "../../../../../assets/igdtuw1.jpeg";
import Reachus from "./Reachus"
const useStyles = makeStyles((theme)=>({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"
  },
  reachUs: {
    width: "20%",
    margin: "1%",
    ['@media (max-width:1101px)']: {
      width: "100%"
    }
  },
  imageL: {
    height: "400px",
    width: "70%",
    marginTop: "1%",
    ['@media (max-width:1101px)']: {
      height: "250px",
      width: "90%",
      marginTop: "1%"
    }

  },
  mapImg: {
    width: "50%",
    marinTop: "1%",
    ['@media (max-width:1101px)']: {
      width: "100%"
    }

  },
  title: {
    fontFamily: "Montserrat,sans-serif",
    fontSize: "30px",
    color: "#1c449c",
    letterSpacing: "2px",
    textDecoration: "underline",
    padding: "5px",
    fontWeight: "700",
    ['@media (max-width:1101px)']: {
      fontSize: "20px",
      fontWeight: "600",
      letterSpacing: "1px"
    }
  },
  content: {
    fontFamily: "sans-serif",
    textAlign: "justify",
    lineHeight: "1.9em",
    ['@media (max-width:1101px)']: {
      fontSize: "12px",
      fontWeight: "400",
    }
  },
  titleSec: {
    fontFamily: "Montserrat,sans-serif",
    color: "#1c449c",

    textDecoration: "underline",

    fontWeight: "700",
    [theme.breakpoints.down("lg")]: {
      fontSize: "35px",
      padding: "5px",
      fontWeight: "600",
      letterSpacing: "2px",
    },
    // ['@media (max-width:1023px)']:{
    //   fontSize: "25px",
    //   padding: "2px",
    //   fontWeight: "600",
    //   letterSpacing: "1px"
    // },
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
      padding: "2px",
      fontWeight: "600",
      letterSpacing: "1px",
    },
  },
  contentSec: {
    fontFamily: "sans-serif",
    textAlign: "justify",
    lineHeight: "1.9em",
    // ['@media (max-width:1023px)']:{
    //   fontSize: "12px",
    //   padding: "2px",
    //   fontWeight: "600",
    //   letterSpacing: "1px"
    // },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      padding: "2px",
      fontWeight: "600",
      letterSpacing: "1px",
    },
  },

}));
export default function Example() {
  const classes = useStyles();

  return (
    <div>
          <section>
        <Paper elevation={5} style={{ margin: "2%" }}>
          <Typography
            className={classes.titleSec}
            style={{
              textAlign: "center",
              color: "red",
              textDecoration: "none",
              margin: "20%"
            }}
          >To Be Updated soon 
          </Typography>

        </Paper>
      </section>
    </div>
  );
}
