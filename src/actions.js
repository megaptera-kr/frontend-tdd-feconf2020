import {
  fetchTasks,
} from './services/api';

export function setTasks(tasks) {
  return {
    type: 'setTasks',
    payload: {
      tasks,
    },
  };
}

export function loadTasks() {
  return async (dispatch) => {
    const tasks = await fetchTasks();
    dispatch(setTasks(tasks.slice(0, 10)));
  };
}

export function deleteTask(id) {
  return {
    type: 'deleteTask',
    payload: {
      id,
    },
  };
}
