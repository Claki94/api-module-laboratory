import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CharacterCollectionScene, CharacterViewScene } from 'scenes';
import { CharacterEditScene } from 'scenes/character-edit.scene';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.characterCollection]}
          component={CharacterCollectionScene}
        />
        <Route
          exact={true}
          path={switchRoutes.characterView}
          component={CharacterViewScene}
        />
        <Route
          exact={true}
          path={switchRoutes.characterEdit}
          component={CharacterEditScene}
        />
      </Switch>
    </HashRouter>
  );
};
