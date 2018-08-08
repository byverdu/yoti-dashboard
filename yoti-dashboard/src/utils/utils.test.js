import utils from './index';

const {
  getDateFromUnix,
  getHoursFromUnix
} = utils;

describe('Utils', () =>  {
  it('should be defined', () => {
    expect(utils).toBeDefined();
  });
  it('should be an object', () => {
    expect(typeof utils).toEqual('object');
  });
  describe('Utils.getDateFromUnix', () => {
    it('should be defined', () => {
      expect(getDateFromUnix).toBeDefined();
    });
    it('should be a function', () => {
      expect(typeof getDateFromUnix).toEqual('function');
    });
    it('should convert a Unix timestamp into a string', () => {
      expect(getDateFromUnix(1500394130)).toEqual('18 July 2017');
    });
  });
  describe('Utils.getHoursFromUnix', () => {
    it('should be defined', () => {
      expect(getHoursFromUnix).toBeDefined();
    });
    it('should be a function', () => {
      expect(typeof getHoursFromUnix).toEqual('function');
    });
    it('should convert a Unix timestamp into a string', () => {
      expect(getHoursFromUnix(1500394130)).toEqual('05:08');
    });
  });
});