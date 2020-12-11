import {
  Container, Grid, Paper
} from "@material-ui/core"

import QuoteTableCard from "../Components/QuoteTableCard"
import QuickQuoteCard from "../Components/QuickQuoteCard"
import LeadFeedCard from "../Components/LeadFeedCard"

function Home() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper>Welcome To Dashboard</Paper>
        </Grid>
        <Grid item xs={4}>
          <QuickQuoteCard />
        </Grid>
        <Grid item xs={4}>
          <QuoteTableCard />
        </Grid>
        <Grid item xs={4}>
          <LeadFeedCard />
        </Grid>
        <Grid item xs={9}>
          <Paper>Map</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>Team Chat</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>Sales</Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper>Pie Charts</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>Pie Chart 2</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;