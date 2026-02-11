import IconButton from "@/components/ui/icon-button";
import { Sizes, Spacing, Typography } from "@/constants/theme";
import { useAppPalette } from "@/hooks/use-app-palette";
import { Ionicons } from "@expo/vector-icons";
import React, { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";

type IconName = React.ComponentProps<typeof Ionicons>["name"];

type ScreenHeaderProps = {
   title: string;
   leftIcon?: IconName;
   rightIcon?: IconName;
   onLeftPress?: () => void;
   onRightPress?: () => void;
};

export default function ScreenHeader({
   title,
   leftIcon,
   rightIcon,
   onLeftPress,
   onRightPress,
}: ScreenHeaderProps) {
   const palette = useAppPalette();
   const styles = useMemo(() => createStyles(palette), [palette]);

   return (
      <View style={styles.container}>
         <HeaderButton
            icon={leftIcon}
            onPress={onLeftPress}
         />

         <Text
            numberOfLines={1}
            style={styles.title}>
            {title}
         </Text>
         <HeaderButton
            icon={rightIcon}
            onPress={onRightPress}
         />
      </View>
   );
}

type HeaderButtonProps = {
   icon?: IconName;
   onPress?: () => void;
};

function HeaderButton({ icon, onPress }: HeaderButtonProps) {
   if (!icon) {
      return <View style={staticStyles.buttonPlaceholder} />;
   }

   return (
      <IconButton
         icon={icon}
         onPress={onPress}
      />
   );
}

const createStyles = (palette: ReturnType<typeof useAppPalette>) =>
   StyleSheet.create({
      container: {
         flexDirection: "row",
         alignItems: "center",
         justifyContent: "space-between",
         paddingHorizontal: Spacing.lg,
         marginBottom: Spacing.lg,
         gap: Spacing.md,
      },
      title: {
         flex: 1,
         color: palette.textPrimary,
         fontSize: Typography.title.fontSize,
         fontWeight: "700",
         textAlign: "center",
         letterSpacing: 0.6,
      },
   });

const staticStyles = StyleSheet.create({
   buttonPlaceholder: {
      width: Sizes.touchTarget,
      height: Sizes.touchTarget,
   },
});
