import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import  { Socket } from 'socket.io-client';
import { useLocation } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import RoomList from '../components/RoomList';



const useStyles = createUseStyles({
    root: {
        display: "flex",
        height: "100%",
        backgroundColor: "#A6D1E6",
        justifyContent: "center"
    },
    chatContainer: {
        display: "flex",
        flexDirection: "column",
        width: `calc(100%/6*3)`,
        height: "100%"
    },
    chat: {
        height: "100%"
    },
    input: {
        display: "flex",
        alignItems: "center",
        gap: "20px",
    },
    inputBox: {
        backgroundColor: "#F0EBE3",
        borderRadius: "15px",
        height: "100%",
        width: "100%",
        padding: "0px 20px",
        border: "none",
        transition: "0.2s",
    },
    message: {
        display: "flex",
        gap: "30px"
    },
    messageContent: {
        backgroundColor: "#A2B5BB",
        borderRadius: "10px",
        padding: "10px"
    },

});

interface Collection {
    socket: Socket;
    name: String;
    room: String;
}


const Room:React.FC<Collection> = ({socket, name, room}) => {
    const classes = useStyles();
    const [currentMessage, setCurrentMessage] = useState<String>("");
    const [messageList, setMessageList] = useState<String[]>([]);
    const location = useLocation();

    const sp = new URLSearchParams(location.search)

    name = sp.get('name');
    room = sp.get('room');

    const sendMessage = () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                author: name,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
            };
            socket.emit("send_message", messageData)
            setMessageList((list) => [...list, messageData.message])
        };
    };

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList((messageList) => [...messageList, data])
        });
    }, [socket]);

    return(
        <div className={classes.root}>
            <div className={classes.chatContainer}>
                <div className={classes.chat}>
                    {messageList.map((item, i) => 
                        <div className={classes.message} key={i}>
                            <div key={i}>
                                <div className={classes.messageContent}>
                                    <div>{item}</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <form className={classes.input}>
                    <input
                        className={classes.inputBox}
                        onChange={(event) => {
                            setCurrentMessage(event.target.value)
                        }}
                        placeholder="Enter text here"
                    ></input>
                    <Button variant="contained" endIcon={<SendIcon />} onClick={sendMessage}>
                        Send
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Room;