import { StoreProvider } from 'easy-peasy';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  useWindowDimensions,
} from 'react-native';

import { Card, Button, Icon } from 'react-native-elements';
import Counter from './components/Counter';

// import Ball from './components/Ball';
import Deck from './components/Deck';
import store from './store';

const DATA = [
  {
    id: 1,
    text: 'Card #1',
    uri:
      'https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1690&q=400',
  },
  {
    id: 2,
    text: 'Card #2',
    uri:
      'https://images.unsplash.com/photo-1602497676835-3f500e2ecf71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  },
  {
    id: 3,
    text: 'Card #3',
    uri:
      'https://images.unsplash.com/photo-1602460367673-091b70ba104a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3400&q=80',
  },
  {
    id: 4,
    text: 'Card #4',
    uri:
      'https://images.unsplash.com/photo-1602338250749-6bb126b1ebc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  },
  {
    id: 5,
    text: 'Card #5',
    uri: 'https://source.unsplash.com/random/400x300',
  },
  {
    id: 6,
    text: 'Card #6',
    uri:
      'https://images.unsplash.com/photo-1602338038325-9b0efb86cc8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2253&q=80',
  },
  {
    id: 7,
    text: 'Card #7',
    uri:
      'https://images.unsplash.com/photo-1601758124096-1fd661873b95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
  },
  {
    id: 8,
    text: 'Card #8',
    uri:
      'https://images.unsplash.com/photo-1602424847711-2d2e831afc5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  },
];

export default function App() {
  console.log('App is rerendered');
  const SCREEN_WIDTH = useWindowDimensions().width;
  const renderCard = (item) => {
    return (
      <Card
        key={item.id}
        containerStyle={{
          width: SCREEN_WIDTH - 30,
        }}
      >
        <Card.Title>{item.text}</Card.Title>
        <Card.Divider />
        <Card.Image source={{ uri: item.uri }} resizeMode="cover" />
        <Card.Divider />
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            marginTop: 10,
          }}
          title="View Now"
        />
      </Card>
    );
  };

  const renderNoMoreCards = () => (
    <Card containerStyle={{ width: SCREEN_WIDTH - 10, marginBottom: 30 }}>
      <Card.Title>No more card</Card.Title>
      <Card.Divider />
    </Card>
  );

  return (
    <StoreProvider store={store}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingTop: Platform.OS === 'android' ? 50 : 0,
        }}
      >
        <View style={styles.container}>
          <StatusBar style="auto" />
          {/* <Text>Hello Animated API</Text> */}
          {/* <Ball /> */}
          <Deck
            data={DATA}
            renderCard={renderCard}
            renderNoMoreCards={renderNoMoreCards}
          />
          {/* <Counter /> */}
        </View>
      </SafeAreaView>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
