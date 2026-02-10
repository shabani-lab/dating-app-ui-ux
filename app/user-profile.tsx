
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { DEFAULT_USER, getUserById } from '@/constants/users';

const UserProfileScreen = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id?: string | string[] }>();
  const userId = Array.isArray(id) ? id[0] : id;
  const user = getUserById(userId) ?? DEFAULT_USER;

  return (
    <View style={styles.container}>
      <ScrollView>
       

        <View style={styles.profileHeader}>
          <Image
            source={{ uri: user.image || 'https://i.pravatar.cc/300?u=a042581f4e29026707d' }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.onlineStatus}>{user.online ? '● ONLINE' : '● OFFLINE'}</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statValue}>{user.followers}</Text>
            <Text style={styles.statLabel}>FOLLOWERS</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>{user.privateVideos}</Text>
            <Text style={styles.statLabel}>PRIVATE VIDEOS</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>{user.rating}</Text>
            <Text style={styles.statLabel}>★★★★★</Text>
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.detail}>
            <Text style={styles.detailValue}>{user.height} CM</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailValue}>{user.age} Y.O.</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailValue}>{user.gender}</Text>
          </View>
        </View>

        <View style={styles.galleryContainer}>
          {user.images.map((url: string, index: number) => (
            <Image key={index} source={{ uri: url }} style={styles.galleryImage} />
          ))}
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ORDER A PRIVATE SHOW</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E2C',
  },
  header: {
    padding: 20,
    marginTop: 40,
  },
  profileHeader: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#FF3366',
  },
  name: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  onlineStatus: {
    color: '#00FF00',
    fontSize: 14,
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    color: 'gray',
    fontSize: 12,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  detail: {
    backgroundColor: '#2A2A3C',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  detailValue: {
    color: 'white',
    fontSize: 14,
  },
  galleryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 30,
  },
  galleryImage: {
    width: '45%',
    height: 200,
    borderRadius: 15,
    margin: 5,
  },
  button: {
    backgroundColor: '#FF3366',
    padding: 20,
    borderRadius: 30,
    alignItems: 'center',
    margin: 20,
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserProfileScreen;
