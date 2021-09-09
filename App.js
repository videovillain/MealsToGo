import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, Home} from 'react-native';

import { spacing } from './src/utils/spacing';
import { coloring } from './src/utils/coloring.js';

const isAndroid = Platform.OS === 'android'

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <Text>search</Text>
        </View>
        <View style={styles.listContainer}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style='auto' />
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
