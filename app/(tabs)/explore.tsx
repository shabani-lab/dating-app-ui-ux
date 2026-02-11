import ProfileCard from "@/components/ProfileCard";
import { ThemedText } from "@/components/themed-text";
import CardSkeleton from "@/components/ui/card-skeleton";
import EmptyState from "@/components/ui/empty-state";
import ScreenHeader from "@/components/ui/screen-header";
import { Radius, Spacing } from "@/constants/theme";
import { USERS, type UserCategory, type UserProfile } from "@/constants/users";
import { useAppPalette } from "@/hooks/use-app-palette";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import {
   FlatList,
   ScrollView,
   StyleSheet,
   TextInput,
   TouchableOpacity,
   View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type FilterOption = "ALL" | UserCategory;

const FILTERS: FilterOption[] = [
   "ALL",
   "POPULAR",
   "LIVE",
   "MILFS",
   "FETISHISTS",
];

export default function TabTwoScreen() {
   const router = useRouter();
   const palette = useAppPalette();
   const styles = useMemo(() => createStyles(palette), [palette]);
   const [searchQuery, setSearchQuery] = useState("");
   const [activeFilter, setActiveFilter] = useState<FilterOption>("ALL");
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 350);
      return () => clearTimeout(timer);
   }, []);

   const filteredUsers = useMemo(() => {
      const normalizedQuery = searchQuery.trim().toLowerCase();

      return USERS.filter((user) => {
         const matchesFilter =
            activeFilter === "ALL" || user.category === activeFilter;
         const matchesSearch =
            normalizedQuery.length === 0 ||
            user.name.toLowerCase().includes(normalizedQuery);

         return matchesFilter && matchesSearch;
      });
   }, [activeFilter, searchQuery]);

   const handleProfilePress = (user: UserProfile) => {
      router.push({ pathname: "/user-profile", params: { id: user.id } });
   };

   return (
      <SafeAreaView
         style={styles.container}
         edges={["top"]}>
         <ScreenHeader
            title="CATEGORIES"
            leftIcon="menu"
            rightIcon="person-circle"
         />
         <View style={styles.searchBar}>
            <Ionicons
               name="search"
               size={20}
               color={palette.textMuted}
            />
            <TextInput
               placeholder="SEARCH"
               placeholderTextColor={palette.textMuted}
               style={styles.searchInput}
               value={searchQuery}
               onChangeText={setSearchQuery}
            />
            <Ionicons
               name="mic"
               size={20}
               color={palette.textMuted}
            />
         </View>
         <FlatList
            data={FILTERS}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filters}
            keyExtractor={(item) => item}
            renderItem={({ item: filter }) => (
               <TouchableOpacity
                  style={[
                     styles.filterButton,
                     activeFilter === filter ? styles.activeFilter : undefined,
                  ]}
                  onPress={() => setActiveFilter(filter)}>
                  <ThemedText
                     style={[
                        styles.filterText,
                        activeFilter === filter
                           ? styles.filterTextActive
                           : styles.filterTextInactive,
                     ]}>
                     {filter}
                  </ThemedText>
               </TouchableOpacity>
            )}
         />
         <ScrollView
            contentContainerStyle={styles.grid}
            keyboardShouldPersistTaps="handled">
            {isLoading ? (
               Array.from({ length: 6 }).map((_, index) => (
                  <View
                     key={`skeleton-${index}`}
                     style={styles.cardWrapper}>
                     <CardSkeleton height={250} />
                  </View>
               ))
            ) : filteredUsers.length > 0 ? (
               filteredUsers.map((user) => (
                  <TouchableOpacity
                     key={user.id}
                     onPress={() => handleProfilePress(user)}
                     style={styles.cardWrapper}>
                     <ProfileCard user={user} />
                  </TouchableOpacity>
               ))
            ) : (
               <View style={styles.emptyStateWrap}>
                  <EmptyState
                     title="No Profiles Found"
                     subtitle="Try another search or switch category."
                     icon="sparkles-outline"
                  />
               </View>
            )}
         </ScrollView>
      </SafeAreaView>
   );
}

const createStyles = (palette: ReturnType<typeof useAppPalette>) =>
   StyleSheet.create({
      container: {
         flex: 1,
         backgroundColor: palette.background,
      },
      searchBar: {
         flexDirection: "row",
         alignItems: "center",
         backgroundColor: palette.surface,
         borderRadius: Radius.xl,
         paddingHorizontal: Spacing.lg,
         marginHorizontal: Spacing.xl,
         marginTop: Spacing.xl,
      },
      searchInput: {
         flex: 1,
         color: palette.textPrimary,
         paddingVertical: Spacing.md,
         paddingHorizontal: Spacing.sm,
      },
      filters: {
         paddingHorizontal: Spacing.md,
         marginBottom: Spacing.xl,
         gap: Spacing.sm,
      },
      filterButton: {
         minHeight: 44,
         paddingVertical: Spacing.sm,
         paddingHorizontal: Spacing.lg,
         borderRadius: Radius.pill,
         backgroundColor: palette.surface,
         alignItems: "center",
         justifyContent: "center",
      },
      activeFilter: {
         backgroundColor: palette.accent,
      },
      filterText: {
         fontSize: 12,
         fontWeight: "600",
      },
      filterTextActive: {
         color: "#FFFFFF",
      },
      filterTextInactive: {
         color: palette.textPrimary,
      },
      grid: {
         flexDirection: "row",
         flexWrap: "wrap",
         justifyContent: "space-around",
         paddingHorizontal: Spacing.md,
         paddingBottom: Spacing.x2,
      },
      cardWrapper: {
         width: "47%",
      },
      emptyStateWrap: {
         width: "100%",
         paddingTop: Spacing.xl,
      },
   });
