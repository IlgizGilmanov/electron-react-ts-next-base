import styled, { css } from 'styled-components';

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
  width: 29rem; // 400px
  padding: 2rem;
`;

export const ImageWrapper = styled.div`
  flex: 1 1 50%;
  background-image: url('${process.env.ASSET_HOST}/images/auth-bg.png');
  background-color: #9babdb; // average image color
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 0.75rem;
`;

export const AuthTitle = styled.h1`
  margin: 0 0 0.75rem;
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 500;
`;

export const AuthSubtitle = styled.p`
  margin: 0 0 1.5rem;
  font-weight: 300;
  line-height: 22px;
`;

export const AuthRegularText = styled.span(
  ({ theme: { colors } }) => css`
    margin-right: 0.5rem;
    color: ${colors.secondary_text};
    font-size: 0.875rem;
    line-height: 1rem;
  `,
);
