import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithTheme from '__tests__/helpers/renderWithTheme';

import { usePasswordRecovery } from 'lib/apollo/hooks/actions/auth';

import RecoveryEmailForm from './RecoveryEmailForm';

jest.mock('lib/apollo/hooks/actions/auth');

const mockedUsePasswordRecovery = usePasswordRecovery as jest.Mock;

describe('RecoveryEmailForm', () => {
  const mockPasswordRecovery = jest.fn();
  const mockUsePasswordRecovery = jest.fn(() => [mockPasswordRecovery]);

  beforeEach(() => {
    mockedUsePasswordRecovery.mockImplementation(mockUsePasswordRecovery);
  });

  test.skip('should call RecoveryPassword fn after click "Submit" button', async () => {
    // Arrange
    const inputEmailValue = 'email@gmail.com';
    const expectedValue = {
      email: inputEmailValue,
    };

    // Act
    const user = userEvent.setup();
    render(renderWithTheme(<RecoveryEmailForm />));

    const inputEmail = screen.getByTestId('input-email');
    await user.type(inputEmail, inputEmailValue);

    await user.click(screen.getByTestId('submit-button'));

    await waitFor(() => {
      expect(mockPasswordRecovery).toHaveBeenCalledWith(expectedValue);
    });
  });
});
