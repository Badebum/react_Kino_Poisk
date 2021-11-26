import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import styles from './MovieList.module.css';

const MovieList = ({ movies, location }) => {
  const srcImgFilm = `https://image.tmdb.org/t/p/w500`;
  return (
    <ul className={styles.list}>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id} className={styles.items}>
          <NavLink
            to={{
              pathname: `/home/${id}`,
              state: { from: location },
            }}
          >
            <img
              src={poster_path ? `${srcImgFilm}${poster_path}` : null}
              alt="poster_path"
              width="250"
            />
            <div>{title}</div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    }),
  ),
};

export default withRouter(MovieList);
