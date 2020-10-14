import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import tasks from '../fixtures/tasks';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  it('renders tasks', () => {
    const { getByText } = render(<App />);

    expect(dispatch).toBeCalled();

    expect(getByText(/아무 것도 하지 않기/)).not.toBeNull();
  });
});
