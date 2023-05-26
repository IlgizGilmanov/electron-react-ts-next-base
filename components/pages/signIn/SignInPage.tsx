import { useEffect } from 'react';

import withAuth from 'lib/auth/withAuth';
import withNotAuthSecurity from 'lib/auth/withNotAuthSecurity';
import withGetDataFromTree from 'lib/apollo/withGetDataFromTree';
import { TNextPage } from 'lib/apollo/types';
import { SIGNUP } from 'config/routes';
import DefaultTemplate from 'components/shared/templates/DefaultTemplate';
import ActionLink from 'components/shared/atoms/ActionLink';

import SignInForm from './components/SignInForm';
import {
  FormContent,
  Title,
  Subtitle,
  PageContentWrapper,
  NotMember,
  ImageWrapper,
  FormContentWrapper,
} from './styled';

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
    <DefaultTemplate testId="signin-page">
      <PageContentWrapper>
        <FormContentWrapper>
          <FormContent>
            <Title>Login to account</Title>
            <Subtitle>Enter your credentials to access your account</Subtitle>
            <SignInForm />
            <p>
              <NotMember>Not a member?</NotMember>
              <ActionLink href={SIGNUP} label="Create account" $weight={500} />
            </p>
          </FormContent>
        </FormContentWrapper>
        <ImageWrapper />
      </PageContentWrapper>
    </DefaultTemplate>
  );
};

export default withGetDataFromTree(withAuth(withNotAuthSecurity(SignInPage)));
