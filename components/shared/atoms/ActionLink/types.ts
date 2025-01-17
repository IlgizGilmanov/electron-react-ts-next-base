import { HTMLAttributeAnchorTarget, HTMLAttributeReferrerPolicy, ReactNode } from 'react';
import { UrlObject } from 'url';

import { ColorKeys } from 'public/styles/config/colors';
import { TMargin } from 'public/styles/config/margin';

export type TActionLink = TMargin & {
  onClick?: () => void;
  label?: string;
  $size?: number;
  $weight?: number;
  children?: ReactNode;
  $color?: ColorKeys;
  href?: UrlObject | string;
  target?: HTMLAttributeAnchorTarget;
  rel?: HTMLAttributeReferrerPolicy;
};

export type TStyledLinkProps = TMargin & {
  $size: number;
  $weight?: number;
  $color: ColorKeys;
  href?: UrlObject | string;
};
