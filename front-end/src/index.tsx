import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Room from './components/Room';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import io from 'socket.io-client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const socket = io('http://localhost:4000', {transports : ['websocket']})

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App socket={socket} />} />
      <Route path='/:id' element={<Room socket={socket} name="" room=""/>} />
    </Routes>
  </BrowserRouter>
);

