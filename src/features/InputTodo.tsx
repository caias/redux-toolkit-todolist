import React from 'react';
import Button from '@components/Button';

function InputTodo(): JSX.Element {
  return (
    <div className="col-lg-12 m-t-20">
      <div className="card">
        <div className="card-body">
          <h6 className="card-title">리스트 추가</h6>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="30자 이하로 입력해 주세요" />
            <Button text="추가하기" color="gray" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputTodo;