import {
  Container, Grid, Paper
} from "@material-ui/core"

import QuoteTableCard from "../Components/QuoteTableCard"
import QuickQuoteCard from "../Components/QuickQuoteCard"
import LeadFeedCard from "../Components/LeadFeedCard"
import Header from "../Components/Header"

function Dashboard() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header title={"Dashboard"}/>
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
      </Grid>
    </Container>
  );
}

export default Dashboard;