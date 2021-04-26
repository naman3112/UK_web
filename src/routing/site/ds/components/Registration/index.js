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
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
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
    fontSize: "30px",
    color: "#1c449c",
    letterSpacing: "2px",
    textDecoration: "underline",
    padding: "5px",
    fontWeight: "900",
    ["@media (max-width:479px)"]: {
      fontSize: "15px",
      padding: "2px",
      fontWeight: "600",
      letterSpacing: "1px",
    },
  },
  content: {
    fontFamily: "sans-serif",
    textAlign: "justify",
    lineHeight: "1.9em",
    ["@media (max-width:479px)"]: {
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
}));
export default function Registration() {
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
            }}
          >
            International Conference on Innovations and Ideas towards Patents
            (ICIIP)
          </Typography>

          <Typography
            className={classes.contentSec}
            style={{ textAlign: "center", color: "black" }}
          >
            ORGANISED BY :Indira Gandhi Delhi Technical University for Women,
            New Delhi, India <br /> October 30th, 2021
          </Typography>
        </Paper>
      </section>

      <section className={[classes.about, classes.container].join(" ")}>
        <Card style={{ width: "90%" }}>
          <CardContent>
            <Typography
              className={classes.title}
              style={{ fontSize: "25px" }}
              variant="h3"
              component="h2"
            >
              REGISTRATION
            </Typography>
            <Typography className={classes.content}>
              Once Your innovation idea is accepted, the registration process
              begins. you have to complete the following steps.
              <br />
            </Typography>
            <Typography className={classes.title} variant="h3" component="h2">
              STEP-1
            </Typography>
            <Typography className={classes.content}>
              Registration Fee: It is mandatory for at least one inventor of an
              accepted idea to register in order for the idea/innovation to
              appear in the patent journal and included in the Technical
              Program.
            </Typography>
          </CardContent>
        </Card>
      </section>
      <section className={classes.bankTableContainer}>
        <div className={classes.bankTable}>
          <TableFees />
          <Typography
            style={{ fontWeight: "bold", textAlign: "center" }}
            className={classes.content}
          >
            Special Discount of 10% for Universal Inovator (UI) Member <br />
            <br />
            <ul
              style={{
                listStyleType: "square",
                fontFamily: "sans-serif",
                textAlign: "justify",
                lineHeight: "1.9em",
                alignItems: "center",
                width: "100%",
              }}
            >
              <li>
                The applicable charges in the above table can vary in case of
                any miscellaneous condition. All rights are reserved with the
                organizing team
              </li>
              <li>
                {" "}
                The Registration Fees given in the above table include
                conference charges, Patent Publication and Filing Fees for up to
                10 claims.
              </li>
              <li>
                {" "}
                The Charges for post publication (patent grant) have not been
                included in this fee. If you want to continue further for Patent
                Grant then you can contact us post publication.{" "}
              </li>
            </ul>
          </Typography>
        </div>
        <div className={classes.bankTable}>
          <Table />
        </div>
      </section>
    </div>
  );
}
