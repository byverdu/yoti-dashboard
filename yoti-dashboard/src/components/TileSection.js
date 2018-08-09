import React from 'react';
import utils from '../utils';
import Tile from './Tile'

const TileSection = ({tileData}) => {
  const {timeStamp, group} = tileData;

  return (
    <section key={timeStamp}>
      <h3>
        {utils.getDateFromUnix(timeStamp)}
      </h3>
      {
        tileData.group.map(tile => <Tile {...tile} />)
      }
      <hr/>
    </section>
  );
}

export default TileSection;
