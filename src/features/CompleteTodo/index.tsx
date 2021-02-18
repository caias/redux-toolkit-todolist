import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCompleteList,
  todoToggle,
  AllToggle,
  moveTodo,
} from '@src/slice';

import Button from '@components/Button';
import AllSelectButton from '@components/AllSelect';
import TodoItem from '@components/TodoItem';

const type = 'complete';

function CompleteTodo(): JSX.Element {
  const dispatch = useDispatch();
  const [isAllSelect, setAllSelect] = useState<boolean>(false);
  const completeList = useSelector(getCompleteList);

  useEffect(() => {
    if (!completeList.length) {
      setAllSelect(false);
    } else {
      setAllSelect(completeList.every(list => list.isActive));
    }
  }, [completeList]);

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
          <h6 className="card-title">완료된 리스트</h6>
          <div className="list-group" style={{ marginTop: '70px' }}>
            <AllSelectButton
              type="complete"
              isActive={isAllSelect}
              onClick={allToggle}
            />
            {
              completeList.map((item, index) => {
                return (
                  <TodoItem
                    {...item}
                    key={item.title}
                    type="complete"
                    onClick={() => onToggle(index)}
                  />
                );
              })
            }
          </div>
          <div className="form-group">
            <Button text="복구하기" color="green" onClick={() => dispatch(moveTodo({ type }))} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompleteTodo;