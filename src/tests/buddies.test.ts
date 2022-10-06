const axios = require('axios');
const buddiesSDK = require('../buddies.ts');

const buddiesURL = 'https://valorant-api.com/v1/buddies';

describe('Buddies Tests', () => {
  test('Should get all data and assets of all weapon buddies', () => {
    return buddiesSDK.getAllBuddies()
      .then((data: any) => {
        return axios.get(buddiesURL)
          .then((res: any) => {
            expect(data).toMatchObject(res.data.data);
          })
          .catch((err: any) => {
            expect(err).toBe('No Error');
          });
      });
  });
});

export {};
