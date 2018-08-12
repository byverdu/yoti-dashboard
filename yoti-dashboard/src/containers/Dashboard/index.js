import React, { Component } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import Activity from '../Activity'
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="yoti-dashboard">
        <Header isConnected />
        <Sidebar />
        <Activity />
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
