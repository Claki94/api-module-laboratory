import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => (
  {
    id: character.id.toString(),
    name: character.name,
    origin: character.origin.name,
    species: character.species,
    image: character.image,
    gender: character.gender,
    type: character.type
  }
);
