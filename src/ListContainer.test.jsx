import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import ListContainer from './ListContainer';

import tasks from '../fixtures/tasks';

jest.mock('react-redux');

describe('ListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  it('renders tasks', () => {
    const { getByText } = render((
      <ListContainer />
    ));

    expect(getByText(/아무 것도 하지 않기/));
  });
});
