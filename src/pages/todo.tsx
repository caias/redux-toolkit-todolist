import React from 'react';
import { Provider } from 'react-redux';
import appStore from '@src/appStore';
import todoSlice from '@src/slice';

import InputTodo from '@features/InputTodo';
import IncompleteTodo from '@features/IncompleteTodo';
import CompleteTodo from '@features/CompleteTodo';

const store = appStore({
  todo: todoSlice.reducer,
});

function Todo(): JSX.Element {
  return (
    <Provider store={store}>
      <InputTodo />
      <IncompleteTodo />
      <CompleteTodo />
    </Provider>
  );
}

export default Todo;