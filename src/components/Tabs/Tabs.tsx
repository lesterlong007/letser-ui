/**
 * @name Tabs
 * @author Lester
 * @date 2021-06-10 14:52
 */

import React, { MutableRefObject, useRef, useState, useEffect } from 'react';
import classNames from 'classnames';
import style from './style.module.less';

interface TabsProps {
  tabs: any[];
  activeIndex?: number;
  onTabClick?: (index: number) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeIndex, onTabClick, children }) => {
  const [tabIndex, setTabIndex] = useState<number>(activeIndex || 0);
  const [warpWith, setWrapWith] = useState<number>(0);

  const wrapRef: MutableRefObject<any> = useRef(null);

  useEffect(() => {
    setWrapWith(wrapRef.current.clientWidth);
  }, []);

  return (
    <div className={style.tabWrap} ref={wrapRef}>
      <ul className={style.tabList}>
        {tabs.map((val: string, index: number) => (
          <li
            className={classNames(style.tabItem, {
              [style.active]: index === tabIndex
            })}
            key={val}
            onClick={() => {
              setTabIndex(index);
              onTabClick && onTabClick(index);
            }}
          >
            {val}
          </li>
        ))}
      </ul>
      <div className={style.tabContent}>
        <div className={style.contentList} style={{ transform: `translateX(-${tabIndex * warpWith}px)` }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
