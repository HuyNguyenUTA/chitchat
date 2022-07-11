import React, {useState} from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { createUseStyles } from 'react-jss';
import io from 'socket.io-client';
import { Link } from 'react-router-dom';

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
  }
})

const socket = io('http://localhost:4000', { transports : ['websocket'] })

socket.on("connection", () => {})

const App: React.FC = () => {
    const classes = useStyles()
    const [name, setName] = useState<string>("");
    const [id, setID] = useState<number | undefined>();
    
    const sendMessage = () => {
      socket.emit("message", "Room Created!")
    }
  
    console.log(name)
    console.log(id)
  
    return (
      <div className={classes.root}>
        <Typography variant='h2' align='center' className={classes.appName}>Chit Chat</Typography>
  
        <TextField
          id="Name" 
          label="Name" 
          variant="outlined" 
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          id="id" 
          label="id" 
          variant="outlined" 
          onChange={(e) => {
            setID(parseInt(e.target.value));
          }}
        />

        <Button variant="contained" component={Link} to='/room'>Enter</Button>
      </div>
    );
  }
  
  export default App;
  