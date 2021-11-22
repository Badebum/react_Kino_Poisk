import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import HomePage from './views/HomePage';
import MovieDetailsPage from './views/MovieDetailsPage';
import MoviesPage from './views/MoviesPage';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>

      <Switch>
        <Route path="/home/:movieId" component={MovieDetailsPage} />
        <Route path="/movies" component={MoviesPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
