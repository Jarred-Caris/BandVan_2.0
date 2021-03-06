import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";

import { createPost, updatePost } from "../../actions/posts";


const Form = ({currentId, setCurrentId}) => {
  
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const classes = useStyles();
  const dispatch = useDispatch();

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if(post) setPostData(post);
}, [post])



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle")
    dispatch(createPost({ ...postData, name: user?.result?.name }));
    

    clear();
    
  };

  
  const clear = () => {
    setCurrentId(null);
    setPostData({creator: '', title: '', message: '', tags: '', selectedFile: ''})
}

  return (
    
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h4" align="left">
          Ready to Jam
        </Typography>

        <Typography variant="body2" color="textprimary">
          Hello fellow musicians. Use this feature to create posts to organise a
          Jam, sell musical instruments or offer tutoring lessons. Enter
          location and key words in tag section to allow other users to find you
          easier.
        </Typography>

        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Post"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
    
  );
};

export default Form;