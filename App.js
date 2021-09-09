import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";

import { spacing } from "./src/utils/spacing";
import { coloring } from "./src/utils/coloring.js";

const isAndroid = Platform.OS === "android";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          iconColor="blue"
        />
        <View style={styles.listContainer}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  searchContainer: {
    padding: spacing.md,
    backgroundColor: coloring.goGreen,
  },
  listContainer: {
    flex: 1,
    padding: spacing.md,
    backgroundColor: coloring.goBlue,
  },
});
