/* eslint react/no-did-mount-set-state: 0, no-console: 0 */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import styled from 'styled-components';

// Import child components
import MovieDetail from './MovieDetail';
import MovieList from './MovieList';

const App = () => (
  <Router>
    <div>
      <Header>
        <Title to="/">Movie Database</Title>
      </Header>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" component={MovieDetail} />
      </Switch>
    </div>
  </Router>
);

export default App;

const Header = styled.header`
  background-color: #111;
  padding: 40px 20px;
  text-align: center;
`;

const Title = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0;
  font-size: 24px;
`;
