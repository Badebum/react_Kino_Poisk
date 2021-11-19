import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ images, onClickImage }) => {
  return (
    <>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <li key={id} className={styles.ImageGalleryItem}>
          <img
            src={webformatURL}
            alt={tags}
            className={styles.ImageGalleryItemImage}
            onClick={() => onClickImage({ largeImageURL })}
          />
        </li>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string,
      largeImaeURL: PropTypes.string,
    }),
  ),
  onClickImage: PropTypes.func,
};

export default ImageGalleryItem;
