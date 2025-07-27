import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Women from './Women';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/women">Women</Link>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/women" component={Women} />
      </Switch>
    </Router>
  );
}

export default App;
