import styled from 'styled-components';

export const StyledReference = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  min-width: 180px;
`;
