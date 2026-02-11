import { Radius, Sizes } from '@/constants/theme';
import { useAppPalette } from '@/hooks/use-app-palette';
import { Ionicons } from '@expo/vector-icons';
import React, { useMemo } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import AnimatedPressable from '@/components/ui/animated-pressable';

type IconName = React.ComponentProps<typeof Ionicons>['name'];

type IconButtonProps = {
  icon: IconName;
  onPress?: () => void;
  accessibilityLabel?: string;
  style?: StyleProp<ViewStyle>;
  iconColor?: string;
  disabled?: boolean;
};

export default function IconButton({
  icon,
  onPress,
  accessibilityLabel,
  style,
  iconColor,
  disabled = false,
}: IconButtonProps) {
  const palette = useAppPalette();
  const styles = useMemo(() => createStyles(palette), [palette]);

  return (
    <AnimatedPressable
      style={[styles.button, style]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      disabled={disabled}>
      <Ionicons name={icon} size={Sizes.iconLg} color={iconColor ?? palette.textPrimary} />
    </AnimatedPressable>
  );
}

const createStyles = (palette: ReturnType<typeof useAppPalette>) =>
  StyleSheet.create({
    button: {
      width: Sizes.touchTarget,
      height: Sizes.touchTarget,
      borderRadius: Radius.pill,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: palette.surface,
      borderWidth: 1,
      borderColor: palette.border,
    },
  });
