import withAuth from 'lib/auth/withAuth';
import withGetDataFromTree from 'lib/apollo/withGetDataFromTree';
import withNotAuthSecurity from 'lib/auth/withNotAuthSecurity';
import { TNextPage } from 'lib/apollo/types';
import { SIGNIN } from 'config/routes';
import AuthTemplate, { AuthSubtitle, AuthTitle } from 'components/shared/templates/AuthTemplate';
import ActionLink from 'components/shared/atoms/ActionLink';
import Icon from 'components/shared/atoms/Icon';

import RecoveryPasswordForm from './components/RecoveryPasswordForm';
import { ActionLinkWrapper } from './styled';

const RecoveryPasswordPage: TNextPage = () => {
  return (
    <AuthTemplate testId="recovery-password-page">
      <AuthTitle>Reset your password</AuthTitle>
      <AuthSubtitle>
        We&apos;ll email you instructions to reset your password.
        <br />
        Follow the steps provided to reset your password.
      </AuthSubtitle>
      <RecoveryPasswordForm />
      <ActionLinkWrapper>
        <Icon name="arrow-left" $color="primary" />
        <ActionLink href={SIGNIN} label="Back to login" $weight={500} />
      </ActionLinkWrapper>
    </AuthTemplate>
  );
};

export default withGetDataFromTree(withAuth(withNotAuthSecurity(RecoveryPasswordPage)));
