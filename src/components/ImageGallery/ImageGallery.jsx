import React from 'react';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images, onClickImage }) => {
  return (
    <ul className={styles.ImageGallery}>
      <ImageGalleryItem images={images} onClickImage={onClickImage} />
    </ul>
  );
};

export default ImageGallery;
