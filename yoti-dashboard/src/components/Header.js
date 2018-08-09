import React from 'react';
import PropTypes from 'prop-types';
import Connection from './Connection';
import Image from './Image';
import defaultLogo from  '../assets/images/default_user.png';
import userLogo from '../assets/images/logged_user.jpeg';

const Header = ({isConnected}) => {
  const imgSrc = isConnected ? userLogo : defaultLogo;
  const imgAlt = isConnected ? 'connected user image' : 'default user image';
  const imgProps = {
    imgSrc, imgAlt
  }

  return (
    <header>
      <div className="icon-logo"></div>
      <Connection isConnected={isConnected} />
      <Image {...imgProps}/>
    </header>
  )
};

Header.propTypes = {
  isConnected: PropTypes.bool
};

Header.defaultProps = {
  isConnected: false
};

export default Header;
