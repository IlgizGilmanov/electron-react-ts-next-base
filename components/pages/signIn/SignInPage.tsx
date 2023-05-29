import { useEffect } from 'react';

import withAuth from 'lib/auth/withAuth';
import withNotAuthSecurity from 'lib/auth/withNotAuthSecurity';
import withGetDataFromTree from 'lib/apollo/withGetDataFromTree';
import { TNextPage } from 'lib/apollo/types';
import { SIGNUP } from 'config/routes';
import AuthTemplate from 'components/shared/templates/AuthTemplate';
import ActionLink from 'components/shared/atoms/ActionLink';

import SignInForm from './components/SignInForm';
import { Title, Subtitle, NotMember } from './styled';

const SignInPage: TNextPage = () => {
  useEffect(() => {
    const callback = async () => {
      // const response = await window.versions?.ping?.();
      // eslint-disable-next-line no-console
      // console.log(response); // prints out 'pong'
    };
    callback();
  });

  return (
    <AuthTemplate testId="signin-page">
      <Title>Login to account</Title>
      <Subtitle>Enter your credentials to use ChatterAI</Subtitle>
      <SignInForm />
      <p>
        <NotMember>Not a member?</NotMember>
        <ActionLink href={SIGNUP} label="Create Account" $weight={500} />
      </p>
    </AuthTemplate>
  );
};

export default withGetDataFromTree(withAuth(withNotAuthSecurity(SignInPage)));
