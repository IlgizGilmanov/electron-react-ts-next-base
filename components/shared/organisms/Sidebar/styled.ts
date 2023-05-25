import styled, { css } from 'styled-components';

export const SidebarWrapper = styled.nav(
  ({ theme: { colors } }) => css`
    flex: 0 0 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5rem 1rem;
    background-color: ${colors.grey_100};
  `,
);
