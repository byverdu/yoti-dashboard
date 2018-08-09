import React from 'react';
import utils from '../utils';
import Image from './Image';
import defaultLogo from  '../assets/images/default_user.png';

const Tile = (props) => {
  const dataType = props.type === 'share' ? 'Yoti Shared' : 'Yoti Application';
  return (
    <section>
      <div className="icon-activity_tick"></div>
      <Image imgSrc={defaultLogo} />
      <div>
        {dataType}
      </div>
      <h3>
        {utils.getHoursFromUnix(props['unix-timestamp'])}
      </h3>
      <h3>
        {utils.getDateFromUnix(props['unix-timestamp'])}
      </h3>
    </section>
  );
};

export default Tile;
