import withAuth from 'lib/auth/withAuth';
import withAuthSecurity from 'lib/auth/withAuthSecurity';
import withGetDataFromTree from 'lib/apollo/withGetDataFromTree';
import { TNextPage } from 'lib/apollo/types';

import DefaultTemplate from 'components/shared/templates/DefaultTemplate';
import PageHeader from 'components/shared/molecules/PageHeader';

import { Content } from './styled';

export const HistoryPage: TNextPage = () => {
  return (
    <DefaultTemplate>
      <PageHeader title="History" />
      <Content>History page content</Content>
    </DefaultTemplate>
  );
};

export default withGetDataFromTree(withAuth(withAuthSecurity(HistoryPage)));