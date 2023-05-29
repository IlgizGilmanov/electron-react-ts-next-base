import withAuth from 'lib/auth/withAuth';
import withGetDataFromTree from 'lib/apollo/withGetDataFromTree';
import withNotAuthSecurity from 'lib/auth/withNotAuthSecurity';
import { TNextPage } from 'lib/apollo/types';
import { SIGNIN } from 'config/routes';
import AuthTemplate, {
  AuthRegularText,
  AuthSubtitle,
  AuthTitle,
} from 'components/shared/templates/AuthTemplate';
import ActionLink from 'components/shared/atoms/ActionLink';

import SignUpForm from './components/SignUpForm';

const SignUpPage: TNextPage = () => {
  return (
    <AuthTemplate testId="signup-page">
      <AuthTitle>Create account</AuthTitle>
      <AuthSubtitle>Create an account to start using ChatterAI</AuthSubtitle>
      <SignUpForm />
      <p>
        <AuthRegularText>Already a member?</AuthRegularText>
        <ActionLink href={SIGNIN} label="Login" $weight={500} />
      </p>
    </AuthTemplate>
  );
};

export default withGetDataFromTree(withAuth(withNotAuthSecurity(SignUpPage)));
