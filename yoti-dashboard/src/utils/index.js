import moment from 'moment';
import axios from 'axios';

const ax = axios.create({
  baseURL: 'http://localhost:3000/data/'
});

const utils = {
  getDateFromUnix: () => moment.unix(1500394130).format('DD MMMM YYYY'),
  getHoursFromUnix: () => moment.unix(1500394130).format('hh:mm'),
  fetchServerData: (fileName) => ax.get(fileName)
};

export default utils;