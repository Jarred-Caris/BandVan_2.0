import React, {useState} from "react";
import {TextField, Button, Typography, Paper} from '@material-ui/core'
import FileBase from 'react-file-base64'
import useStyles from './styles'
// import InputGroup from "react-bootstrap/InputGroup";
// import FormControl from "react-bootstrap/FormControl";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

const Form = () => {
  const classes = useStyles();
    const [postData, setPostData]= useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile:"", 

    });

    const handleSubmit = () => {
        
    }

    
    const clear = () => {
        
    }

  return (
    <container>
  <Paper className ={Paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h6">Ready to Jam</Typography>
          <div>
          <TextField name ="creator" variant="outlined" label="Creator" fullwidth value={postData.creator} onchange={(e) => setPostData({...postData, creator: e.target.value})}/>
          <TextField name ="title" variant="outlined" label="Title" fullwidth value={postData.title} onchange={(e) => setPostData({...postData, title: e.target.value})}/>
          <TextField name ="message" variant="outlined" label="Message" fullwidth value={postData.message} onchange={(e) => setPostData({...postData, message: e.target.value})}/>
          <TextField name ="tags" variant="outlined" label="Tags" fullwidth value={postData.tags} onchange={(e) => setPostData({...postData, tags: e.target.value})}/>
          <div className={classes.fileInput}>
              <FileBase 
                 type="file"
                 multiple={false}
                 onDone={(base64) => setPostData({ ...postData, selectedFile: base64})} 
                 />
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="medium" type="submit" fullWidth>Submit</Button>
          <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
          </div>
          </div>
      </form>
  </Paper>
{/* <Row>
    <Col>
    <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Creator</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder={"Username"}
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </Col>
    <Col>
    <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Title of post"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      </Col>
  </Row>
      
  
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>Post</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl as="textarea" aria-label="With textarea" />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Tag instrument and City</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="This will allow users to search for you"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup> */}
    </container>
  );
};

export default Form;
