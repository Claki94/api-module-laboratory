import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import * as api from '../api';
import {
  mapCharacterFromApiToVm,
  mapCharacterFromVmToApi,
} from '../character.mappers';
import { CharacterVm } from '../character.vm';
import { CharacterEditComponent } from './character-edit.component';

export const CharacterEditContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<CharacterVm>(null);
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const handleLoadCharacter = async () => {
    api.getCharacter(id).then(mapCharacterFromApiToVm).then(setCharacter);
  };

  const handlePatchCharacter = async (character: CharacterVm) => {
    const { bestSentences } = mapCharacterFromVmToApi(character);
    api.patchCharacter(id, { bestSentences }).then((success) => {
      if (success) history.goBack();
      else alert('Error on save character');
    });
  };

  React.useEffect(() => {
    if (id) handleLoadCharacter();
  }, []);

  return (
    <CharacterEditComponent
      character={character}
      onPatch={handlePatchCharacter}
    />
  );
};
