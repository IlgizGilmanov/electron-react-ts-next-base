import { FC } from 'react';

import useCurrentUser from 'hooks/useCurrentUser';

import { TAuthTemplate } from './types';
import { PageContentWrapper, FormContentWrapper, FormContent, ImageWrapper } from './styled';

const AuthTemplate: FC<TAuthTemplate> = ({ children, testId = 'auth-template' }) => {
  const { user } = useCurrentUser();

  return !user ? (
    <PageContentWrapper data-testid={testId}>
      <FormContentWrapper>
        <FormContent>{children}</FormContent>
      </FormContentWrapper>
      <ImageWrapper />
    </PageContentWrapper>
  ) : null;
};

export default AuthTemplate;
