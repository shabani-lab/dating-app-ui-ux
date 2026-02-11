import { Radius, Sizes, Spacing, Typography } from '@/constants/theme';
import { useAppPalette } from '@/hooks/use-app-palette';
import React, { useMemo } from 'react';
import { StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
import AnimatedPressable from '@/components/ui/animated-pressable';

type FilterChipProps = {
  label: string;
  isActive?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export default function FilterChip({ label, isActive = false, onPress, style }: FilterChipProps) {
  const palette = useAppPalette();
  const styles = useMemo(() => createStyles(palette), [palette]);

  return (
    <AnimatedPressable
      style={[styles.chip, isActive ? styles.activeChip : undefined, style]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected: isActive }}>
      <Text style={[styles.text, isActive ? styles.activeText : styles.inactiveText]}>{label}</Text>
    </AnimatedPressable>
  );
}

const createStyles = (palette: ReturnType<typeof useAppPalette>) =>
  StyleSheet.create({
    chip: {
      minHeight: Sizes.touchTarget,
      minWidth: Sizes.touchTarget,
      paddingVertical: Spacing.sm,
      paddingHorizontal: Spacing.lg,
      borderRadius: Radius.pill,
      backgroundColor: palette.surface,
      borderWidth: 1,
      borderColor: palette.border,
      alignItems: 'center',
      justifyContent: 'center',
    },
    activeChip: {
      backgroundColor: palette.accent,
      borderColor: palette.accent,
    },
    text: {
      fontSize: Typography.subtitle.fontSize,
      fontWeight: '600',
    },
    activeText: {
      color: '#FFFFFF',
    },
    inactiveText: {
      color: palette.textPrimary,
    },
  });
