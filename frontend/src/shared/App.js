import React from 'react';
import { Home, CreateTrainingSetJsx, WordClass, SignupJsx, LoginJsx } from 'pages';
import { Route, Switch } from 'react-router-dom';

function App() {
  return <Switch>
      <Route path="/create_training_set/" component={CreateTrainingSetJsx}/>
      <Route path="/accounts/login" component={LoginJsx}/>
      <Route path="/accounts/signup" component={SignupJsx}/>
      <Route path="/class/:WordClass/" component={WordClass}/>
      <Route path="" component={Home}/>
    </Switch>
}

export default App