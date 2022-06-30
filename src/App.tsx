import React, {useState} from 'react';
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
  }
})

const App: React.FC = () =>{
  const classes = useStyles()
  const [state, setState] = useState<String | Number>("");

  const handleState = () => {
    onchange = () => {
      setState("")
    } 
  }

  return (
    <div className={classes.root}>
      <Typography variant='h2' align='center' className={classes.appName}>Chit Chat</Typography>
      <TextField id="Name" label="Name" variant="outlined">
        <Input state={state} setState={setState} handleState={handleState} />
      </TextField>
      <TextField id="Room ID" label="Room ID" variant="outlined">
        <Input state={state} setState={setState} handleState={handleState}/>
      </TextField>
      <Button variant="contained">Enter</Button>
    </div>
  );
}

export default App;
