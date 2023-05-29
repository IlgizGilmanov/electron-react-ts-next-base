import { FC } from 'react';
import styled, { css } from 'styled-components';
import { getMarginStyles } from 'public/styles/config/margin';
import { getSizeStyles, getFillStyles, getRotateStyles, getStrokeStyles } from './helpers';
import { TIcon, TIconBase } from './types';
import { configIcons, IconKeys } from './config';

const IconBase = styled.svg<TIconBase>(
  props => css`
    ${getSizeStyles(props)}
    ${getMarginStyles(props)}
    ${getFillStyles(props)}
    ${getStrokeStyles(props)}
    ${getRotateStyles(props)}
  `,
);

const Icon: FC<TIcon> = ({ name, ...props }) => (
  <IconBase {...props} as={configIcons[name as IconKeys]} />
);

export default Icon;
