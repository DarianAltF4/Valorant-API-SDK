"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllAgents = void 0;
const axios_1 = __importDefault(require("axios"));
const apiURL = 'https://valorant-api.com/v1/agents';
function getAllAgents(isPlayableCharacter) {
    return new Promise((resolve, reject) => {
        axios_1.default.get(apiURL)
            .then((res) => {
            resolve(res.data.data);
        })
            .catch(reject);
    });
}
exports.getAllAgents = getAllAgents;
;
exports.default = { getAllAgents };
