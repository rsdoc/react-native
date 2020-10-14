// Animating width and height will affect the layout
// we should avoid changing layout.
import React, { useRef } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

const AnimateWidthAndHeight = () => {
  // we should not modify the animated value directly, making use of useRef hook to return mutable obj ref
  const anim = useRef(new Animated.Value(100)).current;

  const startAnimation = () => {
    console.log('Touchable without feedbaack fn');

    // using Animated.timing(instance, config);
    Animated.timing(anim, {
      toValue: 200,
      duration: 1000,
      //   easing: Easing.bounce,
      useNativeDriver: false,
    }).start(() => {
      //   Animated.timing(anim, {
      //     toValue: 1.5,
      //     useNativeDriver: false,
      //   }).start();
    });
  };

  const animatedStyle = {
    width: anim,
    height: anim,
  };

  return (
    <TouchableWithoutFeedback onPress={startAnimation}>
      <Animated.View style={[styles.box, animatedStyle]} />
    </TouchableWithoutFeedback>
  );
};

export default AnimateWidthAndHeight;

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'salmon',
  },
});
