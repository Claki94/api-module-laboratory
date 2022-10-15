import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';
import Button from '@material-ui/core/Button';

interface Props {
  character: CharacterEntityVm;
  onSeeDetails: (id: string) => void;
  onEdit: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onSeeDetails, onEdit } = props;

  return (
    <Card>
      <CardHeader title={character.name} subheader={character.origin} />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%', marginBottom: '24px' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            Species: {character.species}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Gender: {character.gender}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Type: {character.type}
          </Typography>
        </div>
      </CardContent>
      <CardActions style={{ padding: '16px' }}>
        <Button
          className={classes.boldButton}
          color="primary"
          variant="contained"
          onClick={() => onSeeDetails(character.id)}
        >
          See Details
        </Button>
        <Button
          className={classes.boldButton}
          color="primary"
          variant="contained"
          onClick={() => onEdit(character.id)}
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};
