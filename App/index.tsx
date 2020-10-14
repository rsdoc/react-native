import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import OpacityFn from './components/Opacity';
import ScaleFn from './components/Scale';
import TranslateFn from './components/Translate';
import AnimateWidthAndHeight from './components/WidthHeight';
import InterpolateAnim from './components/InterpolateAnim';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to working on your app!</Text>
      <StatusBar style="auto" />
      {/* <OpacityFn /> */}
      {/* <TranslateFn /> */}
      {/* <ScaleFn /> */}
      {/* <AnimateWidthAndHeight /> */}
      <InterpolateAnim />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
