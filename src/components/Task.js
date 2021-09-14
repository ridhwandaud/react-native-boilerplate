import * as React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

function Task({task: {id, title, state}, onArchiveTask}) {
  return (
    <TouchableOpacity
      style={styles.taskContainer}
      onPress={() => onArchiveTask(id)}>
      <Text
        style={state === 'TASK_ARCHIVED' ? styles.underline : styles.normal}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    padding: 16,
  },
  normal: {
    textDecorationLine: 'none',
  },
  underline: {
    textDecorationLine: 'line-through',
  },
});

export default Task;
