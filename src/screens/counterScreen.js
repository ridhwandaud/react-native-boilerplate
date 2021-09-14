import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {CounterContextProvider} from '../context/counter-context';
import CounterDisplay from '../components/counter-display';
import CounterButtons from '../components/counter-buttons';

export default function CounterView() {
  return (
    <CounterContextProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Counter</Text>
        <View>
          <CounterDisplay />
          <CounterButtons />
        </View>
      </View>
    </CounterContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    paddingTop: 24,
  },
});
