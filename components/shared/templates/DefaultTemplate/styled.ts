import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 600px;
`;

export const PageContent = styled.div(
  ({ theme: { down, breakpoints } }) =>
    css`
      padding: 2rem 1rem;
      width: 100%;
      max-width: ${breakpoints.xl};

      ${down(breakpoints.xl)} {
        max-width: 100%;
      }
    `,
);
