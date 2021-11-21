import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import HomePage from './views/HomePage';
import MovieDetailsPage from './views/MovieDetailsPage';
import MoviesPage from './views/MoviesPage';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/home/:movieId" element={<MovieDetailsPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
