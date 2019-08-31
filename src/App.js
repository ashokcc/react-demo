import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import './assets/css/materialize.min.css';
import './assets/css/icon.css';
import './App.css';
import NavBar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
