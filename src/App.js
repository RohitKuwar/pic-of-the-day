import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SearchResult from './pages/SearchResult';

function App() {

  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/search' component={SearchResult} />
      </Switch>
    </Router>
  )
}

export default App;