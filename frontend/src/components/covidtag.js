import React from "react";

import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import red from "@material-ui/core/colors/red";
import yellow from "@material-ui/core/colors/yellow";
import green from "@material-ui/core/colors/green";
import grey from "@material-ui/core/colors/grey";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: theme.spacing(1.5)
  },
  high: { color: red[500] },
  medium: { color: yellow[500] },
  low: { color: green[500] },
  neutral: { color: grey[500] }
}));

function CovidTag(props) {
  const { category, value } = props;
  const classes = useStyles();

  return (
    <Paper
      classes={{
        root: { ...classes.root, ...classes.medium }
      }}
    >
      <h4>{category}</h4>
      <h3>{value}</h3>
    </Paper>
  );
}

export default CovidTag;
