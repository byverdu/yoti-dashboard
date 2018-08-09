import React, { Component } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Activity from '../Activity'
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <Header isConnected />
        <section>
          <Sidebar />
          <Activity />
        </section>
      </div>
    );
  }
}

export default Dashboard;
