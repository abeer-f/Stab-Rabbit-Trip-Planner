<<<<<<< HEAD
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
=======
import React from "react";
import ReactDOM from "react-dom";
import App from "../client/App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Dashboard from "./Components/Dashboard.jsx";



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
>>>>>>> main
