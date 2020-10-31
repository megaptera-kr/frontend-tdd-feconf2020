import axios from 'axios';

const TASKS_URL = 'https://jsonplaceholder.typicode.com/todos';

export async function fetchTasks() {
  const { data } = await axios.get(TASKS_URL);
  return data;
}

export default {};
