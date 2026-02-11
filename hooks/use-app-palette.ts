import { getAppPalette, type AppColorMode } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export function useAppPalette() {
  const mode: AppColorMode = (useColorScheme() ?? 'dark') === 'dark' ? 'dark' : 'light';
  return getAppPalette(mode);
}
