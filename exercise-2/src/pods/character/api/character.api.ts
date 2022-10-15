import axios from 'axios';
import { Character } from './character.api-model';

const characterUrl = 'http://localhost:3000/characters';

export const getCharacter = async (id: string): Promise<Character> => {
  return axios
    .get<Character>(`${characterUrl}/${id}`)
    .then((axiosResponse) => axiosResponse.data)
    .catch(() => null);
};

export const patchCharacter = async (
  id: string,
  characterAttrs: Partial<Character>
) => {
  return axios
    .patch<Character>(`${characterUrl}/${id}`, characterAttrs)
    .then(() => true)
    .catch(() => false);
};
