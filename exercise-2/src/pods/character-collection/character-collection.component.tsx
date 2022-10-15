import * as React from 'react';
import * as classes from './character-collection.styles';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';

interface Props {
  characterCollection: CharacterEntityVm[];
  onSeeDetails: (id: string) => void;
  onEdit: (id: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onSeeDetails, onEdit } = props;

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard
              character={character}
              onSeeDetails={onSeeDetails}
              onEdit={onEdit}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
