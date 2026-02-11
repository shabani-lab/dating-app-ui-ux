import { PROFILE_MOCK } from '@/constants/mock-data';
import { Radius, Sizes, Spacing, Typography } from '@/constants/theme';
import { useAppPalette } from '@/hooks/use-app-palette';
import ScreenHeader from '@/components/ui/screen-header';
import { Ionicons } from '@expo/vector-icons';
import React, { useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AnimatedPressable from '@/components/ui/animated-pressable';
import FlatSection from '@/components/ui/flat-section';
import IconButton from '@/components/ui/icon-button';
import ListRow from '@/components/ui/list-row';
import Separator from '@/components/ui/separator';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const palette = useAppPalette();
  const styles = useMemo(() => createStyles(palette), [palette]);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScreenHeader title="PROFILE" leftIcon="settings-outline" rightIcon="notifications-outline" />
      <ScrollView contentContainerStyle={styles.content} keyboardDismissMode="on-drag">
        <View style={styles.headerContent}>
          <Ionicons name="person-circle" size={72} color={palette.accent} />
          <Text style={styles.username}>{PROFILE_MOCK.username}</Text>
          <Text style={styles.plan}>{PROFILE_MOCK.plan} plan</Text>
        </View>

        <FlatSection style={styles.statsSection}>
          <ListRow icon="cash-outline" label="Earnings this week" value={`$${PROFILE_MOCK.earningsThisWeek}`} />
          <Separator inset={Sizes.iconMd + Spacing.md} />
          <ListRow icon="time-outline" label="Stream hours" value={`${PROFILE_MOCK.streamHours}h`} />
          <Separator inset={Sizes.iconMd + Spacing.md} />
          <ListRow icon="sparkles-outline" label="Private bookings" value={`${PROFILE_MOCK.privateBookings}`} />
        </FlatSection>

        <FlatSection style={styles.quickActionsSection}>
          <View style={styles.quickActions}>
            <AnimatedPressable style={styles.quickAction}>
              <IconButton icon="videocam-outline" />
              <Text style={styles.quickActionText}>Live</Text>
            </AnimatedPressable>
            <AnimatedPressable style={styles.quickAction}>
              <IconButton icon="cash-outline" />
              <Text style={styles.quickActionText}>Payout</Text>
            </AnimatedPressable>
            <AnimatedPressable style={styles.quickAction}>
              <IconButton icon="stats-chart-outline" />
              <Text style={styles.quickActionText}>Stats</Text>
            </AnimatedPressable>
          </View>
        </FlatSection>
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
    statsSection: {
      paddingVertical: Spacing.sm,
    },
    quickActionsSection: {
      marginTop: Spacing.xl,
      paddingVertical: Spacing.md,
    },
    quickActions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: Spacing.sm,
    },
    quickAction: {
      flex: 1,
      minHeight: Sizes.touchTarget,
      borderRadius: Radius.sm,
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
