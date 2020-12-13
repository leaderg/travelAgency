import React, { useState } from "react";
import { Link } from 'react-router-dom';
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
  Divider,
  Snackbar
} from "@material-ui/core"

import { OpenWith, Send, Close } from "@material-ui/icons"

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
    width: '95%',
    marginTop: theme.spacing(3),
    padding: theme.spacing(0, 1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}));

//React Functional Component with React Hooks

function QuickQuoteCard() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  //Form State Handling
  const [client_name, setName] = useState(undefined);
  const [client_email, setEmail] = useState(undefined);
  const [point_of_departure, setDeparture] = useState(undefined);
  const [point_of_destination, setDestination] = useState(undefined);
  const [number_of_passengers, setPassengers] = useState(1);
  const [transportation, setTransportation] = useState('Rental Car')
  const [departure_date, setDepartureDate] = useState(moment().format('YYYY-MM-DDTHH:mm:ssZ'));
  const [return_date, setReturnDate] = useState(moment().format('YYYY-MM-DDTHH:mm:ssZ'));

  const [inputDepartureDate, setDepartureInputDate] = useState(moment().format("MM-DD-YYYY"));
  const [inputReturnDate, setReturnInputDate] = useState(moment().format("MM-DD-YYYY"));

  const resetForm = () => {
    setName('');
    setEmail('');
    setDeparture('');
    setDestination('');
    setPassengers(1);
    setTransportation('Rental Car');
    setDepartureDate(moment().format('YYYY-MM-DDTHH:mm:ssZ'));
    setReturnDate(moment().format('YYYY-MM-DDTHH:mm:ssZ'));
    setDepartureInputDate(moment().format("MM-DD-YYYY"));
    setReturnInputDate(moment().format("MM-DD-YYYY"));
  }

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
      resetForm();
      setOpen(true);
    })
    .catch(err => {
      return;
    })
  }

  return (
    <>
    <Card style={{height: "100%"}}>
      <CardHeader
        title="Quick Quote"
        avatar={<Send />}
        action={
          <Link to='/quotes'>
            <IconButton aria-label="Quotes">
              <OpenWith />
            </IconButton>
          </Link>
        }
      />
      <Divider/>
      <form className={classes.form} onSubmit={handleSubmit}>
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
              value={point_of_departure}
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
              value={point_of_destination}
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
              value={client_name}
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
              value={client_email}
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
              value={number_of_passengers}
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
              defaultValue={"Rental Car"}
              value={transportation}
              onChange={handleTransportationChange}
            >
              <MenuItem value={"Rental Car"}>Rental Car</MenuItem>
              <MenuItem value={"Bus"}>Bus</MenuItem>
              <MenuItem value={"Taxi"}>Taxi</MenuItem>
              <MenuItem value={"Limosine"}>Limosine</MenuItem>
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
    <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Quote created."
        action={
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <Close fontSize="small" />
            </IconButton>
        }
    />
    </>
  );
}

export default QuickQuoteCard;