const axios = require('axios');
const sdk = require('../agents');


const apiURL = 'https://valorant-api.com/v1/agents';

describe('Agent Tests', () => {
  test('Should get all agent data', ()=> {
    return sdk.getAllAgents()
    .then((data: any) => {
      return axios.get(apiURL)
      .then((res: any) => {
        expect(data).toMatchObject(res.data.data);
      })
    })
    .catch((err: any) => {
      expect(err.message).toBe('No Error');
    })
  })
});