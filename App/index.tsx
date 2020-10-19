import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import OpacityFn from './components/Opacity';
import ScaleFn from './components/Scale';
import TranslateFn from './components/Translate';
import AnimateWidthAndHeight from './components/WidthHeight';
import InterpolateAnim from './components/InterpolateAnim';
import SpringFn from './components/fns/Spring';
import Loopfn from './components/fns/Loop';
import EventsFn from './components/fns/Events';
import DecayFns from './components/fns/Decay';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to working on your app!</Text> */}
      <StatusBar style="auto" />
      {/* <OpacityFn /> */}
      {/* <TranslateFn /> */}
      {/* <ScaleFn /> */}
      {/* <AnimateWidthAndHeight /> */}
      {/* <InterpolateAnim /> */}
      {/* <SpringFn /> */}
      {/* <Loopfn /> */}
      {/* <EventsFn /> */}
      <DecayFns />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
