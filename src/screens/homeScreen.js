import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {connect} from 'react-redux';
import {archiveTask} from '../actions/taskActions';
import Task from '../components/Task';

function HomeScreen({tasks, onArchiveTask}) {
  const events = {
    onArchiveTask,
  };
  return (
    <View style={styles.container}>
      {tasks.map(task => (
        <Task task={task} {...events} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// export default HomeScreen;

const mapStateToProps = ({tasks}) => {
  let list = tasks.list ? tasks.list : tasks;
  return {
    tasks: list,
  };
};

export default connect(mapStateToProps, dispatch => ({
  onArchiveTask: id => dispatch(archiveTask(id)),
}))(HomeScreen);
