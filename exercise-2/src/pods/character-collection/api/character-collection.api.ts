import { Character } from 'pods/character/api';
import axios from 'axios';

const characterUrl = 'http://localhost:3000/characters';

export const getCharacterCollection = async () => {
  return axios
    .get<Character[]>(characterUrl)
    .then((axiosResponse) => axiosResponse.data)
    .catch(() => []);
};
