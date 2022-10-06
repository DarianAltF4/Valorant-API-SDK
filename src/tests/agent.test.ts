const axios = require('axios');
const agentSDK = require('../agents.ts');

const agentURL = 'https://valorant-api.com/v1/agents';

describe('Agent Tests', () => {
  test('Should get all agent data', () => {
    return agentSDK.getAllAgents()
      .then((data: any) => {
        return axios.get(agentURL)
          .then((res: any) => {
            expect(data).toMatchObject(res.data.data);
          });
      })
      .catch((err: any) => {
        expect(err.message).toBe('No Error');
      });
  });

  test('Should get all playable agents', () => {
    return agentSDK.getAllAgents(true)
      .then((data: any) => {
        return axios.get(agentURL, { params: { isPlayableCharacter: true } })
          .then((res: any) => {
            expect(data).toMatchObject(res.data.data);
          })
          .catch((err: any) => {
            expect(err.message).toBe('No Error');
          });
      });
  });

  test('Should get all non-playable agents', () => {
    return agentSDK.getAllAgents(false)
      .then((data: any) => {
        return axios.get(agentURL, { params: { isPlayableCharacter: false } })
          .then((res: any) => {
            expect(data).toMatchObject(res.data.data);
          })
          .catch((err: any) => {
            expect(err.message).toBe('No Error');
          });
      });
  });

  test('Should get agent by name', () => {
    return agentSDK.getAgentByName('Breach')
      .then((data: any) => {
        const breachUUID = '5f8d3a7f-467b-97f3-062c-13acf203c006';
        return axios.get(`${agentURL}/${breachUUID}`)
          .then((res: any) => {
            expect(data).toMatchObject(res.data.data);
          })
          .catch((err: any) => {
            expect(err.message).toBe('No Error');
          });
      });
  });

  test('Should get agent by name with any cased string', () => {
    return agentSDK.getAgentByName('BReacH')
      .then((data: any) => {
        const breachUUID = '5f8d3a7f-467b-97f3-062c-13acf203c006';
        return axios.get(`${agentURL}/${breachUUID}`)
          .then((res: any) => {
            expect(data).toMatchObject(res.data.data);
          })
          .catch((err: any) => {
            expect(err.message).toBe('No Error');
          });
      });
  });
});

export {};
