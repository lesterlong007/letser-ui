/**
 * @name DrawerItem
 * @author Lester
 * @date 2021-06-22 17:23
 */

import React from 'react';
import classNames from 'classnames';
import style from './style.module.less';

interface DrawItemProps {
  visible: boolean;
}

const DrawerItem: React.FC<DrawItemProps> = ({ visible, children }) => {
  return (
    <div
      className={classNames(style.drawItemWrap, {
        [style.show]: visible,
        [style.hide]: !visible
      })}
    >
      {children}
    </div>
  );
};

export default DrawerItem;
