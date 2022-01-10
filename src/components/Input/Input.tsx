/**
 * @name Input
 * @author Lester
 * @date 2021-06-03 15:08
 */

import React, { useState, InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import Icon from '../SvgIcon/SvgIcon';
import style from './style.module.less';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  clear?: boolean;
  search?: boolean;
  value?: string;
  onChange?: (val: any) => void;
}

const Input: React.FC<InputProps> = ({ className, value, onChange, clear, search = true, ...props }) => {
  const [val, setVal] = useState<string>(value || '');

  return (
    <div className={classNames(style.inputWrap, className)}>
      {search && <Icon className={style.searchIcon} name="sousuo" />}
      <input
        className={style.input}
        value={value || val}
        onChange={(event) => {
          setVal(event.target.value);
          onChange && onChange(event.target.value);
        }}
        {...props}
      />
      {clear && val && (
        <Icon
          className={style.clearIcon}
          name="qingchushuru"
          onClick={() => {
            setVal('');
            onChange && onChange('');
          }}
        />
      )}
    </div>
  );
};

export default Input;
