/**
 * @name CarouselText
 * @author Lester
 * @date 2021-05-12 16:10
 */

import React, { useRef, useState, useEffect, MutableRefObject } from 'react';
import classNames from 'classnames';
import style from './style.module.less';

interface CarouselTextProps {
  duration?: number;
}

const CarouselText: React.FC<CarouselTextProps> = ({ children, duration = 0 }) => {
  const [durationRate, setDurationRate] = useState<number>(1);
  const wrapRef: MutableRefObject<any> = useRef(null);
  const textRef: MutableRefObject<any> = useRef(null);

  /**
   * 获取屏幕宽度
   */
  const getClientWidth = () : number => {
    const docBody = document.body;
    const docEl: HTMLElement = document.documentElement;
    return docBody.clientWidth || docEl.clientWidth || window.innerWidth || 375;
  };

  /**
   * 当前屏幕相对标准屏幕比
   */
  const screenRate = getClientWidth() / 375;

  // 根据需要移动时 内容文字宽度:容器宽度 来计算动画的时长 以保证不同长度的内容移动速度一致
  const textStyle = durationRate > 1 ? { animationDuration: `${duration > 0 ? duration : durationRate * (4 + screenRate)}s` } : {};

  useEffect(() => {
    setDurationRate(textRef.current.clientWidth / wrapRef.current.clientWidth);
  }, []);

  return (
    <div className={style.wrap} ref={wrapRef}>
      <div style={{ ...textStyle }} className={classNames(style.content, durationRate > 1 && style.active)}>
        <span className={style.text} ref={textRef}>
          {children}
        </span>
        {durationRate > 1 && <span className={style.text}>{children}</span>}
      </div>
    </div>
  );
};

export default CarouselText;
