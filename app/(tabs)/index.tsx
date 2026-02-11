
import React, { useMemo } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import ScreenHeader from '@/components/ui/screen-header';
import { HOME_HERO } from '@/constants/mock-data';
import { Radius, Spacing, Typography } from '@/constants/theme';
import { useAppPalette } from '@/hooks/use-app-palette';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  const palette = useAppPalette();
  const styles = useMemo(() => createStyles(palette), [palette]);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ImageBackground
        source={{ uri: HOME_HERO.backgroundImage }}
        style={styles.image}
      >
        <View style={styles.overlay} />
        <View style={styles.headerWrap}>
          <ScreenHeader title="HOME" leftIcon="menu" rightIcon="search" />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{HOME_HERO.title}</Text>
          <View style={styles.hotcamContainer}>
            <Text style={styles.hotcamText}>{HOME_HERO.brand}</Text>
            <Text style={styles.subtitle}>{HOME_HERO.subtitle}</Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const createStyles = (palette: ReturnType<typeof useAppPalette>) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: palette.overlayStrong,
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: Spacing.xl,
      paddingBottom: Spacing.x3,
    },
    headerWrap: {
      paddingTop: Spacing.sm,
    },
    title: {
      color: '#FFFFFF',
      fontSize: Typography.display.fontSize,
      fontWeight: '700',
      lineHeight: Typography.display.lineHeight,
      textAlign: 'center',
    },
    hotcamContainer: {
      alignItems: 'center',
      gap: Spacing.sm,
    },
    hotcamText: {
      color: '#FFFFFF',
      fontSize: Typography.title.fontSize,
      fontWeight: '700',
      backgroundColor: palette.accent,
      paddingHorizontal: Spacing.xl,
      paddingVertical: Spacing.md,
      borderRadius: Radius.xl,
      overflow: 'hidden',
    },
    subtitle: {
      color: '#FFFFFF',
      fontSize: Typography.subtitle.fontSize,
      textAlign: 'center',
    },
  });

export default App;
