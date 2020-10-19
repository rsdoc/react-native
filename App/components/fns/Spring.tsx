// Spring - Animation that operate of tension and friction
import React, { useRef } from 'react';
import { Animated, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const SpringFn = () => {
  // we should not modify the animated value directly, making use of useRef hook to return mutable obj ref
  const animationRef = useRef(new Animated.Value(1)).current;

  const animatedStyle = {
    transform: [
      {
        scale: animationRef,
      },
    ],
  };

  const startAnimation = () => {
    console.log('Touchable without feedbaack fn');

    // default friction value is 7
    // if friction < 7 -> fast animation
    // tension - energy in the spring - 4o is default value of tension
    // higher the tension value more spring the value will be
    Animated.spring(animationRef, {
      toValue: 2,
      friction: 2,
      tension: 160,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animationRef, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <TouchableWithoutFeedback onPress={startAnimation}>
      <Animated.View style={[styles.box, animatedStyle]} />
    </TouchableWithoutFeedback>
  );
};

export default SpringFn;

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'salmon',
  },
});
