import styled, { css } from 'styled-components';

export const SidebarWrapper = styled.nav(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ theme: { colors } }) => css`
    flex: 0 0 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem 1.25rem;
  `,
);
