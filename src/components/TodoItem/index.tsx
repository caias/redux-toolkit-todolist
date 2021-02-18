import React from 'react';
import cn from 'classnames';

interface IProps {
  type: 'incomplete' | 'complete';
  isActive: boolean;
  title: string;
  updateDate: string;
  onClick?: () => void;
}

function TodoItem({
  type,
  isActive,
  title,
  updateDate,
  onClick,
}: IProps): JSX.Element {
  const className = cn(
    'list-group-item list-group-item-action',
    {
      'list-group-item-primary': type === 'incomplete',
      'list-group-item-info': type === 'complete',
      'active': isActive,
    },
  );

  return (
    <a className={className} onClick={onClick}>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{title}</h5>
        <small>{updateDate}</small>
      </div>
    </a>
  );
}

export default TodoItem;