import mockAxios from 'jest-mock-axios';
import utils from '../utils';

const {
  getDateFromUnix,
  getHoursFromUnix,
  fetchServerData,
  getTileDataForType
} = utils;

describe('Utils', () => {
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
  describe('Utils.getTileDataForType', () => {
    it('should be defined', () => {
      expect(getTileDataForType).toBeDefined();
    });
    it('should be a function', () => {
      expect(typeof getTileDataForType).toEqual('function');
    });
    it('should return an object with text and type props', () => {
      expect(getTileDataForType()).toEqual('');
    });
    it('for "share" type should return text "Yoti Shared" and type "transaction"', () => {
      expect(getTileDataForType('share')).toEqual('Yoti Shared');
    });
    it('for "application" type should return text "Yoti Application" and type "application"', () => {
      expect(getTileDataForType('application')).toEqual('Yoti Application');
    });
  });
  describe('Utils.fetchServerData', () => {
    afterEach(() => {
      mockAxios.reset();
    });

    const responseObj = {
      receipts: [
        {
          "type": "share",
          "transaction": {
            "attributes": [
              {
                "given-names": "Ivan Danko"
              }, {
                "mobile-number": "+44 7878 787878"
              }, {
                "gender": "male"
              }
            ],
            "unix-timestamp": 1500394130
          }
        }
      ]
    }
    const catchFn = jest.fn();
    const thenFn = jest.fn();

    fetchServerData('mock-data.json')
      .then(thenFn)
      .catch(catchFn);

    it('should be defined', () => {
      expect(fetchServerData).toBeDefined();
    });
    it('should be a function', () => {
      expect(typeof fetchServerData).toEqual('function');
    });
    it('fetchServerData should get the data', () => {

      fetchServerData('mock-data.json')
        .then(thenFn)
        .catch(catchFn);

      expect(mockAxios.get).toHaveBeenCalledWith('mock-data.json');

      mockAxios.mockResponse(responseObj);
      thenFn.mockReturnValue(responseObj);

      expect(thenFn()).toEqual(responseObj);
      expect(catchFn).not.toHaveBeenCalled();
    });
  });
});