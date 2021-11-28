import React, { lazy, Suspense } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import styles from './App.module.css';
import routes from './routes';
import Spiner from './components/Spinner/Spinner';

const HomePage = lazy(() =>
  import('./views/HomePage/HomePage.jsx' /* webpackChunkName: "home-view" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-details-view" */
  ),
);
const MoviesPage = lazy(() =>
  import(
    './views/MoviesPage/MoviesPage' /* webpackChunkName: "moviePage-view" */
  ),
);

const App = () => {
  return (
    <div>
      <ul className={styles.nav__list}>
        <li className={styles.nav__items}>
          <NavLink
            className={styles.nav__link}
            activeClassName={styles.linkActive}
            exact
            to={routes.home}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.nav__items}>
          <NavLink
            className={styles.nav__link}
            activeClassName={styles.linkActive}
            exact
            to={routes.movies}
          >
            Movies
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<Spiner />}>
        <Switch>
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Route path={routes.movies} component={MoviesPage} />
          <Route path={routes.home} component={HomePage} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
