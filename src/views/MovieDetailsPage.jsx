import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  console.log(movieId);
  return (
    <div>
      <h2>Now showing post {movieId}</h2>
    </div>
  );
};

export default MovieDetailsPage;

// class MovieDetailsPage extends Component {
//   state = {};

//   render() {
//     // console.log(this.props.value.matches.params.movieId);
//     const { id } = useParams();
//     console.log(this.props);
//     return (
//       <div>
//         <h1>dfdfd</h1>
//         {/* <h1>{this.props.matches.params.movieId}</h1> */}
//       </div>
//     );
//   }
// }
