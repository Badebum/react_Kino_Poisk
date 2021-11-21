import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MoviesPage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=630b46446de1400f6472aea120e587e9',
    );
    console.log(response.data.results);
    this.setState({ movies: response.data.results });
  }

  render() {
    const srcImgFilm = `https://image.tmdb.org/t/p/w500`;
    return (
      <div>
        <ul>
          {this.state.movies.map(({ id, title, poster_path }) => (
            <li key={id}>
              <Link to={`/home/${id}`}>
                <img
                  width="100px"
                  src={`${srcImgFilm}${poster_path}`}
                  alt={title}
                />
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MoviesPage;
