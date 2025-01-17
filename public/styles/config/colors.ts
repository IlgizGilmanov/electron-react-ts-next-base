import { Property } from 'csstype';

export const colorShades = [
  'grey',
  'cool_grey',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'cyan',
  'light_blue',
  'blue',
  'indigo',
  'purple',
  'pink',
  'rose',
] as const;
export type ColorShades = (typeof colorShades)[number];

export const colorIntensities = [
  '900',
  '800',
  '700',
  '600',
  '500',
  '400',
  '300',
  '200',
  '100',
  '50',
] as const;
export type ColorIntensity = (typeof colorIntensities)[number];

type RegularColors = `${ColorShades}_${ColorIntensity}`;

type CustomColors =
  | 'primary'
  | 'primary_text'
  | 'secondary_text'
  | 'input_placeholder'
  | 'custom_grey_1'
  | 'custom_grey_2'
  | 'custom_grey_3'
  | 'custom_grey_4'
  | 'global_blue_200';

export type ColorKeys = 'black' | 'white' | 'transparent' | RegularColors | CustomColors;

type Colors = { [key in ColorKeys]: Property.Color };

export const configColors: Colors = {
  primary: '#6417C4',
  primary_text: '#0A090B',
  secondary_text: '#4F4D55',
  input_placeholder: '#7F7D83',
  custom_grey_1: '#E6E6E6',
  custom_grey_2: '#F6F6F6',
  custom_grey_3: '#F5F5F5',
  custom_grey_4: '#ADACB0',
  global_blue_200: '#F5F8FD',

  black: '#111827',
  white: '#FFFFFF',
  transparent: 'transparent',

  grey_900: '#18181B',
  grey_800: '#27272A',
  grey_700: '#3F3F46',
  grey_600: '#52525B',
  grey_500: '#71717A',
  grey_400: '#A1A1AA',
  grey_300: '#D4D4D8',
  grey_200: '#E4E4E7',
  grey_100: '#F4F4F5',
  grey_50: '#FAFAFA',

  cool_grey_900: '#111827',
  cool_grey_800: '#1F2937',
  cool_grey_700: '#374151',
  cool_grey_600: '#4B5563',
  cool_grey_500: '#6B7280',
  cool_grey_400: '#9ca3af',
  cool_grey_300: '#d1d5db',
  cool_grey_200: '#E5E7EB',
  cool_grey_100: '#f3f4f6',
  cool_grey_50: '#F9FAFB',

  red_900: '#7F1D1D',
  red_800: '#991B1B',
  red_700: '#B91C1C',
  red_600: '#DC2626',
  red_500: '#EF4444',
  red_400: '#F87171',
  red_300: '#FCA5A5',
  red_200: '#FECACA',
  red_100: '#FEE2E2',
  red_50: '#FEF2F2',

  orange_900: '#7C2D12',
  orange_800: '#9A3412',
  orange_700: '#C2410C',
  orange_600: '#EA580C',
  orange_500: '#F97316',
  orange_400: '#fb923c',
  orange_300: '#FDBA74',
  orange_200: '#FED7AA',
  orange_100: '#FFEDD5',
  orange_50: '#FFF7ED',

  yellow_900: '#78350F',
  yellow_800: '#92400E',
  yellow_700: '#B45309',
  yellow_600: '#D97706',
  yellow_500: '#F59E0B',
  yellow_400: '#FBBF24',
  yellow_300: '#FCD34D',
  yellow_200: '#FDE68A',
  yellow_100: '#FEF3C7',
  yellow_50: '#FFFBEB',

  green_900: '#064E3B',
  green_800: '#065F46',
  green_700: '#047857',
  green_600: '#059669',
  green_500: '#10B981',
  green_400: '#34D399',
  green_300: '#6EE7B7',
  green_200: '#A7F3D0',
  green_100: '#D1FAE5',
  green_50: '#ECFDF5',

  teal_900: '#134E4A',
  teal_800: '#115E59',
  teal_700: '#0F766E',
  teal_600: '#0D9488',
  teal_500: '#14B8A6',
  teal_400: '#2DD4BF',
  teal_300: '#5EEAD4',
  teal_200: '#99F6E4',
  teal_100: '#CCFBF1',
  teal_50: '#F0FDFA',

  cyan_900: '#164E63',
  cyan_800: '#155E75',
  cyan_700: '#0E7490',
  cyan_600: '#0891B2',
  cyan_500: '#06B6D4',
  cyan_400: '#22D3EE',
  cyan_300: '#67E8F9',
  cyan_200: '#A5F3FC',
  cyan_100: '#CFFAFE',
  cyan_50: '#ECFEFF',

  light_blue_900: '#0C4A6E',
  light_blue_800: '#075985',
  light_blue_700: '#0369A1',
  light_blue_600: '#0284c7',
  light_blue_500: '#0EA5E9',
  light_blue_400: '#38BDF8',
  light_blue_300: '#7dd3fc',
  light_blue_200: '#BAE6FD',
  light_blue_100: '#E0F2FE',
  light_blue_50: '#F0F9FF',

  blue_900: '#1E3A8A',
  blue_800: '#1E40AF',
  blue_700: '#1D4ED8',
  blue_600: '#2563EB',
  blue_500: '#3B82F6',
  blue_400: '#60A5FA',
  blue_300: '#93C5FD',
  blue_200: '#BFDBFE',
  blue_100: '#DBEAFE',
  blue_50: '#EFF6FF',

  indigo_900: '#312E81',
  indigo_800: '#3730A3',
  indigo_700: '#4338CA',
  indigo_600: '#4F46E5',
  indigo_500: '#6366F1',
  indigo_400: '#818CF8',
  indigo_300: '#A5B4FC',
  indigo_200: '#C7D2FE',
  indigo_100: '#E0E7FF',
  indigo_50: '#EEF2FF',

  purple_900: '#4C1D95',
  purple_800: '#5B21B6',
  purple_700: '#6D28D9',
  purple_600: '#7C3AED',
  purple_500: '#8B5CF6',
  purple_400: '#A78BFA',
  purple_300: '#C4B5FD',
  purple_200: '#DDD6FE',
  purple_100: '#EDE9FE',
  purple_50: '#F5F3FF',

  pink_900: '#831843',
  pink_800: '#9D174D',
  pink_700: '#BE185D',
  pink_600: '#DB2777',
  pink_500: '#EC4899',
  pink_400: '#F472B6',
  pink_300: '#F9A8D4',
  pink_200: '#FBCFE8',
  pink_100: '#FCE7F3',
  pink_50: '#FDF2F8',

  rose_900: '#881337',
  rose_800: '#9F1239',
  rose_700: '#BE123C',
  rose_600: '#E11D48',
  rose_500: '#F43F5E',
  rose_400: '#FB7185',
  rose_300: '#FDA4AF',
  rose_200: '#FECDD3',
  rose_100: '#FFE4E6',
  rose_50: '#FFF1F2',
};
