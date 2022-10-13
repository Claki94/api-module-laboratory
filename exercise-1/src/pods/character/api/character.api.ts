import axios from 'axios';
import { CharacterApi } from './character.api-model';

const characterUrl = 'https://rickandmortyapi.com/api/character';

export const getCharacter = async (id: string) => {
  return axios.get<CharacterApi>(`${characterUrl}/${id}`)
    .then(axiosResponse => axiosResponse.data)
    .catch(() => null);
};
