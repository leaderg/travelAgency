import {
  Table, TableHead, TableBody, TableRow,TableCell, Card, CardHeader, CardContent, IconButton, Divider
} from "@material-ui/core"

import {
  OpenWith, History, Replay
} from "@material-ui/icons"

function QuoteTableCard() {
  const data = [
    {id: 1, name: "Customer1", destination: "YYZ", price: 1023.21},
    {id: 2, name: "Customer2", destination: "YEG", price: 1023.21},
    {id: 3, name: "Customer3", destination: "YYC", price: 1023.21},
    {id: 4, name: "Customer4", destination: "YYC", price: 1023.21},
    {id: 5, name: "Customer5", destination: "YYZ", price: 1023.21},
  ]

  return (
    <Card>
      <CardHeader
        title="Pending Quotes"
        avatar={<History />}
        action={
          <>
          <IconButton aria-label="Quotes">
            <Replay />
          </IconButton>
          <IconButton aria-label="Quotes">
            <OpenWith />
          </IconButton>
          </>
      }/>
      <Divider/>
      <CardContent>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Destination</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(row => (
            <TableRow>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.destination}</TableCell>
              <TableCell>${row.price}</TableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default QuoteTableCard;