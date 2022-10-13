import React from 'react';
import { CharacterVm } from '../character.vm';

interface Props {
  character: CharacterVm;
  onPatch: (character: CharacterVm) => void;
}

export const CharacterEditComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { character, onPatch } = props;

  return <></>;
};
