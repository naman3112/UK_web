import React, { lazy } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import siteLogo from "../assets/ICCNLogo.jpeg";

import { DynamicLoader } from "../routing/base/Router";
import Drawer from "./Drawer";
import Typography from "@material-ui/core/Typography";
import {Link,NavLink} from 'react-router-dom';
const IconButton = lazy(() => import(`@material-ui/core/IconButton`));
const HomeIcon = lazy(() => import(`@material-ui/icons/Home`));
const Image = lazy(() => import(`material-ui-image`));
// const Search = lazy(() => import(`../common/components/SearchSuggestor`));
const Grid = lazy(() => import(`@material-ui/core/Grid`));

const useStyles = makeStyles((theme) => ({
  menuSec: {
    width: "3vw",
    color: "#666",
  },
  logoSec: {
    height: "80px",
    width: "150px",
   
  },
  searchSec: {
    display: "flex",
    margin: 'auto',
    marginRight: '2%',
    flexDirection: 'row',
    color: "#666",
    fontSize: "18px",
    ['@media (max-width: 479px)']: {
      display: "none"
    },


  },
  eleSearch: {
    color :"#666",
    padding: '10px',
    fontWeight: 'bold',
    textDecoration: 'none',
    ['@media (min-width: 480px) and (max-width: 1100px)']: {
      display: "none"

    },
    ['@media (max-width: 479px)']: {
      display: "none"
    },
    ['@media (min-width: 1101px)']: {
      padding: '7px'
    },

    '&:hover': {
      color: '#fc8403'
    }
  },
  iconSec: {
    paddingLeft: 30,
    "&:hover": {
      color: "white",
    },
  },
  header: {
    fontWeight: 'bold',

    "-moz-flex-shrink": 0,
    WebkitFlexShrink: 0,
    "-ms-flex-shrink": 0,
    flexShrink: 0,
    height: 70,
    [theme.breakpoints.down("xs")]: {
      height: 60,
    },

    backgroundColor: '#1c449c'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  homeButton: {
    "&:hover": {
      color: "white",
    },
  },
  menuHam: {

    ['@media (min-width:1101px)']: {
      display: "none"
    }
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      id="back-to-top-anchor"
      className={classes.header}
      style={{backgroundColor :"#f6f6f6"}}
    >
      <Toolbar>
        <span className={classes.menuHam}>

          <Drawer />
        </span>

        <section >
           <img className={classes.logoSec} src={siteLogo} />
        </section>
        <section className={classes.searchSec}>

          {/* {DynamicLoader(Search, {
            id: "sitemapSugg",
            searchOps: siteSugg,
            updateSelection: (selection) => {
              window.location.pathname = selection.route;
            },
          })} */}
          <Typography>
            <Link to="/" className={classes.eleSearch} >
              Home
            </Link>
          </Typography>
          <Typography>
            <Link to="/ds/About" className={classes.eleSearch}>
              About
            </Link>
          </Typography>


          <Typography>
            <Link to="/ds/Committee" className={classes.eleSearch}>
              Committee
            </Link>
          </Typography>

          <Typography>
            <Link to="/ds/CallForPatents" className={classes.eleSearch}>
              CFP
            </Link>
          </Typography>
          <Typography>
            <Link to="/#publicationPartner" className={classes.eleSearch}>
              Publications
            </Link>
          </Typography>
          <Typography>
            <Link to="/ds/ConferenceVenue" className={classes.eleSearch}>
              Conference Venue
            </Link>
          </Typography>

          <Typography>
            <Link to="/ds/Downloads" className={classes.eleSearch}>
              Downloads
            </Link>
          </Typography>

          <Typography>
            <Link to="/ds/Registration" className={classes.eleSearch}>
              Registrations
            </Link>
          </Typography>

        </section>
        <div className={classes.iconSec}>
          {DynamicLoader(IconButton, {
            "aria-label": "home page",
            color: "inherit",
            disabled: window.location.pathname === "/",
            href: "/",
            className: classes.homeButton,
            children: DynamicLoader(HomeIcon),
          })}
        </div>
      </Toolbar>
    </AppBar>
  );
}
