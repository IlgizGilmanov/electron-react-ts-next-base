import styled, { css } from 'styled-components';

export const Wrapper = styled.div(
  ({ theme: { colors } }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid ${colors.grey_300};
  `,
);

export const Title = styled.h1`
  font-size: 1.25rem;
  line-height: 2rem;
  font-weight: 500;
`;

export const Controls = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.25rem;
`;
