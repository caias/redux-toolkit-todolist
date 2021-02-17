import React from 'react';
import { useSelector } from 'react-redux';
import { getIncompleteList } from '@src/slice';

import Button from '@components/Button';
import TodoItem from '@components/TodoItem';

function IncompleteTodo(): JSX.Element {
  const incompleteList = useSelector(getIncompleteList);

  return (
    <div className="col-lg-12 m-t-20">
      <div className="card" style={{ width: '100%' }}>
        <div className="card-body">
          <h6 className="card-title">미완료 리스트</h6>
          <div className="form-group">
            <select className="form-control float-right" style={{ width: '150px' }}>
              <option>제목순</option>
              <option>최신순</option>
            </select>
          </div>
          <div className="list-group" style={{ marginTop: '70px' }}>
            <a className="list-group-item list-group-item-primary list-group-item-action">
              <div className="d-flex w-100 justify-content-">
                <h5 className="mb-1">전체선택</h5>
              </div>
            </a>
            {
              incompleteList.map(item => <TodoItem {...item} type="incomplete" key={item.title} />)
            }
          </div>
          <div className="form-group">
            <Button text="완료하기" color="blue" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncompleteTodo;