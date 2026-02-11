import { Radius, Sizes, Spacing, Typography } from '@/constants/theme';
import { useAppPalette } from '@/hooks/use-app-palette';
import { Ionicons } from '@expo/vector-icons';
import React, { useMemo } from 'react';
import { StyleProp, StyleSheet, TextInput, View, ViewStyle } from 'react-native';
import AnimatedPressable from '@/components/ui/animated-pressable';

type IconName = React.ComponentProps<typeof Ionicons>['name'];

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onClear?: () => void;
  trailingIcon?: IconName;
  onTrailingPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export default function SearchBar({
  value,
  onChangeText,
  placeholder = 'SEARCH',
  onClear,
  trailingIcon = 'mic',
  onTrailingPress,
  style,
}: SearchBarProps) {
  const palette = useAppPalette();
  const styles = useMemo(() => createStyles(palette), [palette]);

  const handleClear = () => {
    if (onClear) {
      onClear();
      return;
    }

    onChangeText('');
  };

  return (
    <View style={[styles.container, style]}>
      <Ionicons name="search" size={Sizes.iconMd} color={palette.textMuted} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={palette.textMuted}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
      {value.length > 0 ? (
        <AnimatedPressable style={styles.actionButton} onPress={handleClear}>
          <Ionicons name="close-circle" size={Sizes.iconLg} color={palette.textMuted} />
        </AnimatedPressable>
      ) : onTrailingPress ? (
        <AnimatedPressable style={styles.actionButton} onPress={onTrailingPress}>
          <Ionicons name={trailingIcon} size={Sizes.iconMd} color={palette.textMuted} />
        </AnimatedPressable>
      ) : (
        <View style={styles.actionButton}>
          <Ionicons name={trailingIcon} size={Sizes.iconMd} color={palette.textMuted} />
        </View>
      )}
    </View>
  );
}

const createStyles = (palette: ReturnType<typeof useAppPalette>) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: palette.surface,
      borderRadius: Radius.xl,
      borderWidth: 1,
      borderColor: palette.border,
      paddingLeft: Spacing.lg,
      paddingRight: Spacing.sm,
      minHeight: Sizes.inputHeight,
    },
    input: {
      flex: 1,
      color: palette.textPrimary,
      fontSize: Typography.title.fontSize,
      letterSpacing: 0.4,
      paddingVertical: Spacing.md,
      paddingHorizontal: Spacing.sm,
    },
    actionButton: {
      width: Sizes.touchTarget,
      height: Sizes.touchTarget,
      borderRadius: Radius.pill,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
