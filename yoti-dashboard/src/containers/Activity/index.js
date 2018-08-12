import React, { Component } from 'react';
import TileSection from '../../components/TileSection'
import utils from '../../utils';
import '../../components/components.css';

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
    const sortedData = utils.groupByTimestamp(this.state.tileData);

    return (
      <section className="yoti-activity">
        <h4 className="yoti-activity__title">Activity</h4>
        <main className="yoti-activity__main">
          <h3 className="yoti-activity__main-title">Activity</h3>
          <p>
            See a record of everyone you have shared details with.
          </p>

          {
            sortedData.map(item => <TileSection key={item.timeStamp} tileData={item} />)
          }

        </main>
      </section>
    );
  }
}

export default Activity;
