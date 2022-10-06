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

  test('Should get agent by name', () => {
    return sdk.getAgentByName('Breach')
      .then((data: any) => {
        const breachUUID = '5f8d3a7f-467b-97f3-062c-13acf203c006';
        return axios.get(`${apiURL}/${breachUUID}`)
          .then((res: any) => {
            expect(data).toMatchObject(res.data.data);
          })
          .catch((err: any) => {
            expect(err.message).toBe('No Error');
          });
      });
  });

  test('Should get agent by name with any cased string', () => {
    return sdk.getAgentByName('BReacH')
      .then((data: any) => {
        const breachUUID = '5f8d3a7f-467b-97f3-062c-13acf203c006';
        return axios.get(`${apiURL}/${breachUUID}`)
          .then((res: any) => {
            expect(data).toMatchObject(res.data.data);
          })
          .catch((err: any) => {
            expect(err.message).toBe('No Error');
          });
      });
  });
});
