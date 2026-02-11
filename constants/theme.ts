/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const tintColorLight = '#E42E6E';
const tintColorDark = '#FF3B78';

export const Colors = {
  light: {
    text: '#101521',
    background: '#F3F5FA',
    tint: tintColorLight,
    icon: '#64748B',
    tabIconDefault: '#94A3B8',
    tabIconSelected: tintColorLight,
    card: '#FFFFFF',
    cardMuted: '#ECEFF6',
    border: '#DDE3ED',
    success: '#1EA97C',
  },
  dark: {
    text: '#F4F6FD',
    background: '#171729',
    tint: tintColorDark,
    icon: '#A9B0C6',
    tabIconDefault: '#95A0BD',
    tabIconSelected: tintColorDark,
    card: '#25253A',
    cardMuted: '#2E2E46',
    border: '#3C4460',
    success: '#2ED09A',
  },
};

export type AppColorMode = 'light' | 'dark';

export type AppPalette = {
  background: string;
  surface: string;
  surfaceMuted: string;
  border: string;
  textPrimary: string;
  textMuted: string;
  accent: string;
  accentSoft: string;
  success: string;
  overlayStrong: string;
  overlaySoft: string;
};

const appPalettes: Record<AppColorMode, AppPalette> = {
  light: {
    background: Colors.light.background,
    surface: Colors.light.card,
    surfaceMuted: Colors.light.cardMuted,
    border: Colors.light.border,
    textPrimary: Colors.light.text,
    textMuted: '#586174',
    accent: Colors.light.tint,
    accentSoft: '#F884AC',
    success: Colors.light.success,
    overlayStrong: 'rgba(16, 21, 33, 0.55)',
    overlaySoft: 'rgba(16, 21, 33, 0.35)',
  },
  dark: {
    background: Colors.dark.background,
    surface: Colors.dark.card,
    surfaceMuted: Colors.dark.cardMuted,
    border: Colors.dark.border,
    textPrimary: Colors.dark.text,
    textMuted: '#B5BDD5',
    accent: Colors.dark.tint,
    accentSoft: '#FF8FB2',
    success: Colors.dark.success,
    overlayStrong: 'rgba(8, 9, 17, 0.60)',
    overlaySoft: 'rgba(8, 9, 17, 0.40)',
  },
};

export function getAppPalette(mode: AppColorMode): AppPalette {
  return appPalettes[mode];
}

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  x2: 24,
  x3: 32,
} as const;

export const Radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  pill: 999,
} as const;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
