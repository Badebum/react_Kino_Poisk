import React from 'react';
import styles from './ActorList.module.css';

const ActorsList = castList => {
  castList.cast.splice(10);
  const srcImgFilm = `https://image.tmdb.org/t/p/w500`;
  console.log(castList);
  return (
    <div className={styles.actor__card}>
      <ul className={styles.actor__list}>
        {castList.cast.map(cast => (
          <li className={styles.list__item} key={cast.id}>
            <img
              className={styles.poster}
              src={
                cast.profile_path ? `${srcImgFilm}${cast.profile_path}` : null
              }
              alt={cast.name}
            />
            {cast.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActorsList;
