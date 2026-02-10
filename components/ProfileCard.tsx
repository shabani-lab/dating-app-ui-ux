
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { UserProfile } from '@/constants/users';

type ProfileCardProps = {
  user: UserProfile;
};

const ProfileCard = ({ user }: ProfileCardProps) => {
  return (
    <View style={styles.card}>
      <ImageBackground source={{ uri: user.image }} style={styles.image}>
        <View style={styles.liveBadge}>
          <Text style={styles.liveText}>LIVE</Text>
        </View>
        <View style={styles.heartIcon}>
          <Ionicons name="heart-outline" size={24} color="white" />
        </View>
        <Text style={styles.name}>{user.name}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
    backgroundColor: '#333',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  liveBadge: {
    backgroundColor: 'rgba(255, 51, 102, 0.8)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 5,
    position: 'absolute',
    top: 10,
    left: 10,
  },
  liveText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  name: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 10,
    left: 10,
    textShadowColor: 'rgba(0,0,0,0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
});

export default ProfileCard;
