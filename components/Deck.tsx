import { useStoreActions, useStoreState } from 'easy-peasy';
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  PanResponder,
  useWindowDimensions,
  Button,
  Dimensions,
  UIManager,
  LayoutAnimation,
} from 'react-native';

const Deck = ({
  data,
  renderCard,
  onSwipeLeft,
  onSwipeRight,
  renderNoMoreCards,
}) => {
  const { counter } = useStoreState((state) => state);
  const { setCounter } = useStoreActions((actions) => actions);

  const position = useRef(new Animated.ValueXY()).current;
  const SCREEN_WIDTH = useWindowDimensions().width;
  const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
  const SWIPE_OUT_DURATION = 250;

  const resetPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  };

  const forceSwipe = (direction: string) => {
    Animated.timing(position, {
      toValue: {
        x: direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH,
        y: 0,
      },
      duration: SWIPE_OUT_DURATION,
      useNativeDriver: false,
    }).start(() => {
      onSwipeCompletion(direction);
    });
  };

  const onSwipeCompletion = (direction: string) => {
    // console.log('Swipe completed', direction);
    const item = data[counter];
    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
    // setting position back to zero for swiped card
    setCounter();
    position.setValue({ x: 0, y: 0 });
  };

  const panResponder = useRef(
    PanResponder.create({
      // PanResponder is self contained object - no interaction with state

      // this function is called anytime user touches or taps on the screen
      // if the return value is true - this means we are allowing panresponder for this view
      onStartShouldSetPanResponder: (_evt, _gestureState) => true,

      // this function is called when user starts to drag around the screen
      onPanResponderMove: (_event, gestureState) => {
        // remote dev should be enabled
        //   debugger;

        // { below explaination } = gestureState
        // dx, dy -> total distance element has convered in single gesture
        // moveX, moveY -> where the user is clicking down and pressing over
        // vx, vy -> how quickly the user  is moving over
        // number of active touches -> TODO
        // console.log('onPanResponderMove', {
        //   x: gestureState.dx,
        //   y: gestureState.dy,
        // });
        position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },

      // when user releases the touch
      onPanResponderRelease: (_evt, gestureState) => {
        if (SWIPE_THRESHOLD < gestureState.dx) {
          // swipe right
          //   console.log('swipe right');
          forceSwipe('right');
        } else if (-SWIPE_THRESHOLD > gestureState.dx) {
          // swipe left
          //   console.log('swipe left');
          forceSwipe('left');
        } else {
          resetPosition();
        }
      },
    })
  ).current;

  useEffect(() => {
    // console.log('useeffect ', counter);
    // fetch('https://jsonplaceholder.typicode.com/photos')
    //   .then((res) => res.json())
    //   .then((data) => setPhotos(data))
    //   .catch((err) => {
    //     console.log(err.message);
    //     setPhotos([]);
    //   });

    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }, []);

  const getCardStyle = () => {
    // making use of interpolation - whenever we want to change other properties based on one property

    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg'],
    });

    return {
      ...position.getLayout(),
      transform: [
        {
          rotate,
        },
      ],
    };
  };

  const renderCards = () => {
    if (counter >= data.length) {
      return renderNoMoreCards();
    }

    return data
      .map((item: any, dataIndex: number) => {
        if (dataIndex < counter) {
          // this means card is swiped either left or right
          return null;
        }

        if (dataIndex === counter) {
          return (
            <Animated.View
              key={item.id}
              // style={[animatedStyle]}
              style={[getCardStyle(), styles.cardStyle]}
              {...panResponder.panHandlers}
            >
              {renderCard(item)}
            </Animated.View>
          );
        }

        return (
          <Animated.View
            key={item.id}
            style={[styles.cardStyle, { marginTop: 5 * (dataIndex - counter) }]}
          >
            {renderCard(item)}
          </Animated.View>
        );
      })
      .reverse();
  };

  return (
    <View style={styles.container}>
      {/* <Button
        title={`set ${counter}`}
        onPress={() => setCounter(counter + 1)}
      /> */}
      {renderCards()}
    </View>
  );
};

Deck.defaultProps = {
  onSwipeRight: () => {
    // console.log('Swiped right from default prop');
  },
  onSwipeLeft: () => {
    // console.log('Swiped left from default prop');
  },
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  cardStyle: {
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
  //   card: {
  //     width: 300,
  //     height: 300,
  //     backgroundColor: 'teal',
  //     borderRadius: 20,
  //     shadowColor: '#000',
  //     shadowOffset: {
  //       width: 0,
  //       height: 4,
  //     },
  //     shadowOpacity: 0.3,
  //     shadowRadius: 4.65,
  //     elevation: 8,
  //   },
});

export default Deck;
