import moment from 'moment';
import axios from 'axios';
const groupBy = require('lodash.groupby');

const ax = axios.create({
  baseURL: 'http://localhost:3000/data/'
});

const utils = (function() {
  console.log(this)
  function getDateFromUnix(timeStamp) {
    return moment.unix(timeStamp).format('DD MMMM YYYY');
  }

  function getHoursFromUnix(timeStamp) {
    return moment.unix(timeStamp).format('hh:mm');
  }

  function fetchServerData(fileName)  {
    return ax.get(fileName)
  };

  function getTileDataForType(type) {
    const recordsTypes = {
      share: 'Yoti Shared',
      application: 'Yoti Application'
    };

    return type ? recordsTypes[type] : '';
  }

  function groupByTimestamp(collection) {
    const groupedItems = groupBy(collection, (result) =>  moment.unix(result['transaction']['unix-timestamp'], 'DD/MM/YYYY').startOf('day'));

    return Object.keys(groupedItems)
      .map(group => ({
        timeStamp: groupedItems[group][0].transaction['unix-timestamp'],
        group: groupedItems[group]
      }))
      .sort((a,b) => b.timeStamp - a.timeStamp)
  }
  

  return {
    getDateFromUnix,
    getHoursFromUnix,
    fetchServerData,
    getTileDataForType,
    groupByTimestamp
  }
})();


export default utils;