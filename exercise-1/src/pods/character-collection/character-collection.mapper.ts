import * as apiModel from 'pods/character/api';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  id: character.id.toString(),
  name: character.name,
  origin: character.origin.name,
  species: character.species,
  image: character.image,
  gender: character.gender,
  type: character.type,
});
