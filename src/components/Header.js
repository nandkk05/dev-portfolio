import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Container, IconButton } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import clsx from "clsx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import WorkTwoToneIcon from "@material-ui/icons/WorkTwoTone";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
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
  menuIcon: {
    color: "white",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "2rem",
    },
  },
  mobileNav: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  desktopNav: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

const Header = (props) => {
  const { history } = props;
  const classes = useStyles();
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

  const itemsList = [
    {
      text: "Workspace",
      icon: <WorkTwoToneIcon />,
      onClick: () => history.push("/workspace"),
    },
    {
      text: "About",
      icon: <InfoTwoToneIcon />,
      onClick: () => history.push("/about"),
    },
  ];

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
        {itemsList.map((item) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={item} onClick={onClick}>
              {icon && (
                <ListItemIcon className={classes.menuIcon}>{icon}</ListItemIcon>
              )}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  const [value, setValue] = useState("/");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(newValue);
  };

  return (
    <>
      <div className={classes.root}>
        <Container>
          <AppBar className={classes.appbar} elevation={0}>
            <Container className={classes.appbarWrapper}>
              <div className="flex items-center text-teal">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 my-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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
                </Link>
                <h1 className="ml-2 text-xl font-semibold text-white">Nand</h1>
              </div>

              <IconButton className={classes.mobileNav}>
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
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="#fff"
                className={classes.desktopNav}
              >
                <Tab label="Workspace" value="/workspace" />
                <Tab label="About" value="/about" />
              </Tabs>
            </Container>
          </AppBar>
        </Container>
      </div>
    </>
  );
};

export default withRouter(Header);
