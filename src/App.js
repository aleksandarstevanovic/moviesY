import React from 'react';
import Home from './containers/Home'
import Results from './containers/Results'
import Movie from './components/Movie'
import {Route, Router, Switch} from 'react-router-dom'
import history from './history'




function App() {
  return (
    <div className="App">
      <Router history={history}>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route  path='/results' component={Results}/>
        <Route path='/movie' component={Movie}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
