import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../components/common/button';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>

      <Button text="Next" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
