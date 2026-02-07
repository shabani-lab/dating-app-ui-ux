
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const LiveScreen = () => {
  const messages = [
    { id: 1, user: 'Joseph Johnson', message: 'Are you new here?' },
    { id: 2, user: 'Sammill', message: 'Your broadcast rock 🔥' },
    { id: 3, user: 'James Mitchell', message: 'So sweet 😍' },
    { id: 4, user: 'Joel Grant', message: '😍😍😍' },
  ];

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://i.pravatar.cc/300?u=a042581f4e29026707d' }}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay} />
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Ionicons name="person-circle" size={32} color="white" />
            <Text style={styles.username}>OPRAH MOSS</Text>
          </View>
          <View style={styles.viewersContainer}>
            <Ionicons name="eye" size={16} color="white" />
            <Text style={styles.viewersText}>256</Text>
          </View>
        </View>

        <ScrollView style={styles.chatContainer}>
          {messages.map((msg) => (
            <View key={msg.id} style={styles.messageContainer}>
              <Text style={styles.messageUser}>{msg.user}:</Text>
              <Text style={styles.messageText}>{msg.message}</Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type your comment..."
            placeholderTextColor="#ccc"
          />
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="send" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="gift" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="heart" size={24} color="#FF3366" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'space-between',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(100, 0, 255, 0.3)',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginTop: 40,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    color: 'white',
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  viewersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  viewersText: {
    color: 'white',
    marginLeft: 5,
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  messageContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  messageUser: {
    color: '#FF3366',
    fontWeight: 'bold',
    marginRight: 10,
  },
  messageText: {
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#444',
  },
  input: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 20,
    paddingHorizontal: 15,
    color: 'white',
    height: 40,
  },
  iconButton: {
    marginLeft: 15,
  },
});

export default LiveScreen;
