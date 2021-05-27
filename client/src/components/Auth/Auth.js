import React from "react";
import {
  Container,
  Grid,
  Typography,
  Avatar,
  Paper,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";


const Auth = () => {
  const classes = useStyles();
  const isSignup = false

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
      </Paper>
    </Container>
  );
};

export default Auth;
