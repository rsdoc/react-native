import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';

export default () => {
  const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const animatedStyle = {
    transform: [
      {
        translateY: position.y,
      },
      {
        translateX: position.x,
      },
    ],
  };

  useEffect(() => {
    Animated.spring(position, {
      toValue: { x: 300, y: 500 },
      useNativeDriver: true,
    }).start();
  }, []);
  return <Animated.View style={[styles.ball, animatedStyle]}></Animated.View>;
};

const styles = StyleSheet.create({
  ball: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'teal',
    marginTop: 80,
    marginLeft: 30,
  },
});
