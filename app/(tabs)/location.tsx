import { LOCATIONS, type LocationSpot } from '@/constants/mock-data';
import { Radius, Sizes, Spacing, Typography } from '@/constants/theme';
import { useAppPalette } from '@/hooks/use-app-palette';
import { Ionicons } from '@expo/vector-icons';
import CardSkeleton from '@/components/ui/card-skeleton';
import ScreenHeader from '@/components/ui/screen-header';
import SectionHeader from '@/components/ui/section-header';
import React, { useEffect, useMemo, useState } from 'react';
import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LocationScreen() {
  const palette = useAppPalette();
  const styles = useMemo(() => createStyles(palette), [palette]);
  const [isLoading, setIsLoading] = useState(true);
  const locationItems: (LocationSpot | string)[] = isLoading
    ? Array.from({ length: 4 }, (_, index) => `location-skeleton-${index}`)
    : LOCATIONS;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 350);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScreenHeader title="HOT LOCATIONS" leftIcon="navigate-circle-outline" rightIcon="options-outline" />
      {!isLoading ? (
        <SectionHeader caption={`${LOCATIONS.length} hot spots near you`} style={styles.resultsMetaWrap} />
      ) : null}
      <FlatList
        data={locationItems}
        keyExtractor={(item) => (typeof item === 'string' ? item : item.id)}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          if (typeof item === 'string') {
            return <CardSkeleton height={190} />;
          }

          return (
            <ImageBackground source={{ uri: item.image }} style={styles.card} imageStyle={styles.cardImage}>
              <View style={styles.overlay} />
              <View style={styles.cardTop}>
                <Text style={styles.city}>{item.city}</Text>
                <Text style={styles.country}>{item.country}</Text>
              </View>
              <View style={styles.cardBottom}>
                <View style={styles.row}>
                  <Ionicons name="people-outline" size={Sizes.iconSm} color="#FFFFFF" />
                  <Text style={styles.meta}>{item.activeUsers} active users</Text>
                </View>
                <View style={styles.row}>
                  <Ionicons name="ribbon-outline" size={Sizes.iconSm} color="#FFFFFF" />
                  <Text style={styles.meta}>Top: {item.topCategory}</Text>
                </View>
                <View style={styles.row}>
                  <Ionicons name="navigate-outline" size={Sizes.iconSm} color="#FFFFFF" />
                  <Text style={styles.meta}>{item.distanceKm.toFixed(1)} km away</Text>
                </View>
              </View>
            </ImageBackground>
          );
        }}
      />
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
      paddingBottom: 30,
      gap: Spacing.lg,
    },
    resultsMetaWrap: {
      marginTop: -Spacing.sm,
      marginBottom: Spacing.md,
      paddingHorizontal: Spacing.lg,
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
      color: '#FFFFFF',
      fontSize: Typography.title.fontSize,
      fontWeight: '700',
    },
    country: {
      color: '#FFFFFF',
      fontSize: Typography.body.fontSize,
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
      color: '#FFFFFF',
      fontSize: Typography.body.fontSize,
      fontWeight: '500',
    },
  });
