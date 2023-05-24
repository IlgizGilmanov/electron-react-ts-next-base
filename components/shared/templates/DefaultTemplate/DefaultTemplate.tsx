import { FC } from 'react';

import useCurrentUser from 'hooks/useCurrentUser';
// import { useSignOut } from 'lib/apollo/hooks/actions/auth';

// import Header from 'components/shared/organisms/Header';
import Sidebar from 'components/shared/organisms/Sidebar';

import { TDefaultTemplate } from './types';
import { Wrapper, PageContent } from './styled';

const DefaultTemplate: FC<TDefaultTemplate> = ({ children, testId = 'default-template' }) => {
  const { user } = useCurrentUser();
  // const [signOut] = useSignOut();

  return (
    <Wrapper data-testid={testId}>
      <Sidebar user={user} />
      {/* <Header user={user} signOut={signOut} /> */}
      <PageContent>{children}</PageContent>
    </Wrapper>
  );
};

export default DefaultTemplate;
