import axios from 'axios';

const API_URL = `http://localhost:3000/v1`;

function searchUserAccount(searchQuery: string): Promise<any> {
  return axios
    .get(`${API_URL}/search?q=${searchQuery}`)
    .then((res) => res.data);
}

function showUserAccount(searchQuery: string): Promise<any> {
    return axios
      .get(`${API_URL}/details?id=${searchQuery}`)
      .then((res) => res.data);
  }


export default { searchUserAccount, showUserAccount };
