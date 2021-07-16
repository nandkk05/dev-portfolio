import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, IconButton, Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import SortIcon from "@material-ui/icons/Sort";
import ProfileCard from "./ProfileCard";
import clsx from "clsx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

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
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root} id="hero">
      <Container>
        <AppBar className={classes.appbar} elevation={0}>
          <Container className={classes.appbarWrapper}>
            <h1 className={classes.appbarTitle}>Nand</h1>
            <IconButton>
              <div>
                {["right"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <SortIcon
                      className={classes.icon}
                      onClick={toggleDrawer(anchor, true)}
                    />
                    <SwipeableDrawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                      onOpen={toggleDrawer(anchor, true)}
                    >
                      {list(anchor)}
                    </SwipeableDrawer>
                  </React.Fragment>
                ))}
              </div>
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
