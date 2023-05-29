import styled, { css } from 'styled-components';

export const Wrapper = styled.ul`
  margin-top: 1.125rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
  list-style: none;
`;

export const TabGroup = styled.div``;

export const TabGroupName = styled.div(
  ({ theme: { colors } }) => css`
    margin-bottom: 0.25rem;
    padding-left: 0.625rem;
    color: ${colors.custom_grey_4};
    font-size: 0.875rem;
    line-height: 1.25rem;
  `,
);

export const TabItem = styled.li<{ $isActive: boolean }>(
  ({ $isActive, theme: { colors } }) => css`
    a,
    button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin: 0;
      padding: 0.625rem;
      cursor: pointer;
      background: none;
      border: none;
      border-radius: 0.5rem;
      font-size: 0.875rem;
      font-weight: 300;
      line-height: 1.25rem;
      color: ${colors.secondary_text};
      text-align: left;

      ${$isActive &&
      css`
        color: ${colors.primary};
        background-color: ${colors.global_blue_200};
      `}

      &:hover,
      &:active,
      &:focus {
        color: ${colors.primary};
        background-color: ${colors.global_blue_200};

        path {
          fill: ${colors.primary};
        }
      }
    }
  `,
);
