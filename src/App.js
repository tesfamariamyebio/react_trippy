import React from 'react';
import './App.css';
import HomeContainer from './containers/HomeContainer';

import{
  BrowserRouter as Router,
  Route,
  Switch,
}
from 'react-router-dom';
class App extends React.Component{
  render(){
    return (
       <Router>
          <div>
            <Switch>
              <Route path="/">
              <HomeContainer />
              </Route>
            </Switch>
          </div>
        </Router>
    );
  
}
}
export default App;