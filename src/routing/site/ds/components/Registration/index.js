import React from "react";
// import Carousel from "../../../../../base/Carousel";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
// import publicationPartner from "../../../../../assets/patent.gif";
import Table from "./Table";
import TableFees from "./TableFees";
import Background from "../../../../../assets/bg-header.jpg";
const ItemList = [
  "Access to Keynote talks",
  "Access to paper presentation sessions",
  "Networking sessions",
  "Conference lunch and refreshment*",
  "Tea and Coffee Breaks*",
  "Conference kit*",
  "Participation Certificate",
];
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  // pasting work
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
      fontSize: "40px",
      padding: "2px",
      fontWeight: "600",
      letterSpacing: "1px",
      marginTop: "10%",
      minHeight: "0px",
    },
  },
  //compleet

  bankTableContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  bankTable: {
    width: "80%",
    margin: "1%",
    justifyContent: "center",
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
  ulStyle: {
    marginLeft: "150px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px"
    },
  },
}));
export default function Registration() {
  const classes = useStyles();

  return (
    <div style={{ overflowX: "hidden" }}>
      <section>
        <div className={classes.aboutHeader}>
          <div className={classes.aboutHeader}>Registrations</div>
        </div>
      </section>
      <section
        style={{ marginTop: "1%" }}
        className={classes.bankTableContainer}
      >
        <div className={classes.bankTable}>
          <Typography className={classes.title} component="h2">
            CONFERENCE ACCEPTED PAPER REGISTRATION
            <span
              style={{
                marginLeft: "15%",
                display: "block",
                backgroundColor: "#1c449c",
                width: "20%",
                height: "2px",
                marginBottom: "2%",
              }}
            ></span>
          </Typography>
          <TableFees />
          <Typography
            style={{ fontWeight: "bold", textAlign: "justify" }}
            className={classes.content}
          >
            <ul style={{ padding: "20px" }}>
              <li>
                {" "}
                (*Standard Paper size – 8 pages. Over length of paper charges
                £60 per extra page.) 
              </li>
              <li>
                (**Research Student Author - Those authors who are currently
                prusuing PHD, Masters degree in a research
                organisation/University comes under this category. ) If you have
                any concerns regarding the registration policy or fees please
                feel to write us at . <br />
              </li>
            </ul>
          </Typography>
        </div>
        <div className={classes.bankTable}>
          <Typography className={classes.title} component="h2">
            CONFERENCE PARTICIPANT REGISTRATION
            <span
              style={{
                marginLeft: "19%",
                display: "block",
                backgroundColor: "#1c449c",
                width: "20%",
                height: "2px",
                marginBottom: "2%",
              }}
            ></span>
          </Typography>

          <Table />
          <Typography
            style={{ fontWeight: "bold", textAlign: "center", color: "black" }}
            className={classes.title}
          >
            Early Bird Registration Open Now !!
          </Typography>
        </div>
      </section>
      <section
        style={{ marginTop: "1%" }}
        className={classes.bankTableContainer}
      >
        <div className={classes.bankTable}>
          <Typography className={classes.title} component="h2">
            REGISTRATION INCLUDE{" "}
            <span
              style={{
                marginLeft: "32%",
                display: "block",
                backgroundColor: "#1c449c",
                width: "10%",
                height: "2px",
                marginBottom: "2%",
              }}
            ></span>
          </Typography>

          <Typography
            style={{ fontWeight: "bold" }}
            className={classes.content}
          >
            <ul className={classes.ulStyle}>
              {ItemList.map((ele) => {
                return <li>{ele}</li>;
              })}
            </ul>
          </Typography>
          <Typography
            style={{ fontWeight: "bold" }}
            className={classes.content}
          >
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                textAlign: "left",
              }}
              className={classes.title}
            >
              Note:
            </Typography>
            The conference is non-residential and delegates are kindly requested
            to make their own arrangement for accommodation. If you have any
            query, please drop a mail to . All participants and authors abide by
            the [Terms and Conditions] as per the organizations guidelines.
          </Typography>
        </div>
      </section>
    </div>
  );
}
