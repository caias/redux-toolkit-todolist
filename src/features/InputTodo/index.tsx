import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoList } from '@src/slice';
import Button from '@components/Button';

function InputTodo(): JSX.Element {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const onAddTodo = () => {
    const inputValue = inputRef.current.value;
    // value가 없으면 return;
    if (!inputValue.length) { return; }
    // 30글자가 넘어간다면 30자로 맞춤
    if (inputValue.length > 30) {
      inputRef.current.value = inputValue.slice(0, 30);
    }
    // update payload todolist
    const todoItem = {
      title: inputRef.current.value,
      updateDate: new Date().toISOString().substr(0, 16).replace('T', ' '),
      isActive: false,
    };

    dispatch(addTodoList(todoItem));
    // input 초기화
    inputRef.current.value = '';
  };

  return (
    <div className="col-lg-12 m-t-20">
      <div className="card">
        <div className="card-body">
          <h6 className="card-title">리스트 추가</h6>
          <div className="form-group">
            <input type="text" ref={inputRef} className="form-control" placeholder="30자 이하로 입력해 주세요" />
            <Button text="추가하기" color="gray" onClick={onAddTodo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputTodo;