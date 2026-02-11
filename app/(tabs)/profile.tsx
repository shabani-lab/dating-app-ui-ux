import { PROFILE_MOCK } from '@/constants/mock-data';
import { Radius, Sizes, Spacing, Typography } from '@/constants/theme';
import { useAppPalette } from '@/hooks/use-app-palette';
import ScreenHeader from '@/components/ui/screen-header';
import { Ionicons } from '@expo/vector-icons';
import React, { useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const palette = useAppPalette();
  const styles = useMemo(() => createStyles(palette), [palette]);

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <ScreenHeader title="PROFILE" leftIcon="settings-outline" rightIcon="notifications-outline" />
      <ScrollView contentContainerStyle={styles.content}>
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
        <View style={styles.quickActions}>
          <View style={styles.quickAction}>
            <Ionicons name="videocam-outline" size={Sizes.iconLg} color={palette.textPrimary} />
            <Text style={styles.quickActionText}>Go Live</Text>
          </View>
          <View style={styles.quickAction}>
            <Ionicons name="cash-outline" size={Sizes.iconLg} color={palette.textPrimary} />
            <Text style={styles.quickActionText}>Payout</Text>
          </View>
          <View style={styles.quickAction}>
            <Ionicons name="stats-chart-outline" size={Sizes.iconLg} color={palette.textPrimary} />
            <Text style={styles.quickActionText}>Insights</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const createStyles = (palette: ReturnType<typeof useAppPalette>) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: palette.background,
    },
    content: {
      paddingHorizontal: Spacing.lg,
      paddingBottom: Spacing.x2,
    },
    headerContent: {
      alignItems: 'center',
      marginBottom: Spacing.x2,
    },
    username: {
      color: palette.textPrimary,
      fontSize: Typography.title.fontSize,
      fontWeight: '700',
      marginTop: Spacing.sm,
    },
    plan: {
      marginTop: Spacing.xs,
      color: palette.accentSoft,
      fontSize: Typography.body.fontSize,
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
      fontSize: Typography.display.fontSize,
      fontWeight: '700',
    },
    label: {
      color: palette.textMuted,
      fontSize: Typography.body.fontSize,
      marginTop: Spacing.xs,
    },
    quickActions: {
      marginTop: Spacing.xl,
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: Spacing.sm,
    },
    quickAction: {
      flex: 1,
      minHeight: Sizes.touchTarget,
      borderRadius: Radius.md,
      borderWidth: 1,
      borderColor: palette.border,
      backgroundColor: palette.surface,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: Spacing.md,
      gap: Spacing.xs,
    },
    quickActionText: {
      color: palette.textPrimary,
      fontSize: Typography.caption.fontSize,
      fontWeight: '600',
    },
  });
