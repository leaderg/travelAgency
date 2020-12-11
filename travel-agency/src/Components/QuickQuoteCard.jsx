import React, { useState } from "react";

import { makeStyles } from '@material-ui/core/styles';

import { Button, TextField, Grid, MenuItem, InputLabel, Select, FormControl, Card, CardHeader, IconButton, Divider
} from "@material-ui/core"

import {
  OpenWith, Send
} from "@material-ui/icons"

//Date Frameworks
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function QuickQuoteCard() {
  const classes = useStyles();
  const [selectedDate, setDate] = useState(moment());
  const [inputValue, setInputValue] = useState(moment().format("YYYY-MM-DD"));

  const handleDateChange = (date, value) => {
    setDate(date);
    setInputValue(value);
  };

  return (
    <Card>
      <CardHeader
        title="Quick Quote"
        avatar={<Send />}
        action={
          <IconButton aria-label="Quotes">
            <OpenWith />
          </IconButton>
      }/>
      <Divider/>
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <InputLabel>Departure Date</InputLabel>
            <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
              <KeyboardDatePicker
                showTodayButton={false}
                format="MM/DD/YYYY"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={6}>
            <InputLabel>Return Date</InputLabel>
            <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
              <KeyboardDatePicker
                showTodayButton={false}
                format="MM/DD/YYYY"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              name="from"
              variant="outlined"
              required
              fullWidth
              label="From"
              autoFocus
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Destination"
              name="destination"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="name"
              label="Name"
              type="name"
              id="name"
              autoComplete="name"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="email"
              label="Email"
              type="email"
              id="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
            <InputLabel id="travellers-label">Number of Travellers</InputLabel>
            <Select
            label="travellers"
              labelId="travellers-label"
              xs={12}
            >
              {/*value={age}
              onChange={handleChange}*/}
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
            <InputLabel id="transportation-label">Transportation</InputLabel>
            <Select
            label="Transportation"
              labelId="transportation-label"
              xs={12}
            >
              {/*value={age}
              onChange={handleChange}*/}
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"rental"}>Rental Car</MenuItem>
              <MenuItem value={"bus"}>Bus</MenuItem>
              <MenuItem value={"taxi"}>Taxi</MenuItem>
              <MenuItem value={"limosine"}>Limosine</MenuItem>
            </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Submit Quote
        </Button>
      </form>
    </Card>
  );
}

export default QuickQuoteCard;