import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, IconButton, Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import SortIcon from "@material-ui/icons/Sort";
import ProfileCard from "./ProfileCard";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    flexGrow: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
  },
  appbar: {
    background: "none",
  },
  appbarTitle: {
    flexGrow: 1,
    color: "black",
    fontSize: "22px",
    fontWeight: "bold",
  },
  icon: {
    color: "black",
    fontSize: "2rem",
  },
  appbarWrapper: {
    display: "flex",
  },
  head: {
    fontWeight: 600,
    marginBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "12rem",
    },
  },
}));

function Hero() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="hero">
      <Container>
        <AppBar className={classes.appbar} elevation={0}>
          <Container className={classes.appbarWrapper}>
            <h1 className={classes.appbarTitle}>Nand</h1>
            <IconButton>
              <SortIcon className={classes.icon} />
            </IconButton>
          </Container>
        </AppBar>
        <Typography className={classes.head} variant="h4">
          About Me
        </Typography>
        <ProfileCard className={classes.ProfileCard} />
      </Container>
    </div>
  );
}

export default Hero;
