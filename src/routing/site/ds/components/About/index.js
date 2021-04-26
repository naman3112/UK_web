import React from "react";
// import Carousel from "../../../../../base/Carousel";
import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import logo from "../../../../../assets/mmu-img.jpg";
import universal from "../../../../../assets/universalLogo.jpeg";
import acuminor from "../../../../../assets/rlogow.jpg";
import Background from "../../../../../assets/bg-header.jpg";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  aboutHeader: {
    backgroundImage: `url(${Background})`,
    display: "block",
    marginTop: "4%",
    backgroundSize: "cover",
    minHeight: "150px",
    filter: "blur(1px)",
    width: "100%",
    backgroundRepeat: "no-repeat",
    fontFamily: "Montserrat,sans-serif",
    color: "white",
    fontWeight: "700",
    textTransform: "uppercase",
    [theme.breakpoints.down("lg")]: {
      fontSize: "65px",
      padding: "5px",
      fontWeight: "900",
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
  title: {
    fontFamily: "Montserrat,sans-serif",
    color: "#1c449c",
    fontWeight: "700",
    textTransform: "uppercase",
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
  content: {
    fontFamily: "sans-serif",
    textAlign: "justify",
    lineHeight: "1.9em",
    fontFamily: "Montserrat,sans-serif",
    fontSize: "15px",
    color: "#666",
    textIndent: "50px",
    paddingBottom: "12px",

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
  aboutBox: {
    maxWidth: "60%",
    ["@media (max-width:479px)"]: {
      width: "100%",
    },
  },
  aboutImg: {
    width: "20%",
    ["@media (max-width:479px)"]: {
      height: "50%",
    },
  },

  impDatesContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    fontFamily: "sans-serif",
    fontSize: "15px",
    letterSpacing: "2px",
    alignItems: "center",
    // lineHeight: "1.9em",
    justifyContent: "flex-start",
    color: "red",
  },
  impDatesContainerB: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    fontFamily: "sans-serif",
    fontSize: "15px",
    letterSpacing: "2px",

    // lineHeight: "1.9em",
    justifyContent: "flex-start",
    color: "red",
  },
  about: {
    justifyContent: "space-evenly",
    /* text-indent: 50px; */

    margin: "5%",
  },

  content: {
    fontFamily: "sans-serif",
    textAlign: "justify",
    lineHeight: "1.9em",
    fontFamily: "Montserrat,sans-serif",
    fontSize: "15px",
    color: "#666",
    textIndent: "50px",
    paddingBottom: "12px",

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
  CardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    ["@media (max-width:1101px)"]: {
      flexDirection: "column",
    },
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
  imgLogo: {
    height: "100%",
    [theme.breakpoints.down("lg")]: {
      width: "30vw",
    },

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));
export default function Example() {
  const classes = useStyles();

  return (
    <div>
      <section>
        <div className={classes.aboutHeader}>
          <div className={classes.aboutHeader}>About us</div>
        </div>
      </section>
      <section className={[classes.about, classes.container].join(" ")}>
        <Paper elevation={0} className={classes.CardContainer}>
          <CardContent className={classes.aboutBox}>
            <Typography className={classes.title} component="h2">
              About The University
            </Typography>
            <span
              style={{
                marginLeft: "23%",
                display: "block",
                backgroundColor: "#1c449c",
                width: "100px",
                height: "2px",
              }}
            ></span>
            <Typography className={classes.content}>
              Manchester Metropolitan University (often abbreviated MMU) is
              a public university located in Manchester, England. The university
              traces its origins to the Manchester Mechanics Institute and
              the Manchester School of Design, which formed Manchester
              Polytechnic in 1970. Manchester Polytechnic then gained university
              status under the government's Further and Higher Education Act,
              becoming the Manchester Metropolitan University in 1992.
              Manchester Metropolitan University is an accredited member of
              the Association of MBAs, and member of the University Alliance,
              the Association of Commonwealth Universities, the North West
              Universities Association, Association to Advance Collegiate
              Schools of Business and the European University Association.
              Today, it is also home to the Manchester School of Art,
              the Manchester School of Theatre, as well as the Manchester School
              of Architecture (MSA) administered in collaboration with
              the University of Manchester. The University's logo is derived
              from the upper part of the shield of the university's
              coat-of-arms, with six spade-irons positioned together, suggesting
              hard toil and entrenchment.
            </Typography>
          </CardContent>
          <div>
            <img style={{ width: "100%" }} src={logo} alt="" />
          </div>
        </Paper>

        <Paper elevation={0} className={classes.CardContainer}>
          <CardContent className={classes.aboutBox}>
            <Typography className={classes.title} component="h2">
              About Universal Inovators
            </Typography>
            <span
              style={{
                marginLeft: "15%",
                display: "block",
                backgroundColor: "#1c449c",
                width: "100px",
                height: "2px",
              }}
            ></span>
            <Typography className={classes.content}>
              Every success story begins with a vision. The Universal Innovators
              (UI) is a private and autonomous body promoting research based
              activities all over the world. The UI aims to do non-profit
              collaborative research in the field of engineering, applied
              sciences and management. We aim to be the leading independent
              academic and professional body working in collaboration with
              academicians, faculties, students, researchers and educational
              institutes. This leads us to be playing a creative and critical
              role in the society by disseminating teaching and research on a
              global scale, the cornerstones of which are good, long-term
              relationships, a focus on real life applications necessary for the
              welfare of the mankind, and an ability to combine quality and
              innovation. The mission of Universal Innovators is to cultivate
              and carry out research in high-tech methodologies. We deal in
              conducting FDP’s, workshops, seminars, and conferences. As a
              recognized body, Universal Innovators (UI) seeks to facilitate the
              availability of academic excellence and disseminate innovative
              knowledge worldwide.
            </Typography>
          </CardContent>
          <div>
            <img style={{ width: "100%" }} src={universal} alt="" />
          </div>
        </Paper>
      </section>
    </div>
  );
}
