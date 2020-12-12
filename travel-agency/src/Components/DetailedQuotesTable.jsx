import React, { useState, useEffect } from "react";
import axios from 'axios';
import moment from 'moment';

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  TablePagination,
  IconButton,
  Card,
  CardHeader,
  Divider
} from "@material-ui/core";

import {
  TableChart,
  Replay
} from "@material-ui/icons";

function DetailedQuotesTable() {

  const [list, updateList] = useState([]);
  const [page, updatePage] = useState(0);
  const [rowsPerPage, updateRowsPerPage] = useState(10)

  useEffect(() => {
    axios('/api/quotes')
      .then(res => {
        updateList(res.data)
      })
  }, []);

  const handleChangePage = (e, page) => {
    updatePage(page);
  };

  const handleChangeRowsPerPage = e => {
    updatePage(0);
    updateRowsPerPage(e.target.value)
  };

  const getListUpdates = () => {
    axios('/api/quotes')
      .then(res => {
        updateList(res.data)
      })
  }


  return (
      <Card>
        <CardHeader
          title="Quotes"
          avatar={<TableChart />}
          action={
            <IconButton aria-label="Quotes">
              <Replay onClick={getListUpdates}/>
            </IconButton>
        }/>
        <Divider/>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Client Name</TableCell>
              <TableCell>Client Email</TableCell>
              <TableCell>Departure</TableCell>
              <TableCell>Destination</TableCell>
              <TableCell>Departure Date</TableCell>
              <TableCell>Return Date</TableCell>
              <TableCell>Transportation</TableCell>
              <TableCell>Passengers</TableCell>
              <TableCell>Company Contact</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { list.length !== 0 ?
              list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => (
            <TableRow>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.client_name}</TableCell>
              <TableCell>{row.client_email}</TableCell>
              <TableCell>{row.point_of_departure}</TableCell>
              <TableCell>{row.point_of_destination}</TableCell>
              <TableCell>{moment(row.departure_date).format("DD-MM-YYYY")}</TableCell>
              <TableCell>{moment(row.return_date).format("DD-MM-YYYY")}</TableCell>
              <TableCell>{row.transportation}</TableCell>
              <TableCell>{row.number_of_passengers}</TableCell>
              <TableCell>{row.company_contact}</TableCell>
            </TableRow>
            )) : null}
          </TableBody>
          <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  colSpan={3}
                  count={list.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    native: true,
                  }}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
        </Table>
      </Card>
  );
}

export default DetailedQuotesTable;