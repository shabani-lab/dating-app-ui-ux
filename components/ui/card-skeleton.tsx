import { Radius, Spacing } from '@/constants/theme';
import { useAppPalette } from '@/hooks/use-app-palette';
import React, { useEffect, useMemo, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';

type CardSkeletonProps = {
  height?: number;
};

export default function CardSkeleton({ height = 220 }: CardSkeletonProps) {
  const palette = useAppPalette();
  const styles = useMemo(() => createStyles(palette, height), [palette, height]);
  const opacity = useRef(new Animated.Value(0.55)).current;

  useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, { toValue: 1, duration: 700, easing: Easing.linear, useNativeDriver: true }),
        Animated.timing(opacity, { toValue: 0.55, duration: 700, easing: Easing.linear, useNativeDriver: true }),
      ])
    );

    pulse.start();

    return () => {
      pulse.stop();
    };
  }, [opacity]);

  return (
    <Animated.View style={[styles.card, { opacity }]}>
      <View style={styles.lineLg} />
      <View style={styles.lineMd} />
      <View style={styles.lineSm} />
    </Animated.View>
  );
}

const createStyles = (palette: ReturnType<typeof useAppPalette>, height: number) =>
  StyleSheet.create({
    card: {
      height,
      borderRadius: Radius.lg,
      backgroundColor: palette.surface,
      borderWidth: 1,
      borderColor: palette.border,
      padding: Spacing.md,
      justifyContent: 'flex-end',
      gap: Spacing.sm,
    },
    lineLg: {
      width: '74%',
      height: 16,
      borderRadius: Radius.sm,
      backgroundColor: palette.surfaceMuted,
    },
    lineMd: {
      width: '56%',
      height: 12,
      borderRadius: Radius.sm,
      backgroundColor: palette.surfaceMuted,
    },
    lineSm: {
      width: '38%',
      height: 12,
      borderRadius: Radius.sm,
      backgroundColor: palette.surfaceMuted,
    },
  });
