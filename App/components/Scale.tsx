// scale helps to control size of elements without affecting the layout
// use - negative value to flip the card - this how below two lib works
// npm react-native-invertible-scroll-view
// npm i react-native-reversed-flat-list
import React, { useRef } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

const ScaleFn = () => {
  // we should not modify the animated value directly, making use of useRef hook to return mutable obj ref
  const scaleAn = useRef(new Animated.Value(1)).current;

  const startAnimation = () => {
    console.log('Touchable without feedbaack fn');

    // using Animated.timing(instance, config);
    Animated.timing(scaleAn, {
      toValue: 2,
      duration: 500,
      easing: Easing.bounce,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(scaleAn, {
        toValue: 1.5,
        useNativeDriver: false,
      }).start();
    });
  };

  const animatedStyle = {
    transform: [
      {
        scaleY: scaleAn,
      },
    ],
  };

  return (
    <TouchableWithoutFeedback onPress={startAnimation}>
      <Animated.View style={[styles.box, animatedStyle]} />
    </TouchableWithoutFeedback>
  );
};

export default ScaleFn;

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 50,
    backgroundColor: 'salmon',
  },
});
