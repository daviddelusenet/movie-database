/* eslint react/no-did-mount-set-state: 0, no-console: 0 */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import './App.css';

// Import child components
import MovieDetail from './MovieDetail';
import MovieList from './MovieList';

const App = () => (
  <Router>
    <div className="App">
      <header className="App__header">
        <Link to="/" className="App__title">Movie Database</Link>
      </header>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" component={MovieDetail} />
      </Switch>
    </div>
  </Router>
);

export default App;
