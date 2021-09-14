import types from '../actions/types';

const INITIAL_STATE = {
  list: [
    {id: '1', title: 'Task #1', state: 'TASK_INBOX'},
    {id: '2', title: 'Task #2', state: 'TASK_INBOX'},
    {id: '3', title: 'Task #3', state: 'TASK_INBOX'},
    {id: '4', title: 'Task #4', state: 'TASK_INBOX'},
  ],
};

function taskStateReducer(taskState) {
  return (state, action) => {
    return {
      ...state,
      list: state.list.map(task =>
        task.id === action.id ? {...task, state: taskState} : task,
      ),
    };
  };
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ARCHIVE_TASK:
      return taskStateReducer('TASK_ARCHIVED')(state, action);
    case types.PIN_TASK:
      return taskStateReducer('TASK_PINNED')(state, action);
    case types.UNARCHIVE_TASK:
      return taskStateReducer('TASK_INBOX')(state, action);
    default:
      return state;
  }
};
