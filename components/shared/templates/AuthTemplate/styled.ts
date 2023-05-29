import styled from 'styled-components';

export const PageContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

export const FormContentWrapper = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormContent = styled.div`
  width: 25rem; // 400px
  padding: 2rem;
`;

export const ImageWrapper = styled.div`
  flex: 1 1 50%;
  background-image: url('/images/auth-bg.png');
  background-color: #9babdb; // average image color
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 0.75rem;
`;
