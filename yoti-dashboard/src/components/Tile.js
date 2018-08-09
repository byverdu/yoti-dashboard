import React from 'react';
import utils from '../utils';
import Image from './Image';
import defaultLogo from  '../assets/images/default_user.png';

const Tile = (tileData) => {
  const {
    text, type
  } = utils.getTileDataForType(tileData.type);
  
  return (
    <section>
      <div className="icon-activity_tick"></div>
      <Image imgSrc={defaultLogo} />
      <div>
        {text}
      </div>
      <h3>
        {utils.getHoursFromUnix(tileData.transaction['unix-timestamp'])}
      </h3>
      <h3>
        {utils.getDateFromUnix(tileData.transaction['unix-timestamp'])}
      </h3>
    </section>
  );
};

export default Tile;
