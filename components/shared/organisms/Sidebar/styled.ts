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

export const Tabs = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const TabItem = styled.li(
  ({ theme: { colors } }) => css`
    a,
    button {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.75rem 0;
      margin: 0;
      line-height: 1;
      color: ${colors.black};
      cursor: pointer;
      background: none;
      border: none;
      font-size: 1rem;
      text-align: left;
      &:hover,
      &:active,
      &:focus {
        color: ${colors.green_500};
      }
    }
  `,
);
