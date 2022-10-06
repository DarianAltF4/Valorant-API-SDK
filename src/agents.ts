import axios from 'axios';

const apiURL = 'https://valorant-api.com/v1/agents';

export function getAllAgents(isPlayableCharacter?: boolean) {
  return new Promise((resolve, reject) => {
    if (isPlayableCharacter === undefined) {
      axios.get(apiURL)
        .then((res) => {
          resolve(res.data.data);
        })
        .catch(reject);
    } else {
      axios.get(apiURL, { params: { isPlayableCharacter } })
        .then((res) => {
          resolve(res.data.data);
        })
        .catch(reject);
    }
  });
}

export default { getAllAgents };
