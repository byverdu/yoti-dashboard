import React, { Component } from 'react';
import Header from '../../components/Header'
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="App">
        <Header isConnected />
      </div>
    );
  }
}

export default Dashboard;
