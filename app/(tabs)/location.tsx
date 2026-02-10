import { LOCATIONS } from '@/constants/mock-data';
import { Ionicons } from '@expo/vector-icons';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function LocationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HOT LOCATIONS</Text>
      <ScrollView contentContainerStyle={styles.content}>
        {LOCATIONS.map((spot) => (
          <ImageBackground key={spot.id} source={{ uri: spot.image }} style={styles.card} imageStyle={styles.cardImage}>
            <View style={styles.overlay} />
            <View style={styles.cardTop}>
              <Text style={styles.city}>{spot.city}</Text>
              <Text style={styles.country}>{spot.country}</Text>
            </View>
            <View style={styles.cardBottom}>
              <View style={styles.row}>
                <Ionicons name="people-outline" size={14} color="#fff" />
                <Text style={styles.meta}>{spot.activeUsers} active users</Text>
              </View>
              <View style={styles.row}>
                <Ionicons name="ribbon-outline" size={14} color="#fff" />
                <Text style={styles.meta}>Top: {spot.topCategory}</Text>
              </View>
              <View style={styles.row}>
                <Ionicons name="navigate-outline" size={14} color="#fff" />
                <Text style={styles.meta}>{spot.distanceKm.toFixed(1)} km away</Text>
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
    height: 190,
    borderRadius: 16,
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  cardImage: {
    borderRadius: 16,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  cardTop: {
    paddingHorizontal: 14,
    paddingTop: 12,
  },
  city: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
  country: {
    color: '#ddd',
    fontSize: 14,
  },
  cardBottom: {
    paddingHorizontal: 14,
    paddingBottom: 14,
    gap: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  meta: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '500',
  },
});
