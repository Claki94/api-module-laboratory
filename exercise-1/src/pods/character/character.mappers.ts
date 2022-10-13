import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.CharacterApi
): viewModel.CharacterVm => (
  character
    ?
      ({
        ...character,
        id: character.id.toString(),
        origin: character.origin.name,
        location: character.location.name,
        created: new Date(character.created)
      })
    :
      null
);
