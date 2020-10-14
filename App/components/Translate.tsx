// translate helps to move element without affecting the layout
import React, { useRef } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

const TranslateFn = () => {
  // we should not modify the animated value directly, making use of useRef hook to return mutable obj ref
  const translateAn = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    console.log('Touchable without feedbaack fn');

    // using Animated.timing(instance, config);
    Animated.timing(translateAn, {
      toValue: 200,
      duration: 1000,
      easing: Easing.bounce,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(translateAn, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
    });
  };

  const animatedStyle = {
    transform: [
      {
        translateY: translateAn,
      },
    ],
  };

  return (
    <TouchableWithoutFeedback onPress={startAnimation}>
      <Animated.View style={[styles.box, animatedStyle]} />
    </TouchableWithoutFeedback>
  );
};

export default TranslateFn;

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'salmon',
  },
});
