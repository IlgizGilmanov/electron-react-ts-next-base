import withAuth from 'lib/auth/withAuth';
import withAuthSecurity from 'lib/auth/withAuthSecurity';
import withGetDataFromTree from 'lib/apollo/withGetDataFromTree';
import { TNextPage } from 'lib/apollo/types';

import DefaultTemplate from 'components/shared/templates/DefaultTemplate';
import PageHeader from 'components/shared/molecules/PageHeader';

import { Wrapper, Content } from './styled';

export const AssistantPage: TNextPage = () => {
  return (
    <DefaultTemplate>
      <Wrapper>
        <PageHeader title="AI Assistant">
          <div>Tone of voice</div>
        </PageHeader>
        <Content>AI Assistant page content</Content>
      </Wrapper>
    </DefaultTemplate>
  );
};

export default withGetDataFromTree(withAuth(withAuthSecurity(AssistantPage)));
