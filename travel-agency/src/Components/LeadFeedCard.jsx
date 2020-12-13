import {
  Card, CardHeader, CardContent, IconButton, Divider, List, ListItem, Avatar, ListItemText, ListItemSecondaryAction, ListItemAvatar
} from "@material-ui/core"

import {
  OpenWith, MailOutline, Replay
} from "@material-ui/icons"

const Fakerator = require('fakerator');
const fakerator = Fakerator();
let data = [
    {avatar: fakerator.internet.gravatar(), name: fakerator.names.name(), message: fakerator.populate("Hi, I'm looking for a trip for 2 to #{address.city}!") },
    {avatar: fakerator.internet.gravatar(), name: fakerator.names.name(), message: fakerator.populate("Hi, I'm looking for a trip for 2 to #{address.city}!") },
    {avatar: fakerator.internet.gravatar(), name: fakerator.names.name(), message: fakerator.populate("Hi, I'm looking for a trip for 2 to #{address.city}!") },
  ]

function LeadFeedCard() {

  return (
    <Card style={{height: "100%"}}>
      <CardHeader
        title="New Leads"
        avatar={<MailOutline />}
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
      <List>
        { data.map(entry => (
        <ListItem>
          <ListItemAvatar>
            <Avatar src={entry.avatar}/>
          </ListItemAvatar>
          <ListItemText primary={entry.name} secondary={entry.message}/>
          <ListItemSecondaryAction>
            <ListItemText secondary="2m" />
          </ListItemSecondaryAction>
        </ListItem>
      ))}
      </List>
      </CardContent>
    </Card>
  );
}

export default LeadFeedCard;