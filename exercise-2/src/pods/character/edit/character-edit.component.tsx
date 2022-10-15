import React from 'react';
import { Button } from '@material-ui/core';
import { Character } from '../character.vm';
import { BestSentencesComponent } from './components/best-sentences.component';
import * as classes from './character-edit.styles';

interface Props {
  character: Character;
  setCharacter: React.Dispatch<React.SetStateAction<Character>>;
  onPatch: (character: Character) => Promise<void>;
}

export const CharacterEditComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { character, setCharacter, onPatch } = props;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPatch(character);
  };

  return (
    <>
      <h1>Edit {character.name} sentences</h1>
      <form className={classes.formTemplate} onSubmit={(e) => handleSubmit(e)}>
        <BestSentencesComponent
          character={character}
          setCharacter={setCharacter}
        />
        <Button
          style={{ fontWeight: 'bold' }}
          type="submit"
          variant="contained"
          color="primary"
        >
          Save
        </Button>
      </form>
    </>
  );
};
