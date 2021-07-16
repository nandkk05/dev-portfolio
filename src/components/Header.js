import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, IconButton, Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import SortIcon from "@material-ui/icons/Sort";
import clsx from "clsx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import projects from "../components/ProjectCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
  },
  appbar: {
    background: "#00071c",
  },
  appbarTitle: {
    flexGrow: 1,
    color: "white",
    fontSize: "22px",
    fontWeight: "bold",
  },
  icon: {
    color: "white",
    fontSize: "2rem",
  },
  appbarWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
  head: {
    fontWeight: 600,
    marginBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "12rem",
    },
  },
  list: {
    background: "#00071c",
    color: "white",
  },
}));

function Hero() {
  const classes = useStyles();
  const [component, setComponent] = useState("");
  const [state, setState] = React.useState({
    bottom: false,
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
        {["Projects", "About"].map((text, index) => (
          <ListItem button key={text} onClick={() => setComponent(projects)}>
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
    <div className={classes.root}>
      <Container>
        <AppBar className={classes.appbar} elevation={0}>
          <Container className={classes.appbarWrapper}>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="orange"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                />
              </svg>
              <h1 className="ml-2 text-xl font-semibold">Nand</h1>
            </div>

            <IconButton>
              <div>
                {["bottom"].map((anchor) => (
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
      </Container>
    </div>
  );
}

export default Hero;
