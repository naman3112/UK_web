import React from "react";
import Carousel from "../../../../../base/Carousel";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import univLogo from "../../../../../assets/Univ-ino-logo.jpeg";
import ICCCN from "../../../../../assets/ICCCN-Logo.jpeg";
import MMU from "../../../../../assets/MMU.svg.png"
import publicationPartner from "../../../../../assets/patent.gif";
import ICCNlogo from "../../../../../assets/ICCNLogo.jpeg"

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  carousel: {
    width: "100%",
  },
  impDates: {
    display: "inline-block",
    height: "70px",
    width: "60px",
    backgroundColor: "#1c449c",
    color: "white",
    fontWeight: "700",
    fontSize: "28px",
    padding: "2px",
    marginRight: "2px",
    marginBottom: "3px",
    ["@media (max-width:1023px)"]: {
      height: "60px",
      width: "50px",
      fontWeight: "400",
      fontSize: "20px",
      padding: "1px",
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
    ["@media (max-width:1023px)"]: {},
  },
  impDateText: {
    marginLeft: "30px",
    ["@media (max-width:1023px)"]: {
      marginLeft: "10px",
      fontSize: "11px",
      letterSpacing: "0px",
    },
  },
  about: {
    justifyContent: "space-evenly",
    /* text-indent: 50px; */

    margin: "5%",
  },
  aboutBox: {
    width: "40%",
    ["@media (max-width:1023px)"]: {
      width: "100%",
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
  ObjectiveTitle: {
    fontFamily: "Montserrat,sans-serif",
    color: "#fff",
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
  ObjectiveContent: {
    fontFamily: "sans-serif",
    textAlign: "justify",
    lineHeight: "1.9em",
    fontFamily: "Montserrat,sans-serif",
    fontSize: "15px",
    color: "#fff",
   fontWeight: "200",
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
  ObjectiveBox: {
    backgroundColor: "#1c449c",
    width: "40%",
    ["@media (max-width:1023px)"]: {
      width: "100%",
    },
  },

 
  publication: {
    fontFamily: "Montserrat,sans-serif",
    fontSize: "35px",
    color: "#1c449c",
    letterSpacing: "4px",
    
  
    fontWeight: "700",
    ["@media (max-width:1023px)"]: {
      fontSize: "35px",
      padding: "8px",
      fontWeight: "600",
      letterSpacing: "6px",
    },
  },
  publicationContainer:{
  },
  publicationImg:{
    width: "20%",
    margin : "18px",
    backgroundColor : "inherit",
    [theme.breakpoints.down("sm")]: {
      width: "80%"
    },
  
  
  }
 
}));
export default function Example() {
  const classes = useStyles();

  return (
    <div style={{ overflowX: "hidden", marginTop: "4%" }} id="go-to-top" >
      <section>
        <div className={classes.carousel}>
          <Carousel />
        </div>
      </section>

      <section className={[classes.about, classes.container].join(" ")}>
        <Paper className={classes.aboutBox} elevation={0}>
          <CardContent>
            <Typography className={classes.title}>
              About ICCN-2021
              <span
                style={{
                  marginLeft: "20%",
                  display: "block",
                  backgroundColor: "#1c449c",
                  width: "100px",
                  height: "2px",
                }}
              ></span>
            </Typography>
            <Typography className={classes.content}>
              International Conference on Computing and Communication Networks
              (ICCCN-2021) will be held at Manchester Metropolitan University,
              Manchester, United Kingdom | November 19-20, 2021. ICCCN-2021 is
              organized with the objective of bringing together scientists,
              professors, research scholars, students and industrial experts in
              the field of Computing and Communication Networks to a common
              forum. The primary goal of the conference is to promote the
              exchange of innovative scientific information between researchers,
              developers, engineers, students, and practitioners. Another goal
              is to promote the transformation of fundamental research into
              institutional and industrialized research and to convert applied
              exploration into real time application. All the accepted papers
              (after double blinded peer review) will be published in Springer’s
              Lecture Notes in Networks and Systems [Approval Pending] and
              extended selected papers will be published in the special issues
              of WoS/Scopus indexed Journals.
            </Typography>
          </CardContent>
        </Paper>
        <Paper className={classes.ObjectiveBox} elevation={0}>
          <CardContent>
            <Typography className={classes.ObjectiveTitle} component="h2">
              Objectives
              <span
                style={{
                  marginLeft: "30%",
                  display: "block",
                  backgroundColor: "#fff",
                  width: "100px",
                  height: "2px",
                }}
              ></span>
            </Typography>
            <Typography >
              <ul className={classes.ObjectiveContent}>
                <li>
                  The conference focusses in bridging the gap between Industry
                  and academia by organizing the workshops by the industry
                  experts on latest technologies for the participants.
                </li>
                <li>
                  The conference is anticipated to attract a large number of
                  high quality submissions and stimulate the cutting-edge
                  research discussions among many academic pioneering
                  researchers, scientists, industrial engineers, students from
                  all around the world.
                </li>
                <li>Another goal of this conference is to provide opportunities
                  for academics to receive informal in-depth feedback through
                  discussions, and to enable them to establish contact with
                  professionals in various countries and institutions and also
                  to encourage regional and international communication and
                  collaboration.
                </li>
                <li>
                  Provide common platform for academic pioneering researchers,
                  scientists, engineers and students to share their views and
                  achievements.
                </li>
                <li>
                  Focus on innovative issues at international level by bringing
                  together the experts from different countries.
                </li>
              </ul>
            </Typography>
          </CardContent>
        </Paper>
      </section>

      <section
        style={{ marginTop: "5%" }}
        id="publicationPartner"
      >
        <Typography className={classes.title} >
        ORGANISING & ASSOCIATED PARTNERS
        <span
                style={{
                  marginLeft: "26%",
                  display: "block",
                  backgroundColor: "#1c449c",
                  width: "150px",
                  height: "2px",
                }}
              ></span>
        </Typography>
                <div className={classes.publicationContainer}>
                  <img className={classes.publicationImg} src={univLogo} />
                  <img className={classes.publicationImg} src={ICCCN} />
                  <img className={classes.publicationImg} src={MMU} />

                </div>

      </section>
      <section style={{ height: "100px" }}></section>
    </div>
  );
}
