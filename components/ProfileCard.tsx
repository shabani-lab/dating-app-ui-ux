
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileCard = ({ user }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <ImageBackground source={{ uri: user.image }} style={styles.image}>
        <View style={styles.liveBadge}>
          <Text style={styles.liveText}>LIVE</Text>
        </View>
        <TouchableOpacity style={styles.heartIcon}>
          <Ionicons name="heart-outline" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.name}>{user.name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '45%',
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
    textShadow: '1px 1px 10px rgba(0,0,0,0.75)',
  },
});

export default ProfileCard;
