import axios from 'axios';
import { getAccessToken } from './auth';

const BASE_URL = 'http://localhost:8080';

export {getPublicStartupBattles, getPrivateStartupBattles};

function getPublicStartupBattles() {
  const url = `${BASE_URL}/api/battles/public-battles`;
  return axios.get(url).then(response => response.data);
}

function getPrivateStartupBattles() {
  const url = `${BASE_URL}/api/battles/private-battles`;
  return axios.get(url, { headers: { Authorization: `Bearer ${getAccessToken()}` }}).then(response => response.data);
}
