import ScreenHeader from "@/components/ui/screen-header";
import { Radius, Spacing } from "@/constants/theme";
import { DEFAULT_USER, getUserById } from "@/constants/users";
import { useAppPalette } from "@/hooks/use-app-palette";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useMemo } from "react";
import {
   Image,
   ScrollView,
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const UserProfileScreen = () => {
   const router = useRouter();
   const palette = useAppPalette();
   const styles = useMemo(() => createStyles(palette), [palette]);
   const { id } = useLocalSearchParams<{ id?: string | string[] }>();
   const userId = Array.isArray(id) ? id[0] : id;
   const user = getUserById(userId) ?? DEFAULT_USER;

   return (
      <SafeAreaView
         style={styles.container}
         edges={["top", "bottom"]}>
         <ScreenHeader
            title={user.name}
            leftIcon="arrow-back"
            onLeftPress={() => router.back()}
         />
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

            <View style={styles.statsContainer}>
               <View style={styles.stat}>
                  <Text style={styles.statValue}>{user.followers}</Text>
                  <Text style={styles.statLabel}>FOLLOWERS</Text>
               </View>
               <View style={styles.stat}>
                  <Text style={styles.statValue}>{user.privateVideos}</Text>
                  <Text style={styles.statLabel}>PRIVATE VIDEOS</Text>
               </View>
               <View style={styles.stat}>
                  <Text style={styles.statValue}>{user.rating}</Text>
                  <Text style={styles.statLabel}>★★★★★</Text>
               </View>
            </View>

            <View style={styles.detailsContainer}>
               <View style={styles.detail}>
                  <Text style={styles.detailValue}>{user.height} CM</Text>
               </View>
               <View style={styles.detail}>
                  <Text style={styles.detailValue}>{user.age} Y.O.</Text>
               </View>
               <View style={styles.detail}>
                  <Text style={styles.detailValue}>{user.gender}</Text>
               </View>
            </View>

            <View style={styles.galleryContainer}>
               {user.images.map((url: string, index: number) => (
                  <Image
                     key={index}
                     source={{ uri: url }}
                     style={styles.galleryImage}
                  />
               ))}
            </View>

            <TouchableOpacity style={styles.button}>
               <Text style={styles.buttonText}>ORDER A PRIVATE SHOW</Text>
            </TouchableOpacity>
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
         fontSize: 24,
         fontWeight: "700",
         marginTop: Spacing.sm + 2,
      },
      onlineStatus: {
         fontSize: 14,
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
         justifyContent: "space-around",
         marginTop: Spacing.x3 - 2,
      },
      stat: {
         alignItems: "center",
      },
      statValue: {
         color: palette.textPrimary,
         fontSize: 20,
         fontWeight: "700",
      },
      statLabel: {
         color: palette.textMuted,
         fontSize: 12,
      },
      detailsContainer: {
         flexDirection: "row",
         justifyContent: "space-around",
         marginTop: Spacing.xl,
      },
      detail: {
         backgroundColor: palette.surface,
         paddingHorizontal: Spacing.xl,
         paddingVertical: Spacing.sm + 2,
         borderRadius: Radius.pill,
         borderWidth: 1,
         borderColor: palette.border,
      },
      detailValue: {
         color: palette.textPrimary,
         fontSize: 14,
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
         fontSize: 16,
         fontWeight: "700",
      },
   });

export default UserProfileScreen;
