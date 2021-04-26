import React, { lazy } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Zoom from "@material-ui/core/Zoom";
import { DynamicLoader } from "../routing/base/Router";
import IconButton from '@material-ui/core/IconButton'
import Facebook from '@material-ui/icons/Facebook';
import Email from '@material-ui/icons/Email';
import LightBox from "./LightBox"
import Fab from '@material-ui/core/Fab';
import ArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
const Button = lazy(() => import(`@material-ui/core/Button`));
const BugReport = lazy(() => import(`@material-ui/icons/BugReportRounded`));

const useStyles = makeStyles((theme) => ({
  copyright: {
    margin: "auto",
    padding: theme.spacing(1),
    color: "white",
    textAlign: "center",
  },
  company: {
    color: "#D1F5E6",
    "&:hover": {
      color: "#AEF4D6",
      textDecoration: "none",
    },
  },
  main: {
    padding: theme.spacing(1),
    color: "white",
    fontStyle: "italic",
    fontSize: "1.1rem",
    "&:hover": {
      backgroundColor: theme.palette.divider,
    },
  },
  footer: {
    padding: theme.spacing(1),
    backgroundColor: "#242122",
    display: "flex",
    flexDirection: "column",
  },
  button: {
    margin: "10px auto",
  },
  topFab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  quickLinks: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  quickLinkContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    color: "white",
    alignItems: "justify"
   
  },
  quickItem: {
    color: "white",
    padding: "10px",
    textAlign : "justify",
    "&:hover": {
      color: "#db162a",
      textDecoration: "none",
    },
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#go-to-top"
    );
    if (anchor) {
      console.log(anchor)
      anchor.scrollIntoView({ behavior: "smooth", block: "start" });
   
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.topFab}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function Copyright() {
  const classes = useStyles();

  return (
    <Typography variant="body2" className={classes.copyright}>
      {"Copyright © "}
      <Link href="/" className={classes.company}>
      International Conference on Computing and Communication Networks (ICCCN-2021)
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter(props) {
  const [dialogConfig, setDialogConfig] = React.useState(null);
  console.log(dialogConfig);
  const classes = useStyles();

  // const whyWeBuilt = `VisuAlgo is a website built for the sole purpose of providing a
  // platform for visualising and providing intuitive explainations to
  // various data structures and algorithms in the various sub-domains of
  // the vast field of study and research in Computer Science`;

  const bugReportDialogConfig = {
    title: "TITLE",
    number: "1",
    contentJSX: (
      <div>
        <h3> Use for given your description</h3>
        <Typography>
          hey i am in lightbox 1-damn. Put your content here for plug and play
        </Typography>
      </div>
    ),
    open: {
      animation: "fade-in",
      callback: function (event) {},
    },
    close: {
      escDisabled: false,
      backdropDisabled: true,
      animation: "fade-out",
      callback: function () {
        setDialogConfig(null);
      },
    },
    accept: {
      text: "Accept",
      callback: function (closefn) {
        closefn && closefn();
      },
      icon: "fa fa-tick",
    },
    reject: {
      text: "Reject",
      icon: "fa fa-close",
      callback: function (closefn) {
        closefn && closefn();
      },
    },
  };
  return (
    <>
      <footer className={classes.footer}>
        <Copyright />
        <Typography variant="body1" className={classes.main}>
          {/* {whyWeBuilt} */}
        </Typography>
        {DynamicLoader(Button, {
          variant: "contained",
          color: "primary",
          className: classes.button,
          endIcon: DynamicLoader(BugReport),
          onClick: () => {
            setDialogConfig(bugReportDialogConfig);
          },
          children: `Report A Bug`,
        })}
        <ScrollTop {...props} style={{backgroundColor: "black"}}>
          {DynamicLoader(Fab, {
            
            size: "small",
            "aria-label": "scroll back to top",
            children: DynamicLoader(ArrowUpIcon),
          })}
        </ScrollTop>
        <section>

          <div className={classes.quickLinks}>
          <h4  className={classes.quickItem} style={{textAlign: "center"}}>Quick Links</h4>
          
            <div className={classes.quickLinkContainer}>
              <Typography>
                <Link className={classes.quickItem} href="/">
                  Home
                </Link>
              </Typography>
              <Typography>
                <Link className={classes.quickItem} href="/ds/About">
                  About
                </Link>
              </Typography>

              <Typography>
                <Link className={classes.quickItem} href="/ds/Committee">
                  Committee
                </Link>
              </Typography>
            </div>

            <div className={classes.quickLinkContainer}>
              <Typography>
                <Link className={classes.quickItem} href="/ds/CallForPatents">
                  Call For Patents
                </Link>
              </Typography>
              <Typography>
                <Link className={classes.quickItem} href="/#publicationPartner">
                  Publications
                </Link>
              </Typography>
            </div>
            <div className={classes.quickLinkContainer}>
              <Typography>
                <Link className={classes.quickItem} href="/ds/ConferenceVenue">
                  Conference Venue
                </Link>
              </Typography>

              <Typography>
                <Link className={classes.quickItem} href="/ds/Downloads">
                  Downloads
                </Link>
              </Typography>

              <Typography>
                <Link className={classes.quickItem} href="/ds/Registration">
                  Registrations
                </Link>
              </Typography>
            
             
            </div>
            <div className={classes.quickLinkContainer} >
             <Link  target="_blank" className={classes.quickItem}  href="https://www.facebook.com/iciip.patent/?__cft__[0]=AZXDu6swe_Otne1zltwxPBvCohl-bJQund3xfrhvdY0PexRJK5Nsk9EyRBDuqbiOZnpReAVPHDbG7LdwPXvQkMfN1Bj72AtsqEs5lwCKpEcMZ0L9rfP3rCaGJrkSpYHwqu7yCXzSxOq8FKV8-P6enuxF&__tn__=H-R">
             <Facebook />
             </Link>
             <span  className={classes.quickItem} >  <Email/> : iciip.patent@gmail.com </span>
             
              </div>
          </div>
        </section>
      </footer>
      {DynamicLoader(LightBox, {
        dialogConfig: dialogConfig,
      })}
    </>
  );
}
