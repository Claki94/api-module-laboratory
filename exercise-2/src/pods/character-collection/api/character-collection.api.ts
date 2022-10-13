import { CharacterEntityApi } from './character-collection.api-model';
import axios from 'axios';

const characterUrl = 'http://localhost:3000/characters';

export const getCharacterCollection = async () => {
  return axios.get<CharacterEntityApi[]>(characterUrl)
    .then(axiosResponse => axiosResponse.data)
    .catch(() => []);
};
