import styled, { css } from 'styled-components';

import { TWidth } from 'public/styles/config/width';

export const FormWrapper = styled.div<TWidth>(
  ({ $width }) => css`
    width: ${$width};

    [type='file'] {
      padding: 0;

      border: none;
    }

    input[type='checkbox'],
    input[type='radio'] {
      width: auto;
    }

    textarea {
      resize: vertical;
    }
  `,
);

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FieldWrapper = styled.div`
  position: relative;

  margin-bottom: 0.75rem;

  /* input,
  textarea,
  select,
  button {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 0.375rem;
    border: 1px solid ${({ theme }) => theme.colors.grey_500};
  } */
`;

export const FieldLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
`;

export const ErrorWrapper = styled.div`
  padding: 0.5rem 0 0 1rem;

  font-size: 0.9rem;
  color: red;
`;
