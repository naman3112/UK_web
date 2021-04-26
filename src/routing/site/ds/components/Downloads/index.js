import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
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
function Index() {
    const classes = useStyles();

    return (
        <div style={{height :"800px" ,color: "red", letterSpacing: "3px"}}>
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
            
            
            <h1 >Coming Soon</h1>
        </div>
    )
}

export default Index
