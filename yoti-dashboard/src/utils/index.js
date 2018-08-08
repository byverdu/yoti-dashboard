import moment from 'moment';

const utils = {
  getDateFromUnix: () => moment.unix(1500394130).format('DD MMMM YYYY'),
  getHoursFromUnix: () => moment.unix(1500394130).format('hh:mm'),
};

export default utils;