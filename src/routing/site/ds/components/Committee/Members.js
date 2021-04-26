import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },


  MemberCard: {
    width: "38%",
    margin: "2%",
    ['@media (max-width:479px)']: {
      width: "90%"
    }

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
    textAlign: "center",
    lineHeight: "1.9em",
    ['@media (max-width:479px)']: {
      fontSize: "12px",
      padding: "2px",
      fontWeight: "600",
      letterSpacing: "1px"
    }
  },

});

function Members({ title, members }) {
  const classes = useStyles();
  return (
    <Paper className={classes.MemberCard} elevation={7}>
      <Typography className={classes.title} variant="h3" component="h2">
        {title}
      </Typography>
      {
        members.map((member, ind) => {
          return <Typography key={ind + member} className={classes.content}>{member}</Typography>
        })
      }


    </Paper>
  );
}

export default Members;
