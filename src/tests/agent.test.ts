const axios = require('axios');
const sdk = require('../agents.ts');

const apiURL = 'https://valorant-api.com/v1/agents';

describe('Agent Tests', () => {
  test('Should get all agent data', () => {
    return sdk.getAllAgents()
      .then((data: any) => {
        return axios.get(apiURL)
          .then((res: any) => {
            expect(data).toMatchObject(res.data.data);
          });
      })
      .catch((err: any) => {
        expect(err.message).toBe('No Error');
      });
  });

  test('Should get all playable agents', () => {
    return sdk.getAllAgents(true)
      .then((data: any) => {
        return axios.get(apiURL, { params: { isPlayableCharacter: true } })
          .then((res: any) => {
            expect(data).toMatchObject(res.data.data);
          })
          .catch((err: any) => {
            expect(err.message).toBe('No Error');
          });
      });
  });

  test('Should get all non-playable agents', () => {
    return sdk.getAllAgents(false)
      .then((data: any) => {
        return axios.get(apiURL, { params: { isPlayableCharacter: false } })
          .then((res: any) => {
            expect(data).toMatchObject(res.data.data);
          })
          .catch((err: any) => {
            expect(err.message).toBe('No Error');
          });
      });
  });
});
