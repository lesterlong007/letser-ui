/**
 * @name Button
 * @author Lester
 * @date 2022-02-11 14:56
 */
import React from 'react';
import classNames from 'classnames';
import style from './style.module.less';

interface ButtonProps {
  htmlType?: 'submit' | 'reset' | 'button';
  type?: 'primary' | 'default';
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, htmlType = 'button', disabled, type, onClick } = props;
  return (
    <button
      className={classNames(style.btn, className, {
        [style.primary]: type === 'primary',
        [style.disabled]: disabled
      })}
      type={htmlType}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
