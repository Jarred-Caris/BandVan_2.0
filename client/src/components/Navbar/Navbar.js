import React from "react";
import { AppBar, Avatar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import logo from "../assets/logo.PNG";
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const Navbar = () => {
  const classes = useStyles();
  const user = null;
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#212121',
      },
      secondary: {
        main: '#f44336',
      },
    },
  });
  return (
    <div className={classes.brandContainer}>
      <MuiThemeProvider theme={theme}>
      <AppBar className={classes.appBar} position="static" color="primary">
        <img className={classes.image} src={logo} alt="icon" height="150" />
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          
        </Typography>
        <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
            className={classes.login}
          >
            Sign In
          </Button>
        )}
      </Toolbar>
      </AppBar>
      </MuiThemeProvider>
    </div>
  );
};

export default Navbar;
