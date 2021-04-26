import React from "react";
import Carousel from "../../../../../base/Carousel";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import publicationPartner from "../../../../../assets/patent.gif";
const engineeringList =["Aeronautical Engineering",
     "Acoustical Engineering",
    "Agriculture Engineering",
     "Applied Physics",
    "Aquaculture Engineering",
    "Automotive Engineering",
    "Biomedical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
    "Computer Science ",
     "Cryptographic Engineering",
    "Data Science (Algorithms)",
    "Electrical Engineering",
    "Engineering based Books",
    "Engineering Management",
    "Environmental Engineering",
    "Geotechnical Engineering",
    "Material Science and Engineering",
    "Mechanical Engineering",
    "Mechatronics Engineering",
    "Mobile Application",
    "Nano-engineering",
    "Nuclear Engineering",
    "Optical Engineering",
     "Sports Engineering",
    "Solar Engineering",
     "Textile engineering",
    "Wind Engineering"];
const managementList=[
    "Database Management System",
    "Facilities Management",
    "Financial & Accounting Management",
    "Human Resource Management",
     "Innovation Management",
    "Knowledge Management",
    "Marketing Management",
    "Operations Management",
    "Production Management",
    "Public Relations Management/Communication",
     "Quality Management System",
    "R&D Management",
    "Risk Management (not sure if it will be a part of it)",
    "Sales Management",
    "Service Management",
    "Software Project Management",
    "Strategy and Management (Strategic mgmt.)",
    "Supply Chain Management",
    "System Design Management",
    "Technology Management"

]

const useStyles = makeStyles((theme)=>({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  listBox: {
    width: "40%",
    marginTop: "1%",
    ['@media (max-width:1101px)']: {
      width: "100%"
    }

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
    ['@media (max-width:1101px)']: {
      fontSize: "20px",
      fontWeight: "600",
      letterSpacing: "1px"
    }

  },
  titlePatent:{
    fontFamily: "Montserrat,sans-serif",
   
    color: "#1c449c",
    letterSpacing: "2px",
    textDecoration: "underline",
    padding: "5px",
    fontWeight: "700",
    ['@media (max-width:1101px)']: {
      fontSize: "15px",
      padding: "2px",
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
  patent: {
    justifyContent: "center",
    marginBottom: "10px",
    marginTop:"2%"
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
    
      <section className={[classes.container, classes.patent].join(" ")}>
        <Paper elevation={5} style={{ width: "80%" }}>
          <CardContent>
            <Typography className={classes.title} variant="h3" component="h2">
              CALL FOR INVENTIONS TRANSFORMING INTO PATENTS
            </Typography>
            <Typography className={classes.content}>
              The scope of Call for Inventions transforming into Patents is to
              provide a platform where Inventors, Researchers, Engineers,
              Managers, Academicians as well as Industrial Professionals from
              across the globe can take up the advantage of securing their
              novel/uncommon work through Intellectual Property Rights. These
              Legal Rights ensures that Inventors are protected from theft of
              their invention and prevents others from using their invention
              without permission.
            </Typography>
          </CardContent>
          <CardContent>
            <Typography className={classes.titlePatent} variant="h5" component="h5">
              Following applications for Patent are accepted based that they are
              novel and self-invented:{" "}
            </Typography>
            <div
              className={[classes.container, classes.typesOfpatent].join(" ")}
            >
              <Paper className={classes.listBox}>
                <CardContent>
                  <Typography
                    className={classes.titlePatent}
                    variant="h5"
                    component="h3"
                  >
                    ENGINEERING and TECHNOLOGY
                  </Typography>
                  <Typography className={classes.content}>
                    <ol className={classes.content}>
                      {
                          engineeringList.map((ele,index)=>{
                              return<li style={{padding:"2px"}} key={index+ele}>{ele}</li>
                          })
                      }   
                    </ol>
                  </Typography>
                </CardContent>
              </Paper>

              <Paper className={classes.listBox}>
                <CardContent>
                  <Typography
                    className={classes.titlePatent}
                    variant="h5"
                    component="h3"
                  >
                    MANAGEMENT
                  </Typography>
                  <Typography className={classes.content}>
                    <ol >
                      {
                          managementList.map((ele,index)=>{
                              return<li key={index+ele}>{ele}</li>
                          })
                      }   
                    </ol>
                    </Typography>
                </CardContent>
              </Paper>
            </div>
          </CardContent>
        </Paper>
      </section>
     
      <section style={{ height: "100px" }}></section>
    </div>
  );
}
