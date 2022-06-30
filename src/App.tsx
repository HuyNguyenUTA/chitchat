import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import {createUseStyles} from 'react-jss';
import Input from '../src/components/Input';
const useStyles = createUseStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px"
  },
  appName: {
    color: "#A27B5C"
  },
  textfield: {
    color: "white"
  }
})


function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography variant='h2' align='center' className={classes.appName}>Chit Chat</Typography>
      <TextField id="Name" label="Name" variant="outlined" className={classes.textfield}>
        <Input />
      </TextField>
      <TextField id="Room ID" label="Room ID" variant="outlined" className={classes.textfield}>
        <Input />
      </TextField>
      <Button variant="contained">Enter</Button>
    </div>
  );
}

export default App;
