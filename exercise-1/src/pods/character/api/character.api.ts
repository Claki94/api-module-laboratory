import axios from 'axios';
import { Character } from './character.api-model';

const characterUrl = 'https://rickandmortyapi.com/api/character';

export const getCharacter = async (id: string) => {
  return axios
    .get<Character>(`${characterUrl}/${id}`)
    .then((axiosResponse) => axiosResponse.data)
    .catch(() => null);
};
