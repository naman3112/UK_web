import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import igdtuw1 from "../assets/igdtuw1.jpg";
import igdtuw2 from "../assets/igdtuw2.jpeg";
import icicc from "../assets/iciccimg.gif";
import qutub from "../assets/qutub.png";
import ayodhya from "../assets/ayodhya.png";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  img: {
    display: "block",
    height: "600px",
    width: "100%",
    ['@media (max-width:479px)']: {
      height: "250px",
    }
  },
});

export default function ControlledCarousel() {
  const classes = useStyles();

  const handleSelect = (selectedIndex, e) => {
  };

  return (
    <Carousel
      // activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item>
        <img className={classes.img} src={icicc} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className={classes.img} src={igdtuw1} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className={classes.img} src={ayodhya} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className={classes.img} src={qutub} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}
