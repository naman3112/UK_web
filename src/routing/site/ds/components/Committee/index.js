import { makeStyles } from "@material-ui/core";
import React from "react";
import Members from "./Members";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const memberTitle = [
  {
    title: "Patron:",
    member: ["Prof. Amita Dev, Vice Chancellor, IGDTUW, Delhi, India."],
  },
  {
    title: "General Chair(s):",
    member: [
      "Prof. Siddhartha Bhattacharyya, Rajnagar Mahavidyalaya, Birbhum, India.",
      "Prof. Valentina Emilia Balas, Aurel Vlaicu University of Arad, Romania.",
    ],
  },
  {
    title: "Honorary Chair(s):",
    member: [
      "Prof. Oscar Castillo, Tijuana Institute Technology, Tijuana, Mexico.",
      "Prof. Aboul Ella Hassanien, Cairo University, Egypt.",
    ],
  },
  {
    title: "Conference Chair(s):",
    member: [
      "Prof. Arun Sharma, Managing Director – IGDTUW Anveshan Foundation and Dean – Examination Affairs, Indira Gandhi Delhi Technical University for Women (IGDTUW), Delhi.",
      "Prof. A. K. Singh, National Institute of Technology, Kurukshetra.",
    ],
  },
  {
    title: "Technical Program Chair(s):",
    member: [
      "Prof. Ranu Gadi, Dean – Research and Consultancy, IGDTUW and Director-IGDTUW-Anveshan Foundation.",
      "Prof. Joel J P C Rodrigues, Federal University of Piaui, Brazil",
      "Prof. Anil K Ahlawat, KIET Group of Institutes, Ghaziabad, India.",
      "Prof. Abhishek Swaroop, Bhagwan Parshuram Institute of Technology, Delhi, India.",
    ],
  },
  {
    title: "Convener(s):",
    member: [
      "Dr. Ashish Khanna, Maharaja Agrasen Institute of Technology (GGSIPU), New Delhi",
      "Dr. Deepak Gupta, Maharaja Agrasen Institute of Technology (GGSIPU), New Delhi",
    ],
  },
  {
    title: "Publicity Chair(s):",
    member: [
      "Prof. Jasdeep Kaur, Dean – Academic Affairs, IGDTUW and Director, IGDTUW – Anveshan Foundation.",
      "Dr. Gulshan Shrivastava, Sharda University, Gr. Noida, India.",
      "Dr. Aditya Khamparia, Babasaheb Bhimrao Ambedkar University, Amethi, India.",
    ],
  },

  {
    title: "Co-Convener:",
    member: [
      "Mr. Moolchand Sharma, Maharaja Agrasen Institute of Technology, India.",
      "Mr. Rahul Sachdeva, IGDTUW-Anveshan Foundation, India."
    ],
  },
  {
    title: "Organising Chair:",
    member: [
      "Dr. V.K. Arora, CEO, IGDTUW-Anveshan Foundation.",
    ],
  },
  {
    title: "Organizing Team:",
    member: [
      "Mr. Rahul Sachdeva, IGDTUW-Anveshan Foundation.",
    ],
  },
];

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
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
    fontWeight: "700",
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
function Commitee() {
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

export default Commitee;
