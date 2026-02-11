
import React, { useMemo } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Radius, Sizes, Spacing, Typography } from '@/constants/theme';
import { useAppPalette } from '@/hooks/use-app-palette';
import type { UserProfile } from '@/constants/users';

type ProfileCardProps = {
  user: UserProfile;
};

const ProfileCard = ({ user }: ProfileCardProps) => {
  const palette = useAppPalette();
  const styles = useMemo(() => createStyles(palette), [palette]);

  return (
    <View style={styles.card}>
      <ImageBackground source={{ uri: user.image }} style={styles.image} imageStyle={styles.imageAsset}>
        {user.online ? (
          <View style={styles.liveBadge}>
            <Text style={styles.liveText}>LIVE</Text>
          </View>
        ) : (
          <View style={styles.offlineBadge}>
            <Text style={styles.offlineText}>OFFLINE</Text>
          </View>
        )}
        <View style={styles.heartIcon}>
          <Ionicons name="heart-outline" size={24} color="white" />
        </View>
        <View style={styles.bottomGradient} />
        <Text numberOfLines={1} style={styles.name}>
          {user.name}
        </Text>
      </ImageBackground>
    </View>
  );
};

const createStyles = (palette: ReturnType<typeof useAppPalette>) =>
  StyleSheet.create({
    card: {
      width: '100%',
      height: Sizes.profileCardHeight,
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
    imageAsset: {
      borderRadius: Radius.lg,
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
      fontSize: Typography.caption.fontSize,
      fontWeight: '700',
    },
    offlineBadge: {
      backgroundColor: palette.overlayStrong,
      paddingHorizontal: Spacing.sm,
      paddingVertical: Spacing.xs,
      borderRadius: Radius.sm,
      position: 'absolute',
      top: Spacing.md,
      left: Spacing.md,
    },
    offlineText: {
      color: '#FFFFFF',
      fontSize: 11,
      fontWeight: '700',
      letterSpacing: 0.2,
    },
    heartIcon: {
      position: 'absolute',
      top: Spacing.md,
      right: Spacing.md,
    },
    bottomGradient: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 68,
      backgroundColor: palette.overlayStrong,
    },
    name: {
      color: '#FFFFFF',
      fontSize: Typography.subtitle.fontSize,
      fontWeight: '700',
      position: 'absolute',
      bottom: Spacing.md,
      left: Spacing.md,
      right: Spacing.md,
      textShadowColor: palette.overlayStrong,
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 10,
    },
  });

export default ProfileCard;
