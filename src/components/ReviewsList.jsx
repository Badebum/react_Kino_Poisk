import React from 'react';

const ReviewsList = reviews => {
  // console.log(reviews);
  reviews.reviewsList.splice(5);
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
