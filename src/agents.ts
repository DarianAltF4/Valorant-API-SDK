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

export function getAgentByName(name: string) {
  return new Promise((resolve, reject) => {
    const formatedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    axios.get(apiURL)
      .then((res) => {
        const dataForName = res.data.data.filter((agent: any) => {
          return agent.displayName === formatedName;
        });
        resolve(dataForName[0]);
      })
      .catch(reject);
  });
}

export default { getAllAgents, getAgentByName };
