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
      <section onClick={this.clickHandler}>
        <div className="icon-activity_tick"></div>
        <Image imgSrc={defaultLogo} />
        <div>
          {text}
        </div>
        <div>
          <h3>
            {utils.getHoursFromUnix(timestamp)}
          </h3>
          <h3>
            {utils.getDateFromUnix(timestamp)}
          </h3>
        </div>

        <ModalWrapper hasBeenClicked={this.state.hasBeenClicked} cardData={this.props} />
      </section>
    );
  }
};

export default Tile;
