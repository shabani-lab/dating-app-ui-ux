import AnimatedPressable from "@/components/ui/animated-pressable";
import FlatSection from "@/components/ui/flat-section";
import Separator from "@/components/ui/separator";
import { Radius, Spacing, Typography } from "@/constants/theme";
import { DEFAULT_USER, getUserById } from "@/constants/users";
import { useAppPalette } from "@/hooks/use-app-palette";
import { useLocalSearchParams } from "expo-router";
import React, { useMemo } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const UserProfileScreen = () => {
   const palette = useAppPalette();
   const styles = useMemo(() => createStyles(palette), [palette]);
   const { id } = useLocalSearchParams<{ id?: string | string[] }>();
   const userId = Array.isArray(id) ? id[0] : id;
   const user = getUserById(userId) ?? DEFAULT_USER;

   return (
      <SafeAreaView
         style={styles.container}
         edges={["bottom"]}>
         <ScrollView contentContainerStyle={styles.content}>
            <View style={styles.profileHeader}>
               <Image
                  source={{ uri: user.image }}
                  style={styles.profileImage}
               />
               <Text style={styles.name}>{user.name}</Text>
               <Text
                  style={[
                     styles.onlineStatus,
                     user.online ? styles.online : styles.offline,
                  ]}>
                  {user.online ? "● ONLINE" : "● OFFLINE"}
               </Text>
            </View>

            <FlatSection style={styles.statsContainer}>
               <View style={styles.stat}>
                  <Text style={styles.statValue}>{user.followers}</Text>
                  <Text style={styles.statLabel}>FOLLOWERS</Text>
               </View>
               <Separator style={styles.statDivider} />
               <View style={styles.stat}>
                  <Text style={styles.statValue}>{user.privateVideos}</Text>
                  <Text style={styles.statLabel}>PRIVATE VIDEOS</Text>
               </View>
               <Separator style={styles.statDivider} />
               <View style={styles.stat}>
                  <Text style={styles.statValue}>{user.rating}</Text>
                  <Text style={styles.statLabel}>RATING</Text>
               </View>
            </FlatSection>

            <FlatSection style={styles.detailsContainer}>
               <View style={styles.detail}>
                  <Text style={styles.detailValue}>{user.height} CM</Text>
               </View>
               <Separator style={styles.detailsDivider} />
               <View style={styles.detail}>
                  <Text style={styles.detailValue}>{user.age} Y.O.</Text>
               </View>
               <Separator style={styles.detailsDivider} />
               <View style={styles.detail}>
                  <Text style={styles.detailValue}>{user.gender}</Text>
               </View>
            </FlatSection>

            <View style={styles.galleryContainer}>
               {user.images.map((url: string, index: number) => (
                  <Image
                     key={index}
                     source={{ uri: url }}
                     style={styles.galleryImage}
                  />
               ))}
            </View>

            <AnimatedPressable style={styles.button}>
               <Text style={styles.buttonText}>ORDER A PRIVATE SHOW</Text>
            </AnimatedPressable>
         </ScrollView>
      </SafeAreaView>
   );
};

const createStyles = (palette: ReturnType<typeof useAppPalette>) =>
   StyleSheet.create({
      container: {
         flex: 1,
         backgroundColor: palette.background,
      },
      content: {
         paddingBottom: Spacing.x2,
      },
      profileHeader: {
         alignItems: "center",
         marginTop: Spacing.lg,
      },
      profileImage: {
         width: 120,
         height: 120,
         borderRadius: Radius.pill,
         borderWidth: 3,
         borderColor: palette.accent,
      },
      name: {
         color: palette.textPrimary,
         fontSize: Typography.title.fontSize,
         fontWeight: "700",
         marginTop: Spacing.sm + 2,
      },
      onlineStatus: {
         fontSize: Typography.body.fontSize,
         marginTop: Spacing.xs + 1,
      },
      online: {
         color: palette.success,
      },
      offline: {
         color: palette.textMuted,
      },
      statsContainer: {
         flexDirection: "row",
         alignItems: "stretch",
         justifyContent: "space-between",
         marginHorizontal: Spacing.lg,
         marginTop: Spacing.x3 - 2,
         paddingVertical: Spacing.md,
      },
      statDivider: {
         width: 1,
         height: "100%",
         marginVertical: 0,
      },
      stat: {
         flex: 1,
         alignItems: "center",
         justifyContent: "center",
      },
      statValue: {
         color: palette.textPrimary,
         fontSize: Typography.title.fontSize,
         fontWeight: "700",
      },
      statLabel: {
         color: palette.textMuted,
         fontSize: Typography.caption.fontSize,
      },
      detailsContainer: {
         flexDirection: "row",
         alignItems: "center",
         justifyContent: "space-between",
         marginHorizontal: Spacing.lg,
         marginTop: Spacing.xl,
         paddingVertical: Spacing.sm,
      },
      detailsDivider: {
         width: 1,
         height: "70%",
         marginVertical: 0,
      },
      detail: {
         flex: 1,
         alignItems: "center",
         justifyContent: "center",
         paddingVertical: Spacing.xs + 2,
      },
      detailValue: {
         color: palette.textPrimary,
         fontSize: Typography.body.fontSize,
         fontWeight: "600",
      },
      galleryContainer: {
         flexDirection: "row",
         flexWrap: "wrap",
         justifyContent: "center",
         marginTop: Spacing.x3 - 2,
      },
      galleryImage: {
         width: "45%",
         height: 200,
         borderRadius: Radius.lg,
         margin: Spacing.xs + 1,
         borderWidth: 1,
         borderColor: palette.border,
      },
      button: {
         backgroundColor: palette.accent,
         padding: Spacing.xl,
         borderRadius: Radius.pill,
         alignItems: "center",
         marginHorizontal: Spacing.xl,
         marginTop: Spacing.x3 - 2,
      },
      buttonText: {
         color: "#FFFFFF",
         fontSize: Typography.subtitle.fontSize,
         fontWeight: "700",
      },
   });

export default UserProfileScreen;
