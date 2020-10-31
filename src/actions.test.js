import configureStore from 'redux-mock-store';

import thunk from 'redux-thunk';

import { fetchTasks } from './services/api';

import {
  loadTasks,
} from './actions';

jest.mock('./services/api');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('loadTasks', () => {
  it('', () => {

  });
});
