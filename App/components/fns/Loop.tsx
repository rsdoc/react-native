// Spring - Animation that operate of tension and friction
import React, { useRef } from 'react';
import { Animated, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const Loopfn = () => {
  // we should not modify the animated value directly, making use of useRef hook to return mutable obj ref
  const animationRef = useRef(new Animated.Value(1)).current;

  const rotateInterpolate = animationRef.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyle = {
    transform: [
      {
        rotate: rotateInterpolate,
      },
    ],
  };

  const startAnimation = () => {
    console.log('Touchable without feedbaack fn');

    Animated.loop(
      Animated.timing(animationRef, {
        toValue: 1,
        // duration: 1000,
        useNativeDriver: true,
      }),
      { iterations: 2 }
    ).start();
  };

  return (
    <TouchableWithoutFeedback onPress={startAnimation}>
      <Animated.View style={[styles.box, animatedStyle]} />
    </TouchableWithoutFeedback>
  );
};

export default Loopfn;

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    // borderRadius: 50,
    backgroundColor: 'salmon',
  },
});
