import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  setTasks,
  loadTasks,
} from './actions';

jest.mock('./services/api');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

test('loadTasks', async () => {
  const store = mockStore({});

  await store.dispatch(loadTasks());

  const actions = store.getActions();

  expect(actions[0]).toEqual(setTasks([]));
});
