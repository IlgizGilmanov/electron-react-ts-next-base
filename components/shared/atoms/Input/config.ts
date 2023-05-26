import theme from 'public/styles/theme';

import { TVariantConfig, TBorderConfig, TMarginConfig } from './types';

export const borderConfig: TBorderConfig = {
  default: {
    default: `border: 1px solid ${theme.colors.inputBorder}`,
    error: `border: 1px solid ${theme.colors.inputBorder}`,
  },
  secondary: {
    default: `border: 1px solid ${theme.colors.white}`,
    error: `border: 1px solid ${theme.colors.white}`,
  },
};

export const backgroundColorConfig: TVariantConfig = {
  default: theme.colors.white,
  secondary: theme.colors.white,
};

export const marginConfig: TMarginConfig = {
  default: 20,
  secondary: 20,
};

export const colorConfig: TVariantConfig = {
  default: theme.colors.primaryText,
  secondary: theme.colors.white,
};
