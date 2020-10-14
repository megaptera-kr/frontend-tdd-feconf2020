import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import ListContainer from './ListContainer';

import {
  loadTasks,
} from './actions';

export default function App() {
  const dispatch = useDispatch();
  // TODO: 초기실행
  // store tasks에 데이터 넣기 => dispatch 이용
  useEffect(() => {
    dispatch(loadTasks());
  }, []);

  return (
    <div>
      <h1>To-do</h1>
      <ListContainer />
    </div>
  );
}
