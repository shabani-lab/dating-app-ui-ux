import ProfileCard from '@/components/ProfileCard';
import CardSkeleton from '@/components/ui/card-skeleton';
import EmptyState from '@/components/ui/empty-state';
import FilterChip from '@/components/ui/filter-chip';
import SearchBar from '@/components/ui/search-bar';
import SectionHeader from '@/components/ui/section-header';
import AnimatedPressable from '@/components/ui/animated-pressable';
import { Spacing } from '@/constants/theme';
import { USERS, type UserCategory, type UserProfile } from '@/constants/users';
import { useAppPalette } from '@/hooks/use-app-palette';
import { useRouter } from 'expo-router';
import React, { useEffect, useMemo, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type FilterOption = 'ALL' | UserCategory;

const FILTERS: FilterOption[] = ['ALL', 'POPULAR', 'LIVE', 'MILFS', 'FETISHISTS'];
const SKELETON_ITEMS = Array.from({ length: 6 }, (_, index) => `skeleton-${index}`);

export default function ExploreScreen() {
  const router = useRouter();
  const palette = useAppPalette();
  const styles = useMemo(() => createStyles(palette), [palette]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterOption>('ALL');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 350);
    return () => clearTimeout(timer);
  }, []);

  const filteredUsers = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return USERS.filter((user) => {
      const matchesFilter = activeFilter === 'ALL' || user.category === activeFilter;
      const matchesSearch = normalizedQuery.length === 0 || user.name.toLowerCase().includes(normalizedQuery);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const gridData: (UserProfile | string)[] = isLoading ? SKELETON_ITEMS : filteredUsers;

  const handleProfilePress = (user: UserProfile) => {
    router.push({ pathname: '/user-profile', params: { id: user.id } });
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.topContent}>
        <SearchBar value={searchQuery} onChangeText={setSearchQuery} style={styles.searchBar} />

        <FlatList
          data={FILTERS}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filters}
          keyExtractor={(item) => item}
          renderItem={({ item: filter }) => (
            <FilterChip label={filter} isActive={activeFilter === filter} onPress={() => setActiveFilter(filter)} />
          )}
        />

        {!isLoading ? (
          <SectionHeader
            caption={`${filteredUsers.length} ${filteredUsers.length === 1 ? 'result' : 'results'}`}
            style={styles.resultsMetaWrap}
          />
        ) : null}
      </View>

      <FlatList
        data={gridData}
        numColumns={2}
        keyExtractor={(item) => (typeof item === 'string' ? item : item.id)}
        contentContainerStyle={styles.grid}
        columnWrapperStyle={styles.gridRow}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          if (typeof item === 'string') {
            return (
              <View style={styles.cardWrapper}>
                <CardSkeleton height={250} />
              </View>
            );
          }

          return (
            <AnimatedPressable style={styles.cardWrapper} onPress={() => handleProfilePress(item)}>
              <ProfileCard user={item} />
            </AnimatedPressable>
          );
        }}
        ListEmptyComponent={
          !isLoading ? (
            <View style={styles.emptyStateWrap}>
              <EmptyState
                title="No Profiles Found"
                subtitle="Try another search or switch category."
                icon="sparkles-outline"
              />
            </View>
          ) : null
        }
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
    topContent: {
      paddingTop: Spacing.lg,
      paddingBottom: Spacing.sm,
    },
    searchBar: {
      marginHorizontal: Spacing.lg,
    },
    filters: {
      paddingHorizontal: Spacing.lg,
      paddingTop: Spacing.lg,
      gap: Spacing.sm,
    },
    resultsMetaWrap: {
      marginTop: Spacing.md,
      paddingHorizontal: Spacing.lg,
    },
    grid: {
      paddingHorizontal: Spacing.lg,
      paddingTop: Spacing.sm,
      paddingBottom: Spacing.x2,
      gap: Spacing.lg,
    },
    gridRow: {
      justifyContent: 'space-between',
    },
    cardWrapper: {
      width: '48%',
    },
    emptyStateWrap: {
      paddingTop: Spacing.xl,
    },
  });
