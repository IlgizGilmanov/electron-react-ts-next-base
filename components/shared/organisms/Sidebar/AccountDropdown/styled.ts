import styled, { css } from 'styled-components';

import { BaseStyledList } from 'components/shared/molecules/DropdownMenu';

export const StyledReference = styled.div(
  ({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.625rem;
    border: 1px solid ${colors.customGrey1};
    border-radius: 0.375rem;
    cursor: pointer;
    box-shadow: 0px 3px 4px -5px rgba(24, 24, 28, 0.03), 0px 1px 2px rgba(24, 24, 28, 0.04);

    &:hover,
    &:focus {
      background-color: ${colors.customGrey3};
    }
  `,
);

export const AvatarWrapper = styled.div`
  width: 2rem;
  height: 2rem;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const UserName = styled.span(
  ({ theme: { colors } }) => css`
    color: ${colors.primaryText};
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
  `,
);

export const UserEmail = styled.span(
  ({ theme: { colors } }) => css`
    color: ${colors.secondaryText};
    font-size: 0.625rem;
    line-height: 0.75rem;
    font-weight: 300;
  `,
);

export const StyledList = styled(BaseStyledList)``;
