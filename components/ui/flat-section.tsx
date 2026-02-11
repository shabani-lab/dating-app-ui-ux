import { Borders, Radius, Spacing } from '@/constants/theme';
import { useAppPalette } from '@/hooks/use-app-palette';
import React, { useMemo } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

type FlatSectionProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default function FlatSection({ children, style }: FlatSectionProps) {
  const palette = useAppPalette();
  const styles = useMemo(() => createStyles(palette), [palette]);

  return <View style={[styles.section, style]}>{children}</View>;
}

const createStyles = (palette: ReturnType<typeof useAppPalette>) =>
  StyleSheet.create({
    section: {
      backgroundColor: palette.surface,
      borderColor: palette.border,
      borderWidth: Borders.hairline,
      borderRadius: Radius.lg,
      paddingHorizontal: Spacing.md,
      paddingVertical: Spacing.sm,
    },
  });
