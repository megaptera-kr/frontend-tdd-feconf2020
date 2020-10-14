import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import List from './List';

// with tasks
// - List renders tasks...
// - List renders "완료" button to delete a task
// without tasks
// - List render no tasks message.
// TDD cycle: Red - Green - Refactoring

describe('List', () => {
  const handleClickDelete = jest.fn();

  function renderList(tasks) {
    return render((
      <List
        tasks={tasks}
        onClickDelete={handleClickDelete}
      />
    ));
  }

  context('with tasks', () => {
    const tasks = [
      { id: 1, title: '할일 #1' },
      { id: 2, title: '할일 #2' },
    ];

    it('renders tasks', () => {
      const { getByText } = renderList(tasks);

      expect(getByText(/할일 #1/)).not.toBeNull();
      expect(getByText(/할일 #2/)).not.toBeNull();
    });

    it('renders "완료" button to delete a task', () => {
      const { getAllByText } = renderList(tasks);

      const buttons = getAllByText('완료');

      fireEvent.click(buttons[0]);

      expect(handleClickDelete).toBeCalledWith(1);
    });
  });

  context('without tasks', () => {
    it('render no tasks message', () => {
      const tasks = [];

      const { getByText } = renderList(tasks);

      expect(getByText(/할 일이 없어요/)).not.toBeNull();
    });
  });
});
