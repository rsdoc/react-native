import { useStoreActions, useStoreState } from 'easy-peasy';
import React, { useState } from 'react';
import { Text, Button } from 'react-native';

const Counter = () => {
  // const [counter, setCounter] = useState(0);
  const { counter } = useStoreState((state) => state);
  const { setCounter } = useStoreActions((actions) => actions);

  return (
    <>
      <Text>The count is {counter}</Text>
      <Button title="Click me" onPress={() => setCounter(counter + 1)} />
    </>
  );
};

export default Counter;
