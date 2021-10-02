import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Home, CreateTrainingSetJsx, WordClass, SignupJsx, LoginJsx } from 'pages';


const Root = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/create_training_set/" component={CreateTrainingSetJsx}/>
      <Route path="/accounts/login" component={LoginJsx}/>
      <Route path="/accounts/signup" component={SignupJsx}/>
      <Route path="/class/:WordClass/" component={WordClass}/>
      <Route path="" component={Home}/>
    </Switch>
  </Router>
)

export default Root