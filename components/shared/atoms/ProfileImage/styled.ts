import styled from 'styled-components';

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  font-size: 0;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: -9999px;
  right: -9999px;
  bottom: -9999px;
  left: -9999px;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
`;
