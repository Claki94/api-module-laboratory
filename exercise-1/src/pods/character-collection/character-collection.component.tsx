import * as React from 'react';
import * as classes from './character-collection.styles';

interface Props {
  // TODO
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const {  } = props;

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {/* {hotelCollection.map((hotel) => (
          <li key={hotel.id}>
            <CharacterCard hotel={hotel} onEdit={onEdit} onDelete={onDelete} />
          </li>
        ))} */}
      </ul>
    </div>
  );
};
