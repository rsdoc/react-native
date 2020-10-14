// Interpolate - animation data points within the range
// interpolate can control colors and background Color
import React, { useRef } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

const InterpolateAnim = () => {
  // we should not modify the animated value directly, making use of useRef hook to return mutable obj ref
  const interpolateAnim = useRef(new Animated.Value(0)).current;

  const backgroundColorInterpolate = interpolateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(255, 99, 71)', 'rgb(99, 71, 255)'],
  });

  const colorInterpolate = interpolateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(99, 71, 255)', 'rgb(255, 99, 71)'],
  });

  //   const rotateInterpolate = interpolateAnim.interpolate({
  //     inputRange: [0, 360],
  //     outputRange: ['0deg', '360deg'],
  //   });

  const animatedStyle = {
    backgroundColor: backgroundColorInterpolate,
    // transform: [{ rotate: rotateInterpolate }],
  };

  const textAnimatedStyle = {
    color: colorInterpolate,
  };

  const startAnimation = () => {
    console.log('Touchable without feedbaack fn');

    // using Animated.timing(instance, config);
    Animated.timing(interpolateAnim, {
      toValue: 1,
      duration: 1000,
      //   easing: Easing.bounce,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(interpolateAnim, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: false,
      }).start();
    });
  };

  return (
    <TouchableWithoutFeedback onPress={startAnimation}>
      <Animated.View style={[styles.box, animatedStyle]}>
        <Animated.Text style={textAnimatedStyle}>
          Hello Interpolation
        </Animated.Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default InterpolateAnim;

const styles = StyleSheet.create({
  box: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
