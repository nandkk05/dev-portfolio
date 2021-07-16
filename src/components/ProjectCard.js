import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container, IconButton } from "@material-ui/core";
import { projects } from "../data/userData";
import CallMadeIcon from "@material-ui/icons/CallMade";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  main: {
    marginBottom: "8rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "12rem",
    },
  },
  media: {
    height: 140,
  },
  heading: {
    fontWeight: 600,
    marginBottom: "2rem",
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gridColumnGap: "50px",
    gridRowGap: "50px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
}));

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Container className={classes.main}>
      <Typography className={classes.heading} variant="h4">
        Projects
      </Typography>
      <div className={classes.cards}>
        {projects.map((project) => (
          <Card className={classes.root} elevation={1}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={project.image}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {project.desc}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                GitHub{" "}
                <IconButton>
                  <CallMadeIcon fontSize="small" color="primary" />{" "}
                </IconButton>
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </Container>
  );
}
