
import { StyleSheet, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Fonts } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import ProfileCard from '@/components/ProfileCard';
import { useRouter } from 'expo-router';

const users = [
  { name: 'SOPHIA POZZ', image: 'https://i.pravatar.cc/300?u=a042581f4e29026704d' },
  { name: 'OLIFINIA', image: 'https://i.pravatar.cc/300?u=a042581f4e29026705d' },
  { name: 'SANDRA KISS', image: 'https://i.pravatar.cc/300?u=a042581f4e29026706d' },
  { name: 'OPRAH MOGS', image: 'https://i.pravatar.cc/300?u=a042581f4e29026707d' },
  { name: 'OLIVA', image: 'https://i.pravatar.cc/300?u=a042581f4e29026708d' },
  { name: 'MARGO', image: 'https://i.pravatar.cc/300?u=a042581f4e29026709d' },
];

export default function TabTwoScreen() {
  const router = useRouter();

  const handleProfilePress = (user) => {
    router.push({ pathname: 'user-profile', params: { user: JSON.stringify(user) } });
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
        <TextInput placeholder="SEARCH" placeholderTextColor="gray" style={styles.searchInput} />
        <Ionicons name="mic" size={20} color="gray" />
      </View>
      <View style={styles.filters}>
        <TouchableOpacity style={[styles.filterButton, styles.activeFilter]}>
          <ThemedText style={styles.filterText}>POPULAR</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <ThemedText style={styles.filterText}>LIVE</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <ThemedText style={styles.filterText}>MILFS</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <ThemedText style={styles.filterText}>FETESHISTS</ThemedText>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.grid}>
        {users.map((user) => (
          <TouchableOpacity key={user.name} onPress={() => handleProfilePress(user)}>
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
  },
});
