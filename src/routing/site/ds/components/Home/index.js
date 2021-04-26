import React from "react";
import Carousel from "../../../../../base/Carousel";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import publicationPartner from "../../../../../assets/patent.gif";
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
  content: {
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
  patent: {
    justifyContent: "center",
    marginBottom: "10px",
  },
  typesOfpatent: {
    justifyContent: "space-evenly",
  },
  publication: {
    fontFamily: "Montserrat,sans-serif",
    fontSize: "70px",
    color: "white",
    letterSpacing: "12px",
    textDecoration: "underline",

    padding: "15px",
    fontWeight: "700",
    ["@media (max-width:1023px)"]: {
      fontSize: "35px",
      padding: "8px",
      fontWeight: "600",
      letterSpacing: "6px",
    },
  },
  publicationBox: {
    width: "40%",
    height: "60%",
    marginTop: "4%",
    ["@media (max-width:1023px)"]: {
      width: "100%",
    },
  },
}));
export default function Example() {
  const classes = useStyles();

  return (
    <div style={{ overflowX: "hidden" }}>
      <section>
        <Paper elevation={5} style={{ margin: "2%" }}>
          <Typography
            className={classes.title}
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
            className={classes.content}
            style={{ textAlign: "center", color: "black" }}
          >
            ORGANISED BY :Indira Gandhi Delhi Technical University for Women,
            Delhi, India <br /> October 30th, 2021
          </Typography>
        </Paper>
      </section>

      <section>
        <div className={classes.carousel}>
          <Carousel />
        </div>
      </section>

      <section className={[classes.about, classes.container].join(" ")}>
        <Card className={classes.aboutBox}>
          <CardContent>
            <Typography className={classes.title} component="h2">
              About Us
            </Typography>
            <Typography className={classes.content}>
              The International Conference on Innovation and Ideas towards
              Patents (ICIIP-2021) is organized with the objective of bringing
              together innovative scientists, professors, research scholars,
              students and industrial experts in the field of Technology and
              Management to a common forum. The primary goal of the conference
              is to promote the exchange of innovation, ideas and scientific
              information between researchers, developers, engineers, students,
              and practitioners which can be transformed into Patents. Another
              goal is to promote the transformation of fundamental research into
              institutional and industrialized research and to convert applied
              exploration into real time application. ICIIP-2021 will be held at
              Indira Gandhi Delhi Technical University for Women, New Delhi. All the
              accepted innovations and ideas (after peer review) are published
              in INDIAN OFFICIAL JOURNAL OF THE PATENTS.
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.aboutBox}>
          <CardContent>
            <Typography className={classes.title} component="h2">
              Important Dates
            </Typography>
            <div className={classes.impDatesContainerB}>
              <div className={classes.impDatesContainer}>
                <div className={classes.impDates}>
                  <div style={{ fontSize: "15px" }}> May </div>
                  31
                </div>
                <div className={classes.impDateText}>
                  Deadline For Manuscript Submission
                </div>
              </div>
              <div className={classes.impDatesContainer}>
                <div className={classes.impDates}>
                  <div style={{ fontSize: "15px" }}> June </div>
                  15
                </div>
                <div className={classes.impDateText}>Notification of Acceptance / Rejection</div>
              </div>
              <div className={classes.impDatesContainer}>
                <div className={classes.impDates}>
                  <div style={{ fontSize: "15px" }}> June </div>
                  10
                </div>
                <div className={classes.impDateText}>
                  Registration Deadline
                </div>
              </div>
              <div className={classes.impDatesContainer}>
                <div className={classes.impDates}>
                  <div style={{ fontSize: "15px" }}> June </div>
                  15
                </div>
                <div className={classes.impDateText}>Final Document Due</div>
              </div>
              <div className={classes.impDatesContainer}>
                <div className={classes.impDates}>
                  <div style={{ fontSize: "15px" }}> Oct </div>
                  30
                </div>
                <div className={classes.impDateText}>Conference Date</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className={[classes.container, classes.patent].join(" ")}>
        <Paper elevation={5} style={{ width: "80%" }}>
          <CardContent>
            <div
              className={[classes.container, classes.typesOfpatent].join(" ")}
            >
              <Paper className={classes.aboutBox} style={{ marginTop: "1%" }}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    variant="h3"
                    component="h2"
                  >
                    About IPR
                  </Typography>
                  <Typography className={classes.content}>
                    Intellectual Property Rights (IPRs) are legal rights that
                    protect creations and/or inventions resulting from
                    intellectual activity in the industrial, scientific,
                    literary or artistic fields. The most common IPRs include
                    patents, copyrights, marks and trade secrets.
                  </Typography>
                </CardContent>
              </Paper>

              <Paper className={classes.aboutBox} style={{ marginTop: "1%" }}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    variant="h3"
                    component="h2"
                  >
                    PATENTS
                  </Typography>
                  <Typography className={classes.content}>
                    A Patent is a time limited protection that can be used to
                    protect inventions (or discoveries) that are new,
                    non-obvious, and useful, such as a new process of working,
                    machinery, article of manufacture, or composition of matter.
                    When a property owner holds a patent, others are prevented,
                    under law, from offering for sale, making, or using the
                    product.
                  </Typography>
                </CardContent>
              </Paper>
            </div>
          </CardContent>
        </Paper>
      </section>
      <section
        style={{ backgroundColor: "#1c449c", marginTop: "5%" }}
        id="publicationPartner"
      >
        <Typography className={classes.publication} component="h2">
          Publication Partners
        </Typography>
        <div
          className={classes.container}
          style={{ justifyContent: "space-evenly" }}
        >
          <Card className={classes.publicationBox}>
            <CardContent>
              <Typography
                className={classes.content}
                variant="h5"
                component="h5"
              >
                All the accepted Innovations and Ideas will be published in the
                following Government official journal of patent:
              </Typography>
              <Typography
                className={classes.content}
                style={{ fontWeight: "900" }}
                variant="h4"
                component="h4"
              >
                • OFFICIAL JOURNAL OF THE INDIAN PATENT OFFICE{" "}
              </Typography>
            </CardContent>
          </Card>
          <div style={{ width: "40%", padding: "12px" }}>
            <a href="https://ipindia.gov.in/" target="_blank" rel="noreferrer">
              <img
                style={{
                  height: "100%",
                  width: "70%",
                  backgroundColor: "white",
                }}
                src={publicationPartner}
                alt=""
              />
            </a>
          </div>
        </div>
      </section>
      <section style={{ height: "100px" }}></section>
    </div>
  );
}
