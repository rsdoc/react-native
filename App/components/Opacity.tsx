// opacity helps to control the visibility of elements
import React, { useRef } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

const OpacityFn = () => {
  // we should not modify the animated value directly, making use of useRef hook to return mutable obj ref
  const opacityAn = useRef(new Animated.Value(1)).current;

  const startAnimation = () => {
    console.log('Touchable without feedbaack fn');
    // we can directly set the value, but no animations
    // opacityAn.setValue(0);

    // using Animated.timing(instance, config);
    Animated.timing(opacityAn, {
      toValue: 0,
      duration: 1000,
      easing: Easing.bounce,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(opacityAn, {
        toValue: 1,
        useNativeDriver: false,
      }).start();
    });
  };

  const animatedStyle = {
    opacity: opacityAn,
  };

  return (
    <TouchableWithoutFeedback onPress={startAnimation}>
      <Animated.View style={[styles.box, animatedStyle]} />
    </TouchableWithoutFeedback>
  );
};

export default OpacityFn;

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'salmon',
  },
});
