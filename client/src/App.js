import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, AppBar, Grow, Grid, makeStyles } from '@material-ui/core';
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import "./";
import {getPosts}from "./actions/posts"
import useStyles from './styles'
import logo from "./components/assets/logo.PNG"




const App = () => {
  const {currentId, setCurrentId} = useState(null);
    const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container >
    <AppBar className={classes.appBar} position="static" color="secondary">
      
      <img className={classes.image} src={logo} alt="icon" height="150" />
    </AppBar>
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={4}>
          <Form currentId={currentId} setCurrentId={setCurrentId}/>
          </Grid>
          <Grid item xs={12} sm={7}>
          <Posts setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  </Container>
  );
};

export default App;
