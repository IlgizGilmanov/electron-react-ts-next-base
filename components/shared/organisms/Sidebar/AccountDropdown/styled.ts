import styled, { css } from 'styled-components';

export const StyledReference = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const Avatar = styled.div(
  ({ theme: { colors } }) => css`
    min-width: 30px;
    min-height: 30px;
    border-radius: 50%;
    background-color: ${colors.grey_300};
  `,
);

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  min-width: 180px;
`;
