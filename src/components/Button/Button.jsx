import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ fetchImages, children }) => (
  <div className={styles.Box}>
    <button type="button" className={styles.Button} onClick={fetchImages}>
      {children}
    </button>
  </div>
);

Button.propTypex = {
  fetchImages: PropTypes.func,
  children: PropTypes.string,
};

export default Button;
