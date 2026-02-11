import { Borders, Spacing } from '@/constants/theme';
import { useAppPalette } from '@/hooks/use-app-palette';
import React, { useMemo } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

type SeparatorProps = {
  inset?: number;
  style?: StyleProp<ViewStyle>;
};

export default function Separator({ inset = 0, style }: SeparatorProps) {
  const palette = useAppPalette();
  const styles = useMemo(() => createStyles(palette), [palette]);

  return <View style={[styles.separator, { marginLeft: inset, marginVertical: Spacing.xs }, style]} />;
}

const createStyles = (palette: ReturnType<typeof useAppPalette>) =>
  StyleSheet.create({
    separator: {
      height: Borders.hairline,
      backgroundColor: palette.border,
      width: '100%',
    },
  });
