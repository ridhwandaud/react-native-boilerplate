// src/components/common/button.stories.jsx
import React from 'react';
import {storiesOf} from '@storybook/react-native';

// I import my component here
import Button from './button';
import {View, StyleSheet} from 'react-native';

// here I define that I want to create stories with the label "Buttons",
// this will be the name in the storybook navigation

const buttonStories = storiesOf('Buttons', module);

// then I add a story with the name default view, I can add multiple stories to button stories
buttonStories.add('default view', () => (
  <View style={styles.container}>
    <Button onPress={() => null} text="Default Button" />
  </View>
));

buttonStories.add('loading view', () => (
  <View style={styles.container}>
    <Button onPress={() => null} text="Default Button" loading={true} />
  </View>
));

buttonStories.add('disable view', () => (
  <View style={styles.container}>
    <Button onPress={() => null} text="Default Button" disabled={true} />
  </View>
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});
