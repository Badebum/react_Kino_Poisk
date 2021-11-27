import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import HomePage from './views/HomePage';
import MovieDetailsPage from './views/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from './views/MoviesPage';
import styles from './App.module.css';

const App = () => {
  return (
    <div>
      <ul className={styles.nav__list}>
        <li className={styles.nav__items}>
          <NavLink className={styles.nav__link} to="/">
            Home
          </NavLink>
        </li>
        <li className={styles.nav__items}>
          <NavLink className={styles.nav__link} to="/movies">
            Movies
          </NavLink>
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
