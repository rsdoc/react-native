import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';

const cards = [];

export default () => {
  const [show, setShow] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={{ opacity: show ? 1 : 0 }}>
          <Card card={cards[0]} />
        </View>
      </View>
      <Button
        title={show ? 'Show' : 'Hide'}
        onPress={() => setShow((prev) => !prev)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
