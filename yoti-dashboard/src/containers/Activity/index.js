import React, { Component } from 'react';
import axios from 'axios';
import TileSection from '../../components/TileSection'
import utils from '../../utils';

class Activity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tileData: []
    }
  }

  componentDidMount() {
    utils.fetchServerData('mock-data.json')
      .then(response => this.setState({
        tileData: response.data.receipts
      }))
  }

  render() {
    return (
      <section className="Activity">
        <h4>Activity</h4>
        <main className="Activity-main">
          <h2>Activity</h2>
          <p>
            See a record of everyone you have shared details with.
          </p>

          <TileSection data={this.state.tileData} />
        </main>
      </section>
    );
  }
}

export default Activity;
