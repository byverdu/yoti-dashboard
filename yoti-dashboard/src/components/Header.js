import React from 'react';
import Connection from './Connection';
import Image from './Image';

const Header = ({isConnected}) => {
  return (
    <header>
      <div className="icon-logo"></div>
      <Connection isConnected={isConnected} />
      <Image isConnected={isConnected}/>
    </header>
  )
};

export default Header;
