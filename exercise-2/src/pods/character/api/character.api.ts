import axios from 'axios';
import { CharacterApi } from './character.api-model';

const characterUrl = 'http://localhost:3000/characters';

export const getCharacter = async (id: string): Promise<CharacterApi> => {
  return axios
    .get<CharacterApi>(`${characterUrl}/${id}`)
    .then((axiosResponse) => axiosResponse.data)
    .catch(() => null);
};

export const patchCharacter = async (
  id: string,
  characterAttrs: Partial<CharacterApi>
) => {
  return axios
    .patch<CharacterApi>(`${characterUrl}/${id}`, characterAttrs)
    .then(() => true)
    .catch(() => false);
};
