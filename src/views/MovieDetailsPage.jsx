import axios from 'axios';
import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import ActorsList from '../components/ActorsList';
import ReviewsList from '../components/ReviewsList';

class MovieDetailsPage extends Component {
  state = {
    title: null,
    overview: null,
    poster_path: null,
    vote_average: null,
    genres: [],
    castList: [],
    reviewsList: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=630b46446de1400f6472aea120e587e9&language=ru-RU`,
    );
    // console.log(response.data);

    const castList = await axios.get(
      ` https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=630b46446de1400f6472aea120e587e9&language=en-US`,
    );
    // console.log(castList.data.cast);

    const reviewsList = await axios.get(
      ` https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=de3679880cea73120b4b17c145aa9537&language=en-US&page=1`,
    );
    console.log(reviewsList.data.results);
    this.setState({
      ...response.data,
      castList: castList.data.cast,
      reviewsList: reviewsList.data.results,
    });
  }

  render() {
    const srcImgFilm = 'https://image.tmdb.org/t/p/w500';
    const {
      title,
      overview,
      tagline,
      poster_path,
      vote_average,
      genres,
      castList,
      reviewsList,
    } = this.state;

    const { match } = this.props;
    return (
      <div>
        <img width="100px" src={`${srcImgFilm}${poster_path}`} alt={title} />
        <h1>{title}</h1>
        <p>{tagline}</p>
        <p>Описание фильма: {overview}</p>
        <p>Рейтинг: {vote_average}</p>
        <ul>
          Жанр
          {genres.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <ul>
          <li>
            <NavLink exact to={`${match.url}/cast`}>
              Актёры
            </NavLink>
          </li>
          <li>
            <NavLink exact to={`${match.url}/reviews`}>
              Коментарий
            </NavLink>
          </li>
        </ul>

        <Route
          path={`${match.path}/:movieId`}
          render={props => {
            const castList = this.state.castList;
            return castList && <ActorsList {...props} cast={castList} />;
          }}
        />

        <Route
          path={`${match.path}/:movieId`}
          render={props => {
            const reviewsList = this.state.reviewsList;
            return (
              castList && <ReviewsList {...props} reviewsList={reviewsList} />
            );
          }}
        />
      </div>
    );
  }
}

export default MovieDetailsPage;
