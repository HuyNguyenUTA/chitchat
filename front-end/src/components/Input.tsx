import React from 'react';

type Props = {
    name: string;
    id: number;
    setName: React.Dispatch<React.SetStateAction<string>>;
    setID: React.Dispatch<React.SetStateAction<number>>
}
const Input: React.FC <Props> = ({name, setName, id, setID}) => {

    return (
        <div></div>
    );
}
 
export default Input;