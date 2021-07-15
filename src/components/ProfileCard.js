import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {},
  image: {
    borderRadius: "16px",
    [theme.breakpoints.down("md")]: {
      height: "300px",
    },
  },
  align: {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "left",
    marginTop: "2rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  textArea: {
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: 1.6,
    maxWidth: "600px",
    [theme.breakpoints.down("md")]: {
      fontWeight: 500,
      lineHeight: 1.4,
      fontSize: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      fontWeight: 500,
      lineHeight: 1.4,
      fontSize: "18px",
      marginBottom: "2rem",
    },
  },
}));

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className={classes.align}>
      <Typography className={classes.textArea}>
        Hello! My name is Nand Kishor and I enjoy creating things that live on
        the internet. My interest in web development started back in 2017 when I
        decided to try editing custom Wordpress themes using Elementor which
        turns out hacking together a custom reblog button taught me a lot about
        HTML & CSS! <br />
        <br />
        My main focus these days is building accessible, inclusive products and
        digital experiences for a variety of clients.
      </Typography>
      <div className={classes.root}>
        <img
          alt="me"
          className={classes.image}
          src="https://avatars.githubusercontent.com/u/33036554?v=4"
        />
      </div>
    </div>
  );
}
