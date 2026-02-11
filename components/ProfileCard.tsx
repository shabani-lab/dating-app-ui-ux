
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Radius, Spacing } from '@/constants/theme';
import { useAppPalette } from '@/hooks/use-app-palette';
import type { UserProfile } from '@/constants/users';

type ProfileCardProps = {
  user: UserProfile;
};

const ProfileCard = ({ user }: ProfileCardProps) => {
  const palette = useAppPalette();
  const styles = createStyles(palette);

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

const createStyles = (palette: ReturnType<typeof useAppPalette>) =>
  StyleSheet.create({
    card: {
      width: '100%',
      height: 250,
      borderRadius: Radius.lg,
      marginBottom: Spacing.lg,
      backgroundColor: palette.surface,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
      justifyContent: 'space-between',
    },
    liveBadge: {
      backgroundColor: palette.accent,
      paddingHorizontal: Spacing.sm,
      paddingVertical: Spacing.xs,
      borderRadius: Radius.sm,
      position: 'absolute',
      top: Spacing.md,
      left: Spacing.md,
    },
    liveText: {
      color: '#FFFFFF',
      fontSize: 12,
      fontWeight: '700',
    },
    heartIcon: {
      position: 'absolute',
      top: Spacing.md,
      right: Spacing.md,
    },
    name: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '700',
      position: 'absolute',
      bottom: Spacing.md,
      left: Spacing.md,
      textShadowColor: palette.overlayStrong,
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 10,
    },
  });

export default ProfileCard;
