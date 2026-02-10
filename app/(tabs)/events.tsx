import { EVENTS } from '@/constants/mock-data';
import { Ionicons } from '@expo/vector-icons';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function EventsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>UPCOMING EVENTS</Text>
      <ScrollView contentContainerStyle={styles.content}>
        {EVENTS.map((event) => (
          <ImageBackground key={event.id} source={{ uri: event.image }} style={styles.card} imageStyle={styles.cardImage}>
            <View style={styles.overlay} />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{event.city}</Text>
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.eventTitle}>{event.title}</Text>
              <View style={styles.row}>
                <Ionicons name="calendar-outline" size={14} color="#fff" />
                <Text style={styles.meta}>{event.date} • {event.time}</Text>
              </View>
              <View style={styles.row}>
                <Ionicons name="location-outline" size={14} color="#fff" />
                <Text style={styles.meta}>{event.venue}</Text>
              </View>
              <View style={styles.footer}>
                <Text style={styles.attendees}>{event.attendees} going</Text>
                <Text style={styles.price}>from ${event.ticketFrom}</Text>
              </View>
            </View>
          </ImageBackground>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E2C',
    paddingTop: 50,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 0.5,
    paddingHorizontal: 18,
    marginBottom: 14,
  },
  content: {
    paddingHorizontal: 14,
    paddingBottom: 30,
    gap: 14,
  },
  card: {
    height: 210,
    borderRadius: 16,
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  cardImage: {
    borderRadius: 16,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  badge: {
    alignSelf: 'flex-start',
    margin: 12,
    backgroundColor: '#FF3366',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
  cardBody: {
    paddingHorizontal: 14,
    paddingBottom: 12,
    gap: 6,
  },
  eventTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  meta: {
    color: '#ddd',
    fontSize: 13,
  },
  footer: {
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  attendees: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 13,
  },
  price: {
    color: '#FF8AA8',
    fontWeight: '700',
    fontSize: 14,
  },
});
