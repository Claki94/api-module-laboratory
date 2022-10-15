import { Characters } from './character-collection.api-model';
import axios from 'axios';

const characterUrl = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async () => {
  return axios
    .get<Characters>(characterUrl)
    .then((axiosResponse) => axiosResponse.data)
    .then((data) => data.results)
    .catch(() => []);
};
