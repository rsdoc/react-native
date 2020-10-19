// Animated Decay allows you to provide velocity and decceleration to animated value
import React, { useRef } from 'react';
import { Animated, StyleSheet, View, PanResponder } from 'react-native';

const DecayFns = () => {
  const animationRef = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        animationRef.extractOffset();
      },
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: animationRef.x,
            dy: animationRef.y,
          },
        ],
        { useNativeDriver: true }
      ),
      onPanResponderRelease: (_evt, { vx, vy }) => {
        Animated.decay(animationRef, {
          velocity: { x: vx, y: vy },
          deceleration: 0.997, //default value
          useNativeDriver: true,
        }).start();
      },
    })
  ).current;

  const animatedStyle = {
    transform: [{ translateX: animationRef.x }, { translateY: animationRef.y }],
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.box, animatedStyle]}
        {...panResponder.panHandlers}
      />
    </View>
  );
};

export default DecayFns;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'salmon',
  },
});
