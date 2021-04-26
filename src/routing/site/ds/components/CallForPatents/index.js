import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Table from "./TableImpDate";
import Background from "../../../../../assets/bg-header.jpg";

import publicationPartner from "../../../../../assets/patent.gif";
const CommunicationList = [
  "Wireless sensor networks",
  "Mobile ad-hoc networks",
  "Software defined networks",
  "Information theory and coding",
  "Cloud communications and networking",
  "Wearable network and systems",
  "Personal communication systems",
  "Vehicular networks and applications",
  "Wireless communications",
  "Virtual and overlay networks",
  "Future Internet Architecture and protocols",
  "Satellite Communication",
  "Next Generation Networking",
  "Quantum Networking",
  "Qos Provisioning and Architectures",
  "Telecommunication Services and Applications",
  "Optical Communication",
  "Network Performance",
  "Computer Security",
  "Digital Signature",
  "Information Security",
  "Network Security",
  "Cyber Security",
  "MANET’s",
];
const ComputationList = [
  "Computational Intelligence",
  "Machine Learning",
  "Artificial Intelligence",
  "Signal Processing",
  "Computer vision",
  "Soft Computing",
  "Decision Support and Decision making",
  "Parallel computing",
  "Distributed computing",
  "Grid computing",
  "Cloud computing",
  "Mobile computing",
  "Biomedical computing",
  "Ubiquitous computing",
  "Image processing",
  "Information retrieval",
  "Deep learning",
  "Expert system",
  "Internet computing",
  "High performance computing",
];
const DataAnalytics = [
  "Open API for data analytics, In-database analytics",
  "Architectures for generic sentiment analysis systems",
  "Crawling web services; Cross-database analytics",
  "Mass data analytics Storing, dropping and filtering data",
  "Aspect-based analysis , Comparative-sentiment analysis",
  "Tools, frameworks and mechanisms for data analytics",
  "Big data analytics, Deep data analytics",
  "Pre-built analytics (pattern, time-series, clustering, graph, statistical analysis, etc.)",
  "Scalable data analytics",
  "Trust in data analytics",
  "Sentiment analysis techniques on social media",
  "Nomad analytics , Predictive analytics",
  "Analytics visualization",
  "Forecast analytics , Financial risk management , ROI analytics",
  "Simulation applications",
  "Statistical applications",
  "Document-level analysis , Sentence-level analysis",
  "Multi-modal support for data analytics",
  "Relevant / redundant / obsolete data analytics",
];

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
    maxWidth: "80%",
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
    justifyContent: "flex-start",
    marginLeft: "10%",
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
  ObjectiveTitle: {
    fontFamily: "Montserrat,sans-serif",
    color: "#fff",
    fontWeight: "700",
    textTransform: "uppercase",
    [theme.breakpoints.down("lg")]: {
      fontSize: "25px",
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
      fontSize: "20px",
      padding: "2px",
      fontWeight: "600",
      letterSpacing: "1px",
    },
  },
  ObjectiveContent: {
    fontFamily: "sans-serif",
    textAlign: "justify",
    paddingRight: "10px",
    fontFamily: "Montserrat,sans-serif",
    fontSize: "14px",
    color: "#fff",
    fontWeight: "200",

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
    marginLeft: "10%",
    maxWidth: "23%",
    ["@media (max-width:1023px)"]: {
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
          <div className={classes.aboutHeader}>Call For Papers</div>
        </div>
      </section>
      {/* <section>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <Paper elevation={0} className={classes.CardContainer}>
            <CardContent className={classes.aboutBox}>
              <Typography className={classes.title} component="h2">
                Important dates
              </Typography>
              <span
                style={{
                  marginLeft: "18%",
                  marginBottom: "2%",
                  display: "block",
                  backgroundColor: "#1c449c",
                  width: "100px",
                  height: "2px",
                }}
              ></span>

              <Table />
            </CardContent>
          </Paper>
        </div>
      </section> */}
      <section>
        <div>
          <Paper elevation={0} className={classes.CardContainer}>
            <CardContent className={classes.aboutBox}>
              <Typography className={classes.title}>
                Conference Tracks
              </Typography>
              <span
                style={{
                  marginLeft: "30%",
                  display: "block",
                  backgroundColor: "#1c449c",
                  width: "100px",
                  height: "2px",
                }}
              >
                {" "}
              </span>
              <Typography className={classes.content}>
                The scope of this conference is to provide a platform for
                researchers, engineers, academicians as well as industrial
                professionals from all over the world to present their research
                results and development activities in various topics of
                Computing and Communication Networks. It allows participants an
                opportunity to discuss the recent developments in the field of
                solidification computer science and management and review
                challenges faced by the community in the 21st century. The
                conference consists of invited
                <br />
                <b>
                  ICCCN 2021 will be an amalgamation of three different Tracks
                  organized parallel to each other, as listed below:
                </b>
              </Typography>
            </CardContent>
          </Paper>
          <div style={{ display: "flex" }}>
            <Paper className={classes.ObjectiveBox} elevation={0}>
              <Typography className={classes.ObjectiveTitle} component="h2">
                Communication Networks and Security
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
              <Typography>
                <ul className={classes.ObjectiveContent}>
                  {CommunicationList.map((ele) => {
                    return <li>{ele}</li>;
                  })}
                </ul>
              </Typography>
            </Paper>
            <Paper
              style={{ marginLeft: "5%" }}
              className={classes.ObjectiveBox}
              elevation={0}
            >
              <Typography className={classes.ObjectiveTitle} component="h2">
                Computation
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
              <Typography>
                <ul className={classes.ObjectiveContent}>
                  {ComputationList.map((ele) => {
                    return <li>{ele}</li>;
                  })}
                </ul>
              </Typography>
            </Paper>
            <Paper
              style={{ marginLeft: "5%" }}
              className={classes.ObjectiveBox}
              elevation={0}
            >
              <Typography className={classes.ObjectiveTitle} component="h2">
                Data Analytics
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
              <Typography>
                <ul className={classes.ObjectiveContent}>
                  {DataAnalytics.map((ele) => {
                    return <li>{ele}</li>;
                  })}
                </ul>
              </Typography>
            </Paper>
          </div>
        </div>
      </section>
      <section>
        <Paper
          elevation={0}
          style={{
            marginLeft: "0%",
            backgroundColor: "#e2e1eb",
            marginTop: "2%",
          }}
          className={classes.CardContainer}
        >
          <CardContent
            style={{ marginLeft: "10%" }}
            className={classes.aboutBox}
          >
            <Typography className={classes.title}>Paper Submission</Typography>
            <span
              style={{
                marginLeft: "30%",
                display: "block",
                backgroundColor: "#1c449c",
                width: "100px",
                height: "2px",
              }}
            >
              {" "}
            </span>
            <Typography className={classes.content}>
              <b>
                The Original unpublished Research Papers, Articles & Working
                papers having maximum length 8 pages on the topics related to
                the theme are invited for presentation/publication in the
                conference proceedings. 
              </b>
              <ol
                className={classes.ObjectiveContent}
                style={{
                  color: "black",
                  lineHeight: "1.9em",
                  fontSize: "15px",
                }}
              >
                <li>
                  Kindly ensure that your paper is formatted as per  Springer
                  Guidelines (not exceeding 8 pages written in A4 size). Please
                  refer the attached springer template for preparation of your
                  paper.
                </li>
                <li>
                  All papers must be submitted online via easychair submission
                  portal.
                </li>
                <li>
                  All submissions will be thoroughly peer-reviewed by experts
                  based on originality, significance and clarity.
                </li>
                <li>
                  Only papers presenting original content with novel research
                  results or successful innovative applications will be
                  considered for publication in the conference proceedings (as
                  chapters in edited volumes of Springer Series).
                </li>
              </ol>
            </Typography>
            <Typography className={classes.title}>Plagiarism Policy</Typography>
            <ol
              className={classes.ObjectiveContent}
              style={{ color: "black", lineHeight: "1.9em", fontSize: "15px" }}
            >
              <li>
                The paper prior to submission should be checked for plagiarism
                from licensed plagiarism softwares
                like Turnitin/iAuthenticate etc. The similarity content should
                not exceed 20% (in any case either self contents or others).
                Further, you have to strictly implement the following ethical
                guidelines for publication:
              </li>
              <li>
                Any form of self-plagiarism or plagiarism from others' work(s)
                should not be there in an article.  If any model / concept /
                figure / table / data / conclusive comment by any previously
                published work is used in your article, you should properly cite
                a reference to the original work.
              </li>
              <li>
                 Also language of explaining it should not be same as language
                of the work from which you have adopted it.  If you are using
                any copyrighted material, you should acquire prior permission
                from the copyright holder. 
              </li>
            </ol>
          </CardContent>
        </Paper>
      </section>

      <section style={{ height: "100px" }}></section>
    </div>
  );
}
