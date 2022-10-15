import React from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import { CharacterVm } from 'pods/character/character.vm';
import * as classes from './best-sentences.styles';

interface Props {
  character: CharacterVm;
  setCharacter: React.Dispatch<React.SetStateAction<CharacterVm>>;
}

export const BestSentencesComponent: React.FunctionComponent<Props> = (
  props
) => {
  const defaultEditSentenceIdx = -1;
  const [sentence, setSentence] = React.useState<string>('');
  const [editSentenceIdx, setEditSentenceIdx] = React.useState<number>(
    defaultEditSentenceIdx
  );
  const { character, setCharacter } = props;

  const handleSentence = (sentence: string) => {
    if (editSentenceIdx !== defaultEditSentenceIdx) {
      const bestSentences = [...character.bestSentences];
      bestSentences[editSentenceIdx] = sentence;
      setCharacter({
        ...character,
        bestSentences,
      });
      setEditSentenceIdx(defaultEditSentenceIdx);
    } else {
      setCharacter({
        ...character,
        bestSentences: [...character.bestSentences, sentence],
      });
    }

    setSentence('');
  };

  const handleEditSentence = (sentence: string, index: number) => {
    setSentence(sentence);
    setEditSentenceIdx(index);
  };

  const handleDeleteSentence = (indexToDelete: number) => {
    setCharacter({
      ...character,
      bestSentences: character.bestSentences.filter(
        (value, index) => index !== indexToDelete
      ),
    });
  };

  return (
    <section>
      <div className={classes.sentenceFormContainer}>
        <TextField
          variant="outlined"
          label="Sentence"
          size="small"
          style={{ marginRight: 16 }}
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
        />
        <Button
          style={{ fontWeight: 'bold' }}
          type="button"
          variant="contained"
          color="primary"
          onClick={() => handleSentence(sentence)}
        >
          {editSentenceIdx !== defaultEditSentenceIdx
            ? 'Update sentence'
            : 'Add sentence'}
        </Button>
      </div>
      <List dense={true}>
        {character?.bestSentences.map((sentence, index) => (
          <ListItem key={index}>
            <ListItemText primary={`- ${sentence}`}></ListItemText>
            {editSentenceIdx !== index ? (
              <Button
                style={{ fontWeight: 'bold', marginRight: '8px' }}
                type="button"
                variant="contained"
                color="primary"
                onClick={() => handleEditSentence(sentence, index)}
              >
                Edit
              </Button>
            ) : null}
            <Button
              style={{ fontWeight: 'bold' }}
              type="button"
              variant="contained"
              color="secondary"
              onClick={() => handleDeleteSentence(index)}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </section>
  );
};
