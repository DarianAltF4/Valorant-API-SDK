"use strict";
const axios = require('axios');
const sdk = require('../agents');
const apiURL = 'https://valorant-api.com/v1/agents';
describe('Agent Tests', () => {
    test('Should get all agent data', () => {
        sdk.getAllAgents()
            .then((data) => {
            return axios.get(apiURL)
                .then((res) => {
                expect(data).toMatchObject(res.data);
            });
        })
            .catch((err) => {
            expect(err).toBe('No Error');
        });
    });
});
