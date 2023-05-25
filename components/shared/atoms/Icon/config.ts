import * as icons from './assets';

export const configIcons = {
  'arrow-chevron-left': icons.ArrowChevronLeft,
  'arrow-chevron-right': icons.ArrowChevronRight,
  'arrow-chevron-down': icons.ArrowChevronDown,
  'eye-closed': icons.EyeClosed,
  close: icons.Close,
  eye: icons.Eye,
  plus: icons.Plus,
  minus: icons.Minus,
  activity: icons.Activity,
  history: icons.History,
  settings: icons.Settings,
};
export type IconKeys = keyof typeof configIcons;
