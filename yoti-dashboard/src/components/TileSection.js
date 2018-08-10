import React from 'react';
import utils from '../utils';
import Tile from './Tile'

const TileSection = ({tileData}) => {
  const {timeStamp, group} = tileData;

  return (
    <section>
      <h3>
        {utils.getDateFromUnix(timeStamp)}
      </h3>
      {
        group.map((tile, index) => <Tile key={index} {...tile} />)
      }
      <hr/>
    </section>
  );
}

export default TileSection;
