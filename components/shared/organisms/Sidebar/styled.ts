import styled, { css } from 'styled-components';

export const SidebarWrapper = styled.nav(
  ({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 250px;
    padding: 1rem;
    background-color: ${colors.grey_100};
  `,
);
