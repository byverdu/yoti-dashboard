import React from 'react';
import utils from '../utils';
import Tile from './Tile'

const TileSection = ({tileData}) => {
  const {timeStamp, group} = tileData;

  return (
    <section className="yoti-activity__main-section">
      <h6 className="list-header">
        {utils.getDateFromUnix(timeStamp)}
      </h6>
      {
        group.map((tile, index) => <Tile key={index} {...tile} />)
      }
    </section>
  );
}

export default TileSection;
