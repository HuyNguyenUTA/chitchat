import { Button } from '@mui/material';
import React from 'react';
import { createUseStyles } from 'react-jss';
import io from 'socket.io-client';

const useStyles = createUseStyles({
    root: {
        backgroundColor: "#A2B5BB",
        height: "100%"
    }
})

const socket = io('http://localhost:4000', {transports : ['websocket']})

socket.on("connection", () => {})

const Room:React.FC = () => {
    const classes = useStyles()

    const sendMessage = () => {
        socket.emit("message", "It worked")
    }

    return(
        <div className={classes.root}>
            <input></input>
            <Button onClick={sendMessage}>Send</Button>
        </div>
    )
}

export default Room;