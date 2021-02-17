import { createSlice } from '@reduxjs/toolkit';

interface ITodoList {
  title: string;
  updateDate: string;
  isActive: boolean;
}

interface IInitialData {
  incomplete: Array<ITodoList>,
  complete: Array<ITodoList>,
}

interface ISlice {
  todo: IInitialData;
}

const initialState: IInitialData = {
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
  reducers: {},
});

export const getIncompleteList = ({ todo }: ISlice) => todo.incomplete;
export const getCompleteList = ({ todo }: ISlice) => todo.complete;


export default todoSlice;
