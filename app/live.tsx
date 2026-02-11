import { LIVE_STREAM } from '@/constants/mock-data';
import { Radius, Sizes, Spacing, Typography } from '@/constants/theme';
import { useAppPalette } from '@/hooks/use-app-palette';
import { Ionicons } from '@expo/vector-icons';
import React, { useMemo } from 'react';
import IconButton from '@/components/ui/icon-button';
import { FlatList, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LiveScreen = () => {
  const palette = useAppPalette();
  const styles = useMemo(() => createStyles(palette), [palette]);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ImageBackground source={{ uri: LIVE_STREAM.hostImage }} style={styles.backgroundImage}>
        <View style={styles.overlay} />
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Ionicons name="person-circle" size={Sizes.iconLg + 8} color="#FFFFFF" />
            <Text style={styles.username}>{LIVE_STREAM.hostName}</Text>
          </View>
          <View style={styles.viewersContainer}>
            <Ionicons name="eye" size={Sizes.iconSm} color="#FFFFFF" />
            <Text style={styles.viewersText}>{LIVE_STREAM.viewers}</Text>
          </View>
        </View>

        <FlatList
          data={LIVE_STREAM.messages}
          keyExtractor={(item) => String(item.id)}
          style={styles.chatContainer}
          contentContainerStyle={styles.chatContent}
          showsVerticalScrollIndicator={false}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          renderItem={({ item }) => (
            <View style={styles.messageContainer}>
              <Text style={styles.messageUser}>{item.user}:</Text>
              <Text style={styles.messageText}>{item.message}</Text>
            </View>
          )}
        />

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Type your comment..." placeholderTextColor={palette.textMuted} />
          <IconButton icon="send" style={styles.iconButton} />
          <IconButton icon="gift" style={styles.iconButton} />
          <IconButton icon="heart" style={styles.iconButton} iconColor={palette.accent} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const createStyles = (palette: ReturnType<typeof useAppPalette>) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: palette.background,
    },
    backgroundImage: {
      flex: 1,
      justifyContent: 'space-between',
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: palette.overlaySoft,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: Spacing.xl,
      paddingTop: Spacing.lg,
      paddingBottom: Spacing.md,
    },
    userInfo: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    username: {
      color: '#FFFFFF',
      marginLeft: Spacing.sm,
      fontWeight: '700',
      fontSize: Typography.subtitle.fontSize,
    },
    viewersContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: palette.overlayStrong,
      paddingHorizontal: Spacing.sm,
      paddingVertical: Spacing.xs + 1,
      borderRadius: Radius.pill,
    },
    viewersText: {
      color: '#FFFFFF',
      marginLeft: Spacing.xs + 1,
      fontSize: Typography.caption.fontSize,
      fontWeight: '600',
    },
    chatContainer: {
      flex: 1,
      paddingHorizontal: Spacing.xl,
    },
    chatContent: {
      paddingBottom: Spacing.md,
    },
    messageContainer: {
      flexDirection: 'row',
      marginBottom: Spacing.sm + 2,
    },
    messageUser: {
      color: palette.accent,
      fontWeight: '700',
      marginRight: Spacing.sm,
      fontSize: Typography.body.fontSize,
    },
    messageText: {
      color: '#FFFFFF',
      fontSize: Typography.body.fontSize,
      flexShrink: 1,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: Spacing.xl,
      paddingVertical: Spacing.lg,
      borderTopWidth: 1,
      borderTopColor: palette.border,
      backgroundColor: palette.overlaySoft,
    },
    input: {
      flex: 1,
      backgroundColor: palette.surface,
      borderRadius: Radius.xl,
      paddingHorizontal: Spacing.lg,
      color: palette.textPrimary,
      fontSize: Typography.body.fontSize,
      height: Sizes.touchTarget,
      borderWidth: 1,
      borderColor: palette.border,
    },
    iconButton: {
      marginLeft: Spacing.lg - 1,
    },
  });

export default LiveScreen;
