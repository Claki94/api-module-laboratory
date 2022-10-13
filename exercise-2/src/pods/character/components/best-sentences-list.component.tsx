import React from 'react';
import * as classes from '../character.styles';

interface Props {
  bestSentences: string[];
}

export const BestSentencesListComponent: React.FunctionComponent<Props> = (props) => {
  const { bestSentences } = props;
  
  return (
    <div className={classes.flexRow}>
      <span className={classes.boldTitle}>Best sentences: </span>
      <ul className={classes.list}>
        { 
          bestSentences.map((scene, index) => (
            <li key={index}>{scene}</li>
          )) 
        }
      </ul>
    </div>
  );
}