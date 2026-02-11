import { EVENTS, type EventItem } from '@/constants/mock-data';
import { Radius, Sizes, Spacing, Typography } from '@/constants/theme';
import { useAppPalette } from '@/hooks/use-app-palette';
import { Ionicons } from '@expo/vector-icons';
import CardSkeleton from '@/components/ui/card-skeleton';
import SearchBar from '@/components/ui/search-bar';
import SectionHeader from '@/components/ui/section-header';
import React, { useEffect, useMemo, useState } from 'react';
import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EventsScreen() {
  const palette = useAppPalette();
  const styles = useMemo(() => createStyles(palette), [palette]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    if (!normalizedQuery) {
      return EVENTS;
    }

    return EVENTS.filter((item) =>
      [item.title, item.city, item.venue].some((value) => value.toLowerCase().includes(normalizedQuery))
    );
  }, [searchQuery]);

  const eventItems: (EventItem | string)[] = isLoading
    ? Array.from({ length: 4 }, (_, index) => `event-skeleton-${index}`)
    : filteredEvents;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 350);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <SearchBar value={searchQuery} onChangeText={setSearchQuery} style={styles.searchBar} />
      {!isLoading ? (
        <SectionHeader caption={`${filteredEvents.length} scheduled events`} style={styles.resultsMetaWrap} />
      ) : null}
      <FlatList
        data={eventItems}
        keyExtractor={(item) => (typeof item === 'string' ? item : item.id)}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          if (typeof item === 'string') {
            return <CardSkeleton height={210} />;
          }

          return (
            <ImageBackground source={{ uri: item.image }} style={styles.card} imageStyle={styles.cardImage}>
              <View style={styles.overlay} />
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{item.city}</Text>
              </View>
              <View style={styles.cardBody}>
                <Text style={styles.eventTitle}>{item.title}</Text>
                <View style={styles.row}>
                  <Ionicons name="calendar-outline" size={Sizes.iconSm} color="#FFFFFF" />
                  <Text style={styles.meta}>
                    {item.date} • {item.time}
                  </Text>
                </View>
                <View style={styles.row}>
                  <Ionicons name="location-outline" size={Sizes.iconSm} color="#FFFFFF" />
                  <Text style={styles.meta}>{item.venue}</Text>
                </View>
                <View style={styles.footer}>
                  <Text style={styles.attendees}>{item.attendees} going</Text>
                  <Text style={styles.price}>from ${item.ticketFrom}</Text>
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
      paddingBottom: Spacing.sm,
      gap: Spacing.lg,
    },
    searchBar: {
      marginHorizontal: Spacing.lg,
      marginTop: Spacing.lg,
      marginBottom: Spacing.md,
    },
    resultsMetaWrap: {
      marginBottom: Spacing.md + 2,
      paddingHorizontal: Spacing.lg,
    },
    card: {
      height: 210,
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
      backgroundColor: palette.overlaySoft,
    },
    badge: {
      alignSelf: 'flex-start',
      margin: Spacing.md,
      backgroundColor: palette.accent,
      borderRadius: Radius.pill,
      paddingHorizontal: Spacing.sm,
      paddingVertical: Spacing.xs,
    },
    badgeText: {
      color: '#FFFFFF',
      fontSize: Typography.caption.fontSize,
      fontWeight: '700',
    },
    cardBody: {
      paddingHorizontal: Spacing.md,
      paddingBottom: Spacing.md,
      gap: Spacing.xs + 2,
    },
    eventTitle: {
      color: '#FFFFFF',
      fontSize: Typography.title.fontSize,
      fontWeight: '700',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Spacing.xs + 2,
    },
    meta: {
      color: '#FFFFFF',
      fontSize: Typography.body.fontSize,
    },
    footer: {
      marginTop: Spacing.xs + 2,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    attendees: {
      color: '#FFFFFF',
      fontWeight: '600',
      fontSize: Typography.body.fontSize,
    },
    price: {
      color: '#FFFFFF',
      fontWeight: '700',
      fontSize: Typography.subtitle.fontSize,
    },
  });
