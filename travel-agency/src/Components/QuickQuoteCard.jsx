import React, { useState } from "react";
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';

import {
  Button,
  TextField,
  Grid,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
  Card,
  CardHeader,
  IconButton,
  Divider
} from "@material-ui/core"

import { OpenWith, Send } from "@material-ui/icons"

//Date Frameworks
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";


//Material UI Styling
const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

//React Functional Component with React Hooks

function QuickQuoteCard() {
  const classes = useStyles();

  const [client_name, setName] = useState('');
  const [client_email, setEmail] = useState('');
  const [point_of_departure, setDeparture] = useState('');
  const [point_of_destination, setDestination] = useState('');
  const [number_of_passengers, setPassengers] = useState(1);
  const [transportation, setTransportation] = useState('rental')
  const [departure_date, setDepartureDate] = useState(moment().format('YYYY-MM-DDTHH:mm:ssZ'));
  const [return_date, setReturnDate] = useState(moment().format('YYYY-MM-DDTHH:mm:ssZ'));

  //MUI Datepicker have a special onChange with two values.
  const [inputDepartureDate, setDepartureInputDate] = useState(moment().format("DD-MM-YYYY"));
  const [inputReturnDate, setReturnInputDate] = useState(moment().format("DD-MM-YYYY"));

  const handleDepartureDateChange = (date, value) => {
    setDepartureDate(moment(date).format('YYYY-MM-DDTHH:mm:ssZ'));
    setDepartureInputDate(value);
  };

  const handleReturnDateChange = (date, value) => {
    setReturnDate(moment(date).format('YYYY-MM-DDTHH:mm:ssZ'));
    setReturnInputDate(value);
  };

  const handleDepartureChange = ( e ) => {
    setDeparture(e.target.value);
  }

  const handleDestinationChange = ( e ) => {
    setDestination(e.target.value);
  }

  const handleNameChange = ( e ) => {
    setName(e.target.value);
  }

  const handleEmailChange = ( e ) => {
    setEmail(e.target.value);
  }

  const handlePassengerChange = ( e ) => {
    setPassengers(e.target.value);
  }

  const handleTransportationChange = ( e ) => {
    setTransportation(e.target.value);
  }

  const handleSubmit = ( e ) => {
    e.preventDefault();
    axios
    .post(`/api/quotes/quick`, {
      client_name,
      client_email,
      point_of_departure,
      point_of_destination,
      number_of_passengers,
      transportation,
      departure_date,
      return_date
     })
    .then(res => {

    })
  }

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
      <form className={classes.form} onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <InputLabel>Departure Date</InputLabel>
            <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
              <KeyboardDatePicker
                showTodayButton={true}
                format="MM/DD/YYYY"
                value={inputDepartureDate}
                onChange={handleDepartureDateChange}
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
                value={inputReturnDate}
                onChange={handleReturnDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              name="Departure City"
              variant="outlined"
              required
              fullWidth
              label="Departure City"
              autoFocus
              onChange={handleDepartureChange}
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Destination City"
              name="destination"
              onChange={handleDestinationChange}
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
              onChange={handleNameChange}
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
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
            <InputLabel id="travellers-label">Number of Travellers</InputLabel>
            <Select
              label="travellers"
              labelId="travellers-label"
              xs={12}
              defaultValue={1}
              onChange={handlePassengerChange}
            >
              {/*value={age}
              onChange={handleChange}*/}
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
              defaultValue={"rental"}
              onChange={handleTransportationChange}
            >
              {/*value={age}
              onChange={handleChange}*/}

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