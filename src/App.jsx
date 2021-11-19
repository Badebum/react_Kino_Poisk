import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import MovieDetailsPage from './views/MovieDetailsPage';
import MoviesPag from './views/MoviesPag';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/movieDetails" element={<MovieDetailsPage />} />
        <Route path="/movies" element={<MoviesPag />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
