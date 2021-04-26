import React from "react";
// import Carousel from "../../../../../base/Carousel";
import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

// import publicationPartner from "../../../../../assets/patent.gif";
import logo from "../../../../../assets/igdtuwLogo.png";
import universal from "../../../../../assets/universalLogo.jpeg"
import acuminor from "../../../../../assets/rlogow.jpg"
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  aboutBox: {
    width: "60%",
    ['@media (max-width:479px)']: {
      width: "100%"
    }

  },
  aboutImg: {
    width: "20%",
    ['@media (max-width:479px)']: {
      height: "50%"
    }

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
    ['@media (max-width:479px)']: {
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

      fontWeight: "600",

    }
  },
  CardContainer: {
    display: "flex",
    flexDirection: "row",
    ['@media (max-width:1101px)']: {
      flexDirection: "column"
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
  imgLogo: {

    height: "100%",
    [theme.breakpoints.down("lg")]: {
      width: "30vw",
    },

    [theme.breakpoints.down("sm")]: {
      width: "100%"
    },
  }


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
      <section className={[classes.about, classes.container].join(" ")}>
        <Paper elevation={5} className={classes.CardContainer}>
          <CardContent className={classes.aboutBox}>
            <Typography className={classes.title} component="h2">
              About The University
            </Typography>
            <Typography className={classes.content}>
              Indira Gandhi Delhi Technical University for Women (IGDTUW) has been established in May 2013 vide Delhi State Legislature Act 9, 2012, as a non-affiliating teaching and research University at Delhi to facilitate and promote studies, research, technology, innovation, incubation and extension work in emerging areas of professional education among women, with focus on engineering, technology, applied sciences, management and its allied areas with the objective to achieve excellence in these and related fields.
              University is offering the following programmes:

              Under Graduate Programmes:
              • Bachelor of Technology (B. Tech.) in CSE-AI/ CSE/IT/ECE/MAE
              • Bachelor of Architecture (B. Arch.)
              • Bachelor of Business Administration (BBA)
              Post Graduate Programmes:
              •	Master of Technology (IT – Information Security Management / CSE – Artificial Intelligence / ECE – VLSI Design / Robotics and Automation)
              •	Master of Planning (Urban Planning)
              •	Master of Computer Applications (MCA)
              •	Master of Business Administration (MBA)

              PhD Programmes:
              Computer Science and Engineering / Information Technology / Computer Applications / Electronics and Communication Engineering / Mechanical Engineering / Physics / Chemistry / Mathematics / English
              University Achievements
              In last couple of years, the University has achieved a number of milestones and has been awarded. In NIRF, University improved its ranking to 145th in comparison to previous year as 162. It has been declared as the 2nd fastest growing university by India Today group.
              <br />
              Recently, University has been placed under 101 - 200 band in Quality Education parameter by Times Higher Education (THE) ranking for 2021. University has also achieved ISO 9001:2015 QMS Certification. Most recently, IGDTUW participated in the World’s Universities with Real Impact (WURI) Ranking and has been ranked 21st in the special category “Entrepreneurial Spirit” and overall 77th position in “WURI: Innovative Universities for 2020”. FICCI has declared IGDTUW as University of the Year (1-10 Years). Other recognitions also include Mrs. Rahatun Nesa Ali Memorial ISTE National Award for Best Women Engineering College of India and the Notable Mention Award –Delhi by AICTE.
              The objective of the University is to foster industry relevant research and innovations and empower the women of our country through value based higher education making them employable, self reliant, responsible citizen of the country with concern for environment and society.
            </Typography>
          </CardContent>
          <div   >
            <img style={{ width: "100%" }} src={logo} alt="" />

          </div>

        </Paper>

        {/* About Acuminor */}
        <Paper elevation={5} style={{ marginTop: "2%", justifyContent: 'space-between' }} className={classes.CardContainer}>
          <CardContent className={classes.aboutBox}>
            <Typography className={classes.title} variant="h3" component="h2">
              About (Acuminor)
            </Typography>
            <Typography className={classes.content}>
              To initiate, undertake, carry on, engage in, promote, assist encourage
              and conduct scientific and technical research, developments,
              experiments, investigations, inquiries, studies, projects, analysis,
              examinations, surveys and test of all kinds including, but not limited to
              those related to economic, fiscal, commercial, financial, agricultural,
              medical industrial, mining, technical and scientific problems and
              matters in India/ abroad.
              To promote scientific and technical research activities in the country
              through organizing international events, conferences, seminars,
              workshops, faculty development programmes, charitable activities and
              promoting research excellence awards for the same.
            </Typography>
          </CardContent>
          <div   >
            <img className={classes.imgLogo} src={acuminor} alt="" />
          </div>
        </Paper>

        {/* About Universal Innovators */}
        <Paper elevation={5} style={{ marginTop: "2%" }} className={classes.CardContainer}>
          <CardContent className={classes.aboutBox}>
            <Typography className={classes.title} variant="h3" component="h2">
              About Us(Universal Innovators)
            </Typography>
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
