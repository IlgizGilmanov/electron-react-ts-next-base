import styled, { css } from 'styled-components';

export const Option = styled.button(
  ({ theme: { colors } }) => css`
    border: 0;
    padding: 0.75rem;
    text-align: left;

    &:hover,
    &:focus {
      background-color: ${colors.grey_300};
    }
  `,
);
