import ReactDOM from 'react-dom';
import React, { useState, Suspense, lazy} from 'react';
import Home_page from './home_page'
import Create_training_set_jsx from './create_training_set';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navbar from './navbar.js';
import { useHistory } from 'react-router'

import jquery from 'jquery';
import $ from 'jquery';

// const history = useHistory()
// history.go(0)

ReactDOM.render(
  <>
  

  <Router>
    <Navbar />
    <Switch>
      <Route path="/react/"><Home_page /></Route>
      <Route path="/create_training_set/"><Create_training_set_jsx /></Route>
    </Switch>
  </Router>
  </>
  ,
  document.getElementById('root')
);