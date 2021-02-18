import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getIncompleteList,
  todoToggle,
  AllToggle,
  moveTodo,
} from '@src/slice';

import Button from '@components/Button';
import AllSelectButton from '@components/AllSelect';
import TodoItem from '@components/TodoItem';

const type = 'incomplete';

function IncompleteTodo(): JSX.Element {
  const dispatch = useDispatch();
  const [isAllSelect, setAllSelect] = useState<boolean>(false);
  const incompleteList = useSelector(getIncompleteList);

  useEffect(() => {
    if (!incompleteList.length) {
      setAllSelect(false);
    } else {
      setAllSelect(incompleteList.every(list => list.isActive));
    }
  }, [incompleteList]);

  const onToggle = (index) => {
    dispatch(todoToggle({ type, index }));
  };

  const allToggle = useCallback(() => {
    dispatch(AllToggle({
      type,
      active: isAllSelect,
    }));
  }, [isAllSelect]);

  return (
    <div className="col-lg-12 m-t-20">
      <div className="card" style={{ width: '100%' }}>
        <div className="card-body">
          <h6 className="card-title">미완료 리스트</h6>
          <div className="list-group" style={{ marginTop: '70px' }}>
            <AllSelectButton
              type="incomplete"
              isActive={isAllSelect}
              onClick={allToggle}
            />
            {
              incompleteList.map((item, index) => {
                return (
                  <TodoItem
                    {...item}
                    key={item.title}
                    type="incomplete"
                    onClick={() => onToggle(index)}
                  />
                );
              })
            }
          </div>
          <div className="form-group">
            <Button text="완료하기" color="blue" onClick={() => dispatch(moveTodo({ type }))} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncompleteTodo;