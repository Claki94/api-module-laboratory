import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Alert } from '@material-ui/lab';
import * as api from '../api';
import {
  mapCharacterFromApiToVm,
  mapCharacterFromVmToApi,
} from '../character.mappers';
import { Character } from '../character.vm';
import { CharacterEditComponent } from './character-edit.component';

export const CharacterEditContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(null);
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const handleLoadCharacter = async () => {
    api.getCharacter(id).then(mapCharacterFromApiToVm).then(setCharacter);
  };

  const handlePatchCharacter = async (character: Character) => {
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
    <>
      {character ? (
        <CharacterEditComponent
          character={character}
          setCharacter={setCharacter}
          onPatch={handlePatchCharacter}
        />
      ) : (
        <Alert severity="error">404 - Character not found</Alert>
      )}
    </>
  );
};
