import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as MODEL from '@src/model';

const initialState: MODEL.IInitialData = {
  incomplete: [
    {
      title: 'javascript 리서치',
      updateDate: '2019-04-10 10:00',
      isActive: false,
    },
    {
      title: '테스트 케이스 작성하기',
      updateDate: '2019-04-10 11:00',
      isActive: false,
    },
    {
      title: 'github push 하기',
      updateDate: '2019-04-10 12:00',
      isActive: false,
    },
  ],
  complete: [
    {
      title: '회의실 잡기',
      updateDate: '2019-04-10 14:00',
      isActive: false,
    },
    {
      title: '저녁 회식 메뉴 정하기',
      updateDate: '2019-04-10 15:00',
      isActive: false,
    },
  ],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodoList(state, { payload }: PayloadAction<MODEL.ITodoList>) {
      state.incomplete = [...state.incomplete, { ...payload }];
    },
    todoToggle(state, { payload }: PayloadAction<MODEL.IPayloadTypeAndIndex>) {
      const { type, index } = payload;
      const isActvie = state[type][index].isActive;

      state[type][index].isActive = !isActvie;
    },
    AllToggle(state, { payload }: PayloadAction<MODEL.IPayloadTypeAndActive>) {
      const { type, active } = payload;
      state[type] = state[type].map(item => ({ ...item, isActive: !active }));
    },
    moveTodo(state, { payload }: PayloadAction<MODEL.ITodoType>) {
      const { type } = payload;
      const isIncomplete = type === 'incomplete';
      const target = isIncomplete ? 'complete' : 'incomplete';
      const activeList = state[type].filter(item => item.isActive);
      const inActiveList = state[type].filter(item => !item.isActive);

      state[type] = inActiveList;
      state[target] = [...state[target], ...activeList].map(item => ({ ...item, isActive: false }));
    },
  },
});

export const getIncompleteList = ({ todo }: MODEL.ISlice) => todo.incomplete;
export const getCompleteList = ({ todo }: MODEL.ISlice) => todo.complete;

export const { 
  addTodoList,
  todoToggle,
  AllToggle,
  moveTodo,
} = todoSlice.actions;
export default todoSlice;
