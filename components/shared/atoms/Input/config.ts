import theme from 'public/styles/theme';

import { TVariantConfig, TBorderConfig, TMarginConfig } from './types';

export const borderConfig: TBorderConfig = {
  default: {
    default: `border: 1px solid ${theme.colors.customGrey1}`,
    error: `border: 1px solid ${theme.colors.customGrey1}`,
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
  default: 25,
  secondary: 25,
};

export const colorConfig: TVariantConfig = {
  default: theme.colors.primaryText,
  secondary: theme.colors.white,
};
