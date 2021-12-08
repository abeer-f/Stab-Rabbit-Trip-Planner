import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from '../client/App.jsx'

ReactDOM.render(
    <App />,
=======
import Map from './Map.js';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

ReactDOM.render(
  // <Router>
    <Map />,
  // </Router>,
>>>>>>> dev
  document.getElementById('root')
);