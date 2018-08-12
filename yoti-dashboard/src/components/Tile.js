import React, { Component } from 'react';
import utils from '../utils';
import Image from './Image';
import ModalWrapper from './ModalWrapper';
import defaultLogo from '../assets/images/default_user.png';

class Tile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasBeenClicked: false
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      hasBeenClicked: !this.state.hasBeenClicked
    })
  }

  render() {

    const { type, transaction } = this.props;
    const text = utils.getTileDataForType(type);
    const timestamp = transaction['unix-timestamp'];

    return (
      <section onClick={this.clickHandler} className="yoti-activity__main-tile">
        <div className="yoti-tile__info">
          <div className="icon-activity_tick"></div>
          <Image imgSrc={defaultLogo} />
          <div>
            {text}
          </div>
        </div>
        <div className="yoti-tile__timestamp">
          <h6 className="yoti-tile__timestamp-text">
            {utils.getHoursFromUnix(timestamp)}
          </h6>
          <h6 className="yoti-tile__timestamp-text">
            {utils.getDateFromUnix(timestamp)}
          </h6>
        </div>

        <ModalWrapper hasBeenClicked={this.state.hasBeenClicked} cardData={this.props} />
      </section>
    );
  }
};

export default Tile;
