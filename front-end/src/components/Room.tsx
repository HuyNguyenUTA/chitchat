import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import  { Socket } from 'socket.io-client';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';


const useStyles = createUseStyles({
    root: {
        height: "100%"
    }
});

interface Collection {
    socket: Socket;
}


const Room:React.FC<Collection> = ({socket}) => {
    const classes = useStyles();
    const [currentMessage, setCurrentMessage] = useState<String>("");
    const [messageList, setMessageList] = useState([])
    const location = useLocation();

    const sp = new URLSearchParams(location.search)

    const name = sp.get('name');
    const room = sp.get('room');

    const sendMessage = () => {
        if (currentMessage !== "") {
            const messageData = {
                room:  room,
                author: name,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
            };
            socket.emit("send_message", messageData)
        };
    };

    useEffect(() => {
        socket.on("receive_message", (data) => {
            console.log(data)
        });
    }, [socket]);
    
    return(
        <div className={classes.root}>
            <input 
                onChange={(event) => {
                    setCurrentMessage(event.target.value)
                }}
            />
            <Button onClick={sendMessage}>Send</Button>
        </div>
    )
}

export default Room;