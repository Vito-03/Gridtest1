import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(5),
    marginTop: theme.spacing(5),
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
    backgroundColor: "#098494",
  },
  paper2: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
    backgroundColor: "#ff00ff",
  },
  paper3: {
    padding: theme.spacing(8),
    textAlign: "left",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
    backgroundColor: "#adf4f6",
  },
  control: {
    padding: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(2, 4),
  },
}));

export default function GridLayout() {
  const classes = useStyles();

  return (
    <Grid container direction="row" spacing={4}>
      <Grid item xs={4}>
        <Paper className={classes.paper}>1</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>2</Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper className={classes.paper}>3</Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper className={classes.paper}>4</Paper>
      </Grid>
      <Grid container direction="row" spacing={10}>
        <Grid item xs={6}>
          <Paper className={classes.paper2}>5</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper2}>6</Paper>
        </Grid>
      </Grid>
      <Grid container direction="row" spacing={10}>
        <Grid item xs={8}>
          <Paper className={classes.paper3}>7</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper3}>8</Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}
