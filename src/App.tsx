import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Textbox from './components/Textbox';

function App() {
  return (
    <div className="App">
      <Typography variant='h1' align='center'>Chit Chat</Typography>
      <Textbox />
      <Button variant="contained">Enter</Button>
    </div>
  );
}

export default App;
