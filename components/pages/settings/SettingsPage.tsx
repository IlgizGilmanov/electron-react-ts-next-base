import withAuth from 'lib/auth/withAuth';
import withAuthSecurity from 'lib/auth/withAuthSecurity';
import withGetDataFromTree from 'lib/apollo/withGetDataFromTree';
import { TNextPage } from 'lib/apollo/types';

import DefaultTemplate from 'components/shared/templates/DefaultTemplate';
import PageHeader from 'components/shared/molecules/PageHeader';

import { Content } from './styled';

export const SettingsPage: TNextPage = () => {
  return (
    <DefaultTemplate>
      <PageHeader title="Settings" />
      <Content>Settings page content</Content>
    </DefaultTemplate>
  );
};

export default withGetDataFromTree(withAuth(withAuthSecurity(SettingsPage)));
