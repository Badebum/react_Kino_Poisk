import React from 'react';

const ActorsList = castList => {
  castList.cast.splice(10);
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
