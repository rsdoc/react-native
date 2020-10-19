// Events - Helper function - takes the configuration, traverse the configuration and then call setValue on animations
import React, { useRef } from 'react';
import { Animated, StyleSheet, View, ScrollView } from 'react-native';

const EventsFn = () => {
  // we should not modify the animated value directly, making use of useRef hook to return mutable obj ref
  const animationRef = useRef(new Animated.Value(0)).current;

  const backgroundInterpolate = animationRef.interpolate({
    inputRange: [0, 3000],
    outputRange: ['rgb(255, 99, 71)', 'rgb(99, 71, 255)'],
  });

  const animatedStyle = {
    backgroundColor: backgroundInterpolate,
  };

  const startAnimation = (e) =>
    animationRef.setValue(e.nativeEvent.contentOffset.y);
  // Animated.event(
  //   [
  //     {
  //       nativeEvent: {
  //         contentOffset: {
  //           y: animationRef,
  //         },
  //       },
  //     },
  //   ],
  //   {
  //     useNativeDriver: true,
  //   }
  // );

  return (
    <View style={styles.container}>
      {/*  we are calling on scroll event after every 16 ms maintaing 60fps
      animation */}
      <ScrollView scrollEventThrottle={16} onScroll={startAnimation}>
        <Animated.View style={[styles.content, animatedStyle]} />
      </ScrollView>
    </View>
  );
};

export default EventsFn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    height: 3000,
  },
});
