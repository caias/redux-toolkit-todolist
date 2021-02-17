import React from 'react';
import { useSelector } from 'react-redux';
import { getCompleteList } from '@src/slice';

import Button from '@components/Button';
import TodoItem from '@components/TodoItem';

function CompleteTodo(): JSX.Element {
  const completeList = useSelector(getCompleteList);

  return (
    <div className="col-lg-12 m-t-20">
      <div className="card" style={{ width: '100%' }}>
        <div className="card-body">
          <h6 className="card-title">완료된 리스트</h6>
          <div className="list-group" style={{ marginTop: '70px' }}>
            <a className="list-group-item list-group-item-info list-group-item-action">
              <div className="d-flex w-100 justify-content-">
                <h5 className="mb-1">전체선택</h5>
              </div>
            </a>
            {
              completeList.map(item => <TodoItem {...item} type="complete" key={item.title} />)
            }
          </div>
          <div className="form-group">
            <Button text="복구하기" color="green" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompleteTodo;