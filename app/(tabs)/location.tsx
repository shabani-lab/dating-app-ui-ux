import { LOCATIONS } from '@/constants/mock-data';
import { Radius, Spacing } from '@/constants/theme';
import { useAppPalette } from '@/hooks/use-app-palette';
import { Ionicons } from '@expo/vector-icons';
import CardSkeleton from '@/components/ui/card-skeleton';
import ScreenHeader from '@/components/ui/screen-header';
import React, { useEffect, useMemo, useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LocationScreen() {
  const palette = useAppPalette();
  const styles = useMemo(() => createStyles(palette), [palette]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 350);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScreenHeader title="HOT LOCATIONS" leftIcon="navigate-circle-outline" rightIcon="options-outline" />
      <ScrollView contentContainerStyle={styles.content}>
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <CardSkeleton key={`location-skeleton-${index}`} height={190} />
            ))
          : LOCATIONS.map((spot) => (
              <ImageBackground
                key={spot.id}
                source={{ uri: spot.image }}
                style={styles.card}
                imageStyle={styles.cardImage}>
                <View style={styles.overlay} />
                <View style={styles.cardTop}>
                  <Text style={styles.city}>{spot.city}</Text>
                  <Text style={styles.country}>{spot.country}</Text>
                </View>
                <View style={styles.cardBottom}>
                  <View style={styles.row}>
                    <Ionicons name="people-outline" size={14} color={palette.textPrimary} />
                    <Text style={styles.meta}>{spot.activeUsers} active users</Text>
                  </View>
                  <View style={styles.row}>
                    <Ionicons name="ribbon-outline" size={14} color={palette.textPrimary} />
                    <Text style={styles.meta}>Top: {spot.topCategory}</Text>
                  </View>
                  <View style={styles.row}>
                    <Ionicons name="navigate-outline" size={14} color={palette.textPrimary} />
                    <Text style={styles.meta}>{spot.distanceKm.toFixed(1)} km away</Text>
                  </View>
                </View>
              </ImageBackground>
            ))}
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
      paddingHorizontal: 14,
      paddingBottom: 30,
      gap: Spacing.lg,
    },
    card: {
      height: 190,
      borderRadius: Radius.lg,
      overflow: 'hidden',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: palette.border,
    },
    cardImage: {
      borderRadius: Radius.lg,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: palette.overlayStrong,
    },
    cardTop: {
      paddingHorizontal: Spacing.md,
      paddingTop: Spacing.md,
    },
    city: {
      color: palette.textPrimary,
      fontSize: 22,
      fontWeight: '700',
    },
    country: {
      color: palette.textMuted,
      fontSize: 14,
    },
    cardBottom: {
      paddingHorizontal: Spacing.md,
      paddingBottom: Spacing.md,
      gap: Spacing.xs + 2,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.xs + 2,
    },
    meta: {
      color: palette.textPrimary,
      fontSize: 13,
      fontWeight: '500',
    },
  });
