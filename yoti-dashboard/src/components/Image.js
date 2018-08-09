import React from 'react';
import PropTypes from 'prop-types';

const Image = ({imgSrc, imgAlt = 'default user image', imgClassnames}) => <img className={imgClassnames} src={imgSrc} alt={imgAlt} />

Image.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string,
  imgClassnames: PropTypes.string,
};

Image.defaultProps = {
  imgAlt: 'default user image',
  imgClassnames: 'icon-user_selfie_ph img-circle',
};

export default Image;
