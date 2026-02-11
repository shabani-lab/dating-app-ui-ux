import { Motion } from '@/constants/theme';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import React, { useMemo, useRef } from 'react';
import {
  Animated,
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

type AnimatedPressableProps = Omit<PressableProps, 'style' | 'onPressIn' | 'onPressOut'> & {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  scaleTo?: number;
  containerStyle?: StyleProp<ViewStyle>;
  onPressIn?: (event: GestureResponderEvent) => void;
  onPressOut?: (event: GestureResponderEvent) => void;
};

export default function AnimatedPressable({
  children,
  style,
  containerStyle,
  scaleTo = 0.98,
  disabled,
  onPressIn,
  onPressOut,
  ...rest
}: AnimatedPressableProps) {
  const reduceMotionEnabled = useReducedMotion();
  const scale = useRef(new Animated.Value(1)).current;

  const animatedStyle = useMemo(() => ({ transform: [{ scale }] }), [scale]);

  const animateTo = (toValue: number) => {
    if (reduceMotionEnabled) {
      scale.setValue(1);
      return;
    }

    Animated.timing(scale, {
      toValue,
      duration: Motion.fast,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={[animatedStyle, containerStyle]}>
      <Pressable
        {...rest}
        disabled={disabled}
        onPressIn={(event) => {
          if (!disabled) {
            animateTo(scaleTo);
          }
          onPressIn?.(event);
        }}
        onPressOut={(event) => {
          animateTo(1);
          onPressOut?.(event);
        }}
        style={({ pressed }) => [
          style,
          !disabled && pressed ? styles.pressed : undefined,
          disabled ? styles.disabled : undefined,
        ]}>
        {children}
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.88,
  },
  disabled: {
    opacity: 0.55,
  },
});
