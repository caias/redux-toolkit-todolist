import React from 'react';
import cn from 'classnames';

interface IProps {
  text: string;
  color: 'gray' | 'blue' | 'green';
  onClick?: () => void;
}

function Button({
  text,
  color,
  onClick,
}: IProps): JSX.Element {

  const className = cn(
    'btn m-t-20 float-right',
    {
      'btn-secondary': color === 'gray',
      'btn-primary': color === 'blue',
      'btn-info': color === 'green',
    },
  );

  return (
    <button type="button" className={className} onClick={onClick}>{text}</button>
  );
}

export default Button;