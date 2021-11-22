import React from 'react';

const ActorsList = castList => {
  console.log(castList);
  return (
    <div>
      <ul>
        {castList.cast.map(cast => (
          <li key={cast.id}>{cast.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActorsList;
