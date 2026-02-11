import { PROFILE_MOCK } from '@/constants/mock-data';
import { Radius, Spacing } from '@/constants/theme';
import { useAppPalette } from '@/hooks/use-app-palette';
import ScreenHeader from '@/components/ui/screen-header';
import { Ionicons } from '@expo/vector-icons';
import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const palette = useAppPalette();
  const styles = useMemo(() => createStyles(palette), [palette]);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScreenHeader title="PROFILE" leftIcon="settings-outline" rightIcon="notifications-outline" />
      <View style={styles.headerContent}>
        <Ionicons name="person-circle" size={72} color={palette.accent} />
        <Text style={styles.username}>{PROFILE_MOCK.username}</Text>
        <Text style={styles.plan}>{PROFILE_MOCK.plan} plan</Text>
      </View>

      <View style={styles.cards}>
        <View style={styles.card}>
          <Text style={styles.value}>${PROFILE_MOCK.earningsThisWeek}</Text>
          <Text style={styles.label}>Earnings this week</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.value}>{PROFILE_MOCK.streamHours}h</Text>
          <Text style={styles.label}>Stream hours</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.value}>{PROFILE_MOCK.privateBookings}</Text>
          <Text style={styles.label}>Private bookings</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const createStyles = (palette: ReturnType<typeof useAppPalette>) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: palette.background,
      paddingHorizontal: Spacing.lg,
    },
    headerContent: {
      alignItems: 'center',
      marginBottom: Spacing.x3 - 4,
    },
    username: {
      color: palette.textPrimary,
      fontSize: 22,
      fontWeight: '700',
      marginTop: Spacing.sm,
    },
    plan: {
      marginTop: Spacing.xs,
      color: palette.accentSoft,
      fontSize: 14,
      fontWeight: '600',
    },
    cards: {
      gap: Spacing.md,
    },
    card: {
      backgroundColor: palette.surface,
      borderRadius: Radius.md,
      padding: Spacing.lg,
      borderWidth: 1,
      borderColor: palette.border,
    },
    value: {
      color: palette.textPrimary,
      fontSize: 24,
      fontWeight: '700',
    },
    label: {
      color: palette.textMuted,
      fontSize: 13,
      marginTop: Spacing.xs,
    },
  });
