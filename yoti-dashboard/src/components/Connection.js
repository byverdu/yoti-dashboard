import React from 'react';
import classNames from 'classnames';

const Connection = ({isConnected}) => {
  const iconClassName = classNames({
    'icon-connect-on': isConnected,
    'icon-connect-off': !isConnected,
  });
  const text = isConnected ? 'Connected' : 'Disconnected';
  return (
    <div className="yoti-connection">
      {text}
      <div className={iconClassName}></div>
    </div>
  )
};

export default Connection;
