import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Navbar } from 'pages';
import App from 'shared/App'


const Root = () => (
  <Router>
    <Navbar />
    <App />
  </Router>
)

export default Root