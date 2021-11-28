import axios from 'axios';
import React, { Component } from 'react';
import MovieList from '../../components/MovieList';

class MoviesPage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=630b46446de1400f6472aea120e587e9&language=ru-RU',
    );
    console.log(response.data.results);
    this.setState({ movies: response.data.results });
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <MovieList movies={movies} />
      </div>
    );
  }
}

export default MoviesPage;
