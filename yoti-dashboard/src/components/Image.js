import React from 'react';
import defaultLogo from  '../assets/images/default_user.png';
import userLogo from '../assets/images/logged_user.jpeg';

const Image = ({isConnected}) => {
  const imgSrc = isConnected ? userLogo : defaultLogo;
  const altImg = isConnected ? 'connected user image' : 'default user image';
  return (
    <img className='icon-user_selfie_ph img-circle' src={imgSrc} alt={altImg} />
  )
} 

export default Image;
