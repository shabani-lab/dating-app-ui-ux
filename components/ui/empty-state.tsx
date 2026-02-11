import { Radius, Spacing } from '@/constants/theme';
import { useAppPalette } from '@/hooks/use-app-palette';
import { Ionicons } from '@expo/vector-icons';
import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type EmptyStateProps = {
  title: string;
  subtitle: string;
  icon?: React.ComponentProps<typeof Ionicons>['name'];
};

export default function EmptyState({ title, subtitle, icon = 'search' }: EmptyStateProps) {
  const palette = useAppPalette();
  const styles = useMemo(() => createStyles(palette), [palette]);

  return (
    <View style={styles.container}>
      <View style={styles.iconWrap}>
        <Ionicons name={icon} size={24} color={palette.textPrimary} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const createStyles = (palette: ReturnType<typeof useAppPalette>) =>
  StyleSheet.create({
    container: {
      marginTop: Spacing.x2,
      alignItems: 'center',
      paddingHorizontal: Spacing.xl,
      gap: Spacing.sm,
    },
    iconWrap: {
      width: 52,
      height: 52,
      borderRadius: Radius.pill,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: palette.surface,
      borderWidth: 1,
      borderColor: palette.border,
    },
    title: {
      color: palette.textPrimary,
      fontSize: 18,
      fontWeight: '700',
      textAlign: 'center',
    },
    subtitle: {
      color: palette.textMuted,
      fontSize: 14,
      textAlign: 'center',
    },
  });
