import styled, { css } from 'styled-components';

export const SidebarWrapper = styled.nav(
  ({ theme: { colors } }) => css`
    flex: 0 0 18.75rem; // 300px
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem 1.25rem;
    border-right: 1px solid ${colors.customGrey1};
  `,
);
