import * as React from "react"
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  Drawer,
  MenuItem,
  MenuList,
  ListItemText,
  Divider,
  ListItemIcon
} from "@material-ui/core"

import {
  Menu,
  Notifications,
  Chat,
  Settings,
  Person,
  ArrowBack,
  Home,
  AttachMoney,
  PlaylistAdd,
  FlightTakeoff,
  Description,
  Equalizer,
  Group,
  SettingsApplications,
  ContactSupport
} from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 185,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }
}));

const Navigation = () => {
  const classes = useStyles();
  const [open, sidebarOpen] = React.useState(false);

  const handleSidebarOpen = () => {
    sidebarOpen(true);
  };
  const handleSidebarClose = () => {
    sidebarOpen(false);
  };

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Grid container>
            <Grid item xs={10}>
              <IconButton onClick={handleSidebarOpen} edge="start" color="inherit" aria-label="home">
                <Menu fontSize="large" />
              </IconButton>
            </Grid>
            <Grid item xs={2}>
              <IconButton edge="end" color="inherit" aria-label="home">
                <Notifications fontSize="large" />
              </IconButton>
              <IconButton edge="end" color="inherit" aria-label="home">
                <Chat fontSize="large" />
              </IconButton>
              <IconButton edge="end" color="inherit" aria-label="home">
                <Settings fontSize="large" />
              </IconButton>
              <IconButton edge="end" color="inherit" aria-label="home">
                <Person fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        onBackdropClick={handleSidebarClose}
        classes={{
          paper: classes.drawerPaper
        }
      }>
        <MenuList>
          <MenuItem onClick={handleSidebarClose}>
            <IconButton>
              <ArrowBack />
            </IconButton>
          </MenuItem>
          <Link to="/">
            <MenuItem onClick={handleSidebarClose}>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary={'Home'} />
            </MenuItem>
          </Link>
          <Link to="/quotes">
            <MenuItem onClick={handleSidebarClose}>
              <ListItemIcon>
                <AttachMoney />
              </ListItemIcon>
              <ListItemText primary={'Quotes'} />
            </MenuItem>
          </Link>
          <MenuItem>
            <ListItemIcon>
              <PlaylistAdd />
            </ListItemIcon>
            <ListItemText primary={'Leads'} />
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <FlightTakeoff />
            </ListItemIcon>
            <ListItemText primary={'Tours'} />
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <Description />
            </ListItemIcon>
            <ListItemText primary={'Invoices'} />
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Equalizer />
            </ListItemIcon>
            <ListItemText primary={'Analytics'} />
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary={'Teams'} />
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <SettingsApplications />
            </ListItemIcon>
            <ListItemText primary={'Admin'} />
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ContactSupport />
            </ListItemIcon>
            <ListItemText primary={'Support'} />
          </MenuItem>

        </MenuList>
      </Drawer>
    </React.Fragment>
  )
}

export default Navigation