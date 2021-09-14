import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {CounterContext} from '../context/counter-context';

export default function CounterDisplay() {
  const [count] = useContext(CounterContext);

  return <Text style={styles.count}>{count}</Text>;
}

const styles = StyleSheet.create({
  count: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
