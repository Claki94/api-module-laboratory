import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  characterView: string;
  characterEdit: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  characterView: '/characters/view/:id',
  characterEdit: '/characters/edit/:id'
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'characterView' | 'characterEdit'> {
  characterView: NavigationFunction;
  characterEdit: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  characterView: (id) => generatePath(switchRoutes.characterView, { id }),
  characterEdit: (id) => generatePath(switchRoutes.characterView, { id }),
};
