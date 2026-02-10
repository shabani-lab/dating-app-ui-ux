
import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Fonts } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import ProfileCard from '@/components/ProfileCard';
import { useRouter } from 'expo-router';
import { USERS, type UserCategory, type UserProfile } from '@/constants/users';

type FilterOption = 'ALL' | UserCategory;

const FILTERS: FilterOption[] = ['ALL', 'POPULAR', 'LIVE', 'MILFS', 'FETISHISTS'];

export default function TabTwoScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterOption>('POPULAR');

  const filteredUsers = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return USERS.filter((user) => {
      const matchesFilter = activeFilter === 'ALL' || user.category === activeFilter;
      const matchesSearch = normalizedQuery.length === 0 || user.name.toLowerCase().includes(normalizedQuery);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const handleProfilePress = (user: UserProfile) => {
    router.push({ pathname: '/user-profile', params: { id: user.id } });
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="menu" size={24} color="white" />
        <ThemedText type="title" style={{ fontFamily: Fonts.rounded }}>
          CATEGORIES
        </ThemedText>
        <Ionicons name="person-circle" size={24} color="white" />
      </View>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="gray" />
        <TextInput
          placeholder="SEARCH"
          placeholderTextColor="gray"
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Ionicons name="mic" size={20} color="gray" />
      </View>
      <View style={styles.filters}>
        {FILTERS.map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[styles.filterButton, activeFilter === filter ? styles.activeFilter : undefined]}
            onPress={() => setActiveFilter(filter)}
          >
            <ThemedText style={styles.filterText}>{filter}</ThemedText>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView contentContainerStyle={styles.grid}>
        {filteredUsers.map((user) => (
          <TouchableOpacity key={user.id} onPress={() => handleProfilePress(user)} style={styles.cardWrapper}>
            <ProfileCard user={user} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#1E1E2C',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A2A3C',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    marginTop: 20,
  },
  searchInput: {
    flex: 1,
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#2A2A3C',
  },
  activeFilter: {
    backgroundColor: '#FF3366',
  },
  filterText: {
    color: 'white',
    fontSize: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingBottom: 24,
  },
  cardWrapper: {
    width: '47%',
  },
});
