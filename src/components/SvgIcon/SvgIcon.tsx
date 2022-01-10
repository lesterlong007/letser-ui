/**
 * @name SvgIcon
 * @author Lester
 * @date 2021-05-08 14:28
 */

import React from 'react';
import classNames from 'classnames';

interface IndexProps {
  className?: string;
  name: string;
  onClick?: React.MouseEventHandler;
}

const SvgIcon: React.FC<IndexProps> = ({ className, name, onClick }) => {
  return (
    <svg className={classNames('icon', className)} aria-hidden="true" onClick={(event) => onClick && onClick(event)}>
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  );
};

export default SvgIcon;
