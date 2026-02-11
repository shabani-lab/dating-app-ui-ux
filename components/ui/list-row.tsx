import { Sizes, Spacing, Typography } from '@/constants/theme';
import { useAppPalette } from '@/hooks/use-app-palette';
import { Ionicons } from '@expo/vector-icons';
import React, { useMemo } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import AnimatedPressable from '@/components/ui/animated-pressable';

type IconName = React.ComponentProps<typeof Ionicons>['name'];

type ListRowProps = {
  icon?: IconName;
  label: string;
  value?: string;
  rightIcon?: IconName;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export default function ListRow({ icon, label, value, rightIcon, onPress, style }: ListRowProps) {
  const palette = useAppPalette();
  const styles = useMemo(() => createStyles(palette), [palette]);

  const content = (
    <View style={[styles.row, style]}>
      <View style={styles.leftWrap}>
        {icon ? <Ionicons name={icon} size={Sizes.iconMd} color={palette.textMuted} /> : null}
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.rightWrap}>
        {value ? <Text style={styles.value}>{value}</Text> : null}
        {rightIcon ? <Ionicons name={rightIcon} size={Sizes.iconMd} color={palette.textMuted} /> : null}
      </View>
    </View>
  );

  if (onPress) {
    return (
      <AnimatedPressable onPress={onPress} style={styles.touchWrap}>
        {content}
      </AnimatedPressable>
    );
  }

  return content;
}

const createStyles = (palette: ReturnType<typeof useAppPalette>) =>
  StyleSheet.create({
    touchWrap: {
      borderRadius: Spacing.sm,
    },
    row: {
      minHeight: Sizes.touchTarget,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: Spacing.sm,
      paddingHorizontal: Spacing.xs,
      gap: Spacing.md,
    },
    leftWrap: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.sm,
      flex: 1,
    },
    rightWrap: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.sm,
      flexShrink: 0,
    },
    label: {
      color: palette.textPrimary,
      fontSize: Typography.body.fontSize,
      lineHeight: Typography.body.lineHeight,
      fontWeight: '600',
    },
    value: {
      color: palette.textMuted,
      fontSize: Typography.caption.fontSize,
      lineHeight: Typography.caption.lineHeight,
      fontWeight: '600',
    },
  });
