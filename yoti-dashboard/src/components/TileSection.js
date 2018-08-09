import React from 'react';
import utils from '../utils';
import Tile from './Tile'

const TileSection = (data) => {
  return data.data.map(tileData => {
    return (
      <section>
        <h3>
          {utils.getDateFromUnix(tileData['unix-timestamp'])}
        </h3>

        <Tile {...data} />
      </section>
    )
  });
}

export default TileSection;
