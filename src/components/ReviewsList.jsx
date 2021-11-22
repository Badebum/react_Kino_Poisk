import React from 'react';

const ReviewsList = reviews => {
  console.log(reviews);
  console.log('!!!!!!!!!!!!!!!!!');
  return (
    <div>
      <ul>
        {reviews.reviewsList.map(comen => (
          <li key={comen.id}>
            <p>{comen.author}</p>
            <p>{comen.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsList;
