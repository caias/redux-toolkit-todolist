export type todoType = 'incomplete' | 'complete';

export interface ITodoType {
  type: todoType;
}

export interface IPayloadTypeAndIndex extends ITodoType {
  index: number;
}

export interface IPayloadTypeAndActive extends ITodoType {
  active: boolean;
}

export interface ITodoList {
  title: string;
  updateDate: string;
  isActive: boolean;
}

export interface IInitialData {
  incomplete: Array<ITodoList>,
  complete: Array<ITodoList>,
}

export interface ISlice {
  todo: IInitialData;
}