import styled, { css } from 'styled-components';

export const Title = styled.h1`
  margin: 0.75rem 0;
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 500;
`;

export const Subtitle = styled.p`
  margin: 0 0 1.5rem;
  font-weight: 300;
`;

export const NotMember = styled.span(
  ({ theme: { colors } }) => css`
    margin-right: 0.5rem;
    color: ${colors.secondaryText};
    font-size: 0.875rem;
    line-height: 1rem;
  `,
);
