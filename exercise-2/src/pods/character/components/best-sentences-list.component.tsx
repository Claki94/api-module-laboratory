import React from 'react';
import * as classes from './best-sentences-list.styles';

interface Props {
  bestSentences: string[];
}

export const BestSentencesListComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { bestSentences } = props;

  return (
    <div>
      <label htmlFor="best-sentences-list" className={classes.boldTitle}>
        Best sentences:
      </label>
      <ul id="best-sentences-list" className={classes.list}>
        {bestSentences.map((scene, index) => (
          <li key={index}>- {scene}</li>
        ))}
      </ul>
    </div>
  );
};
