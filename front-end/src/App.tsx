import React, {useState} from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import {createUseStyles} from 'react-jss';
import Input from '../src/components/Input';
import io from 'socket.io-client'

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
  const [state, setState] = useState("");

  const socket = io('http://localhost:3001', { transports : ['websocket'] })

  socket.on("connection", () => {})

  const sendMessage = () => {
    socket.emit("message", setState("set state"))
    socket.emit("message", "Room created!")
  }
  return (
    <div className={classes.root}>
      <Typography variant='h2' align='center' className={classes.appName}>Chit Chat</Typography>
      <TextField id="Name" label="Name" variant="outlined">
        <Input state={state} setState={setState} />
      </TextField>
      <TextField id="Room ID" label="Room ID" variant="outlined">
        <Input state={state} setState={setState} />
      </TextField>
      <Button variant="contained" onClick={sendMessage}>Enter</Button>
    </div>
  );
}

export default App;
