import styled, { css } from 'styled-components';

export const Option = styled.button<{ $isActive: boolean; $isSelected: boolean }>(
  ({ $isActive, $isSelected, theme: { colors } }) => css`
    padding: 0.675rem;
    background-color: ${$isActive ? colors.customGrey2 : colors.white};
    border: 0;
    border-radius: 0.375rem;
    text-align: left;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: ${$isSelected ? 'bold' : ''};
    color: ${colors.primaryText};
  `,
);
