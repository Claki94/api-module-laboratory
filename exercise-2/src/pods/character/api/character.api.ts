import axios from 'axios';
import { CharacterApi } from './character.api-model';

const characterUrl = 'http://localhost:3000/characters';

export const getCharacter = async (id: string) => {
  return axios.get<CharacterApi>(`${characterUrl}/${id}`)
    .then(axiosResponse => axiosResponse.data)
    .catch(() => null);
};
