import React, { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';
import { Socket } from 'socket.io-client';


const useStyles = createUseStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    height: "100%",
    backgroundColor: "#F5EDDC"
  },
  appName: {
    color: "#A27B5C"
  },
})

interface Collection {
  socket: Socket;
}

const App: React.FC<Collection> = ({socket}) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if (name !== "" && room !== "") {
      socket.emit("join_room", room)
    }
  }

  console.log(name)
  console.log(room)
  
  return (
    <div className={classes.root}>
      <Typography variant='h2' align='center' className={classes.appName}>Chit Chat</Typography>
  
      <TextField
        id="Name" 
        label="Name" 
        variant="outlined" 
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <TextField
        id="room" 
        label="Room ID" 
        variant="outlined" 
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />

        <Link to={`/room?name=${name}&room=${room}`}>
          <Button variant="contained" onClick={joinRoom} >
              Enter
          </Button>
        </Link>

    </div>
  );
} 
export default App;
  