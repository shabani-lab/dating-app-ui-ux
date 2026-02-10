import { PROFILE_MOCK } from '@/constants/mock-data';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="person-circle" size={72} color="#FF3366" />
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E2C',
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 28,
  },
  username: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    marginTop: 8,
  },
  plan: {
    marginTop: 4,
    color: '#FF8AA8',
    fontSize: 14,
    fontWeight: '600',
  },
  cards: {
    gap: 12,
  },
  card: {
    backgroundColor: '#2A2A3C',
    borderRadius: 14,
    padding: 16,
  },
  value: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
  },
  label: {
    color: '#c2c2c8',
    fontSize: 13,
    marginTop: 4,
  },
});
