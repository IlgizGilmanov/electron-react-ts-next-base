import styled, { css } from 'styled-components';

export const Wrapper = styled.div(
  ({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${colors.primary};
    line-height: 1.125rem;
    font-weight: 500;
  `,
);

export const LogoWrapper = styled.div(
  ({ theme: { colors } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    background-color: ${colors.primary};
    border-radius: 0.25rem;
  `,
);
