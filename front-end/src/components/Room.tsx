import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    root: {
        backgroundColor: "#A2B5BB",
        height: "100%"
    }
})

const Room:React.FC = () => {
    const classes = useStyles()
    return(
        <div className={classes.root}>
            Hello
        </div>
    )
}

export default Room;