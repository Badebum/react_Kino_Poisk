import axios from 'axios';
import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import ActorsList from '../../components/ActorsList';
import ReviewsList from '../../components/ReviewsList';
import styles from './MovieDetailsPage.module.css';

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
    const { title, overview, tagline, poster_path, vote_average, genres } =
      this.state;

    const { url, path } = this.props.match;
    return (
      <div>
        <div className={styles.card__film}>
          <img
            className={styles.poster}
            src={`${srcImgFilm}${poster_path}`}
            alt={title}
          />
          <div className={styles.description}>
            <h1>{title}</h1>
            <h2>{tagline}</h2>
            <p>Описание фильма: {overview}</p>
            <p>Рейтинг: {vote_average}</p>

            <ul>
              Жанр:
              {genres.map(item => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>

            <ul>
              <li>
                <NavLink exact to={`${url}/cast`}>
                  Актёры
                </NavLink>
              </li>
              {/* <li>
                <NavLink exact to={`${url}/reviews`}>
                  Коментарий
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>

        <div className={styles.card__film}>
          <Route
            path={`${path}/:movieId`}
            render={props => {
              const castList = this.state.castList;
              return castList && <ActorsList {...props} cast={castList} />;
            }}
          />
          {/* <Route
            path={`${path}/:movieId`}
            render={props => {
              const reviewsList = this.state.reviewsList;
              return (
                castList && <ReviewsList {...props} reviewsList={reviewsList} />
              );
            }}
          /> */}
        </div>
      </div>
    );
  }
}

export default MovieDetailsPage;
