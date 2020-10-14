import reducer from './reducer';

import {
  setTasks,
  deleteTask,
} from './actions';

import tasks from '../fixtures/tasks';

describe('reducer', () => {
  describe('setTasks', () => {
    it('changes tasks array', () => {
      const initialState = {
        tasks: [],
      };

      const state = reducer(initialState, setTasks(tasks));

      expect(state.tasks).not.toHaveLength(0);
    });
  });

  describe('deleteTask', () => {
    context('with existed task ID', () => {
      it('remove the task from tasks', () => {
        const state = reducer({
          tasks: [
            { id: 1, title: 'Task' },
          ],
        }, deleteTask(1));

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('without existed task ID', () => {
      it("doesn't work", () => {
        const state = reducer({
          tasks: [
            { id: 1, title: 'Task' },
          ],
        }, deleteTask(100));

        expect(state.tasks).toHaveLength(1);
      });
    });
  });
});
