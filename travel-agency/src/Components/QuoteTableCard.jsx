import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Divider,
  Box,
  LinearProgress
} from "@material-ui/core"

import {
  OpenWith,
  History,
  Replay
} from "@material-ui/icons"

//Component Class Using Standard setState()

class QuoteTableCard extends Component {

 constructor(props) {
    super(props);
    this.state =
    {
      loading: true,
      list: []
    }
  }

  getList = () => {
    this.setState({ loading: true }, () => {
    axios
      .get(`/api/quotes/latest`)
      .then(res => {
        const list = res.data;
        this.setState({ loading: false, list });
      })
    })
  }

  componentDidMount() {
    this.getList();
  }

  render() {
  return (
    <Card style={{height: "100%"}}>
      <CardHeader
        title="Latest Quotes"
        avatar={<History />}
        action={
          <>
            <IconButton aria-label="Quotes" >
              <Replay onClick={this.getList} />
            </IconButton>
            <Link to="/quotes">
              <IconButton aria-label="Quotes">
                <OpenWith />
              </IconButton>
            </Link>
          </>
        }
      />
      <Divider/>
      <CardContent>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Departure</TableCell>
              <TableCell>Destination</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.list.map(row => (
            <TableRow>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.client_name}</TableCell>
              <TableCell>{row.point_of_departure}</TableCell>
              <TableCell>{row.point_of_destination}</TableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );}
}

export default QuoteTableCard;