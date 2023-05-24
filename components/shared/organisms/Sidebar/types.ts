import { CurrentUserFragment } from 'graphql/fragments/__generated__/currentUserInfo.generated';
import { TIcon } from 'components/shared/atoms/Icon/types';

export type TSidebar = {
  user?: CurrentUserFragment | null;
};

export type TTabItem = {
  text: string;
  url: string;
  iconName: TIcon['name'];
  testId: string;
};
