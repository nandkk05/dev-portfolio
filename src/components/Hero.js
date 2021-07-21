import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, IconButton } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
    backgroundColor: "#00071c",
    padding: "2rem",
    fontFamily: "Manrope",
  },
  goDown: {
    color: "white",
  },
  scrollText: {
    color: "white",
    fontSize: "12px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "16px",
    },
  },
  scroller: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "end",
    bottom: "2rem",
    left: "2rem",
    [theme.breakpoints.up("sm")]: {
      left: "2.5rem",
    },
    [theme.breakpoints.up("lg")]: {
      left: "5rem",
    },
  },
  appbarTitle: {
    opacity: 0,
  },
}));

export default function Hero() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root}>
      <Container>
        <Collapse
          in={checked}
          {...(checked ? { timeout: 1000 } : {})}
          collapsedHeight={50}
        >
          <h1 className="text-white text-4xl sm:text-6xl font-semibold tracking-wide">
            <h3 className="text-lg text-teal leading-loose">
              Hi, I'm Nand Kishor
            </h3>
            <span className="leading-snug">I build things for Web</span> <br />
            <span className="text-gray-500 leading-tight">
              Currently building{" "}
              <span id="devColony" className="hover:text-teal">
                Dev Colony
              </span>{" "}
              for democratizing mentorships for everyone.
            </span>
          </h1>
          <div className={classes.scroller}>
            <Scroll to="hero" smooth={true}>
              <IconButton>
                <ExpandMoreIcon fontSize="small" className={classes.goDown} />
              </IconButton>
              <span className={classes.scrollText}>scroll</span>
            </Scroll>
          </div>
        </Collapse>
      </Container>
    </div>
  );
}
