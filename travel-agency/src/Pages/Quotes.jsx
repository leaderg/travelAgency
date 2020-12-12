import {
  Container, Grid, Paper
} from "@material-ui/core"

import QuoteTableCard from "../Components/QuoteTableCard"
import QuickQuoteCard from "../Components/QuickQuoteCard"

import DetailedQuotesTable from "../Components/DetailedQuotesTable"

function Quotes() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper>Welcome To Quotes</Paper>
        </Grid>
        <Grid item xs={12}>
          <DetailedQuotesTable />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Quotes;