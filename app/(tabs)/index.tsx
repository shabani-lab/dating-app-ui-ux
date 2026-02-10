
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { HOME_HERO } from '@/constants/mock-data';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: HOME_HERO.backgroundImage }}
        style={styles.image}
      >
        <View style={styles.overlay} />
        <View style={styles.content}>
          <Text style={styles.title}>{HOME_HERO.title}</Text>
          <View style={styles.hotcamContainer}>
            <Text style={styles.hotcamText}>{HOME_HERO.brand}</Text>
            <Text style={styles.subtitle}>{HOME_HERO.subtitle}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  hotcamContainer: {
    alignItems: 'center',
  },
  hotcamText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#FF3366',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default App;
