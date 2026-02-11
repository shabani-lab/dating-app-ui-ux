import { Spacing, Typography } from '@/constants/theme';
import { useAppPalette } from '@/hooks/use-app-palette';
import React, { ReactNode, useMemo } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

type SectionHeaderProps = {
  title?: string;
  caption?: string;
  rightElement?: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default function SectionHeader({ title, caption, rightElement, style }: SectionHeaderProps) {
  const palette = useAppPalette();
  const styles = useMemo(() => createStyles(palette), [palette]);

  if (!title && !caption && !rightElement) {
    return null;
  }

  return (
    <View style={[styles.container, style]}>
      <View style={styles.textWrap}>
        {title ? <Text style={styles.title}>{title}</Text> : null}
        {caption ? <Text style={styles.caption}>{caption}</Text> : null}
      </View>
      {rightElement ? <View style={styles.rightSlot}>{rightElement}</View> : null}
    </View>
  );
}

const createStyles = (palette: ReturnType<typeof useAppPalette>) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: Spacing.md,
    },
    textWrap: {
      flex: 1,
      gap: Spacing.xs,
    },
    title: {
      color: palette.textPrimary,
      fontSize: Typography.subtitle.fontSize,
      lineHeight: Typography.subtitle.lineHeight,
      fontWeight: '700',
    },
    caption: {
      color: palette.textMuted,
      fontSize: Typography.caption.fontSize,
      lineHeight: Typography.caption.lineHeight,
      fontWeight: '600',
      letterSpacing: 0.2,
    },
    rightSlot: {
      flexShrink: 0,
    },
  });
