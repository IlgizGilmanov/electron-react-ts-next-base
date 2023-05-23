import { useEffect } from 'react';

import withAuth from 'lib/auth/withAuth';
import withNotAuthSecurity from 'lib/auth/withNotAuthSecurity';
import withGetDataFromTree from 'lib/apollo/withGetDataFromTree';

import { TNextPage } from 'lib/apollo/types';

import DefaultTemplate from 'components/shared/templates/DefaultTemplate';

import SignInForm from './components/SignInForm';

import { PageContentWrapper } from './styled';

const SignInPage: TNextPage = () => {
  useEffect(() => {
    const callback = async () => {
      const response = await window.versions?.ping?.();
      // eslint-disable-next-line no-console
      console.log(response); // prints out 'pong'
    };
    callback();
  });

  return (
    <DefaultTemplate testId="signin-page">
      <PageContentWrapper>
        <SignInForm />
      </PageContentWrapper>
    </DefaultTemplate>
  );
};

export default withGetDataFromTree(withAuth(withNotAuthSecurity(SignInPage)));
