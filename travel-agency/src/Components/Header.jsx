import React, { useState, useEffect } from "react";
import axios from 'axios';

import {
  Container, Grid, CardHeader, Typography
} from "@material-ui/core"

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    dashboardContainer: {
      width: '100%',
      marginTop: theme.spacing(2),
    },
    pageTitle: {
      display: "flex",
      fontWeight: "bold",
      flexDirection: "column",
      justifyContent: "center"
    },
  }));

function Header({title}) {

  const [count, updateCount] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    axios('/api/quotes/count')
      .then(res => {
        updateCount(res.data.count)
      })
  }, []);

  return (
    <Container className={classes.dashboardContainer}>
      <Grid container>
        <Grid className={classes.pageTitle} xs={6}>
          <Typography variant="h3" color="primary" align="center">
            {title}
          </Typography>
        </Grid>
        <Grid xs={2}>
          <CardHeader
            style={{textAlign: "center"}}
            title={count}
            subheader={`New Quote${count != 1 ? "s" : ""}`}
          />
        </Grid>
        <Grid xs={2}>
          <CardHeader
            style={{textAlign: "center"}}
            title={"13"}
            subheader={"New Leads"}
          />
        </Grid>
        <Grid xs={2}>
          <CardHeader
            style={{textAlign: "center"}}
            title={"4"}
            subheader={"Weekly Closes"}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Header;