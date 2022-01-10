/**
 * @name CarouselText
 * @author Lester
 * @date 2021-05-12 16:10
 */

import React, { useRef, useState, useEffect, MutableRefObject } from 'react';
import classNames from 'classnames';
import style from './style.module.less';

const CarouselText: React.FC = ({ children }) => {
  const [durationRate, setDurationRate] = useState<number>(1);
  const wrapRef: MutableRefObject<any> = useRef(null);
  const textRef: MutableRefObject<any> = useRef(null);

  // 根据需要移动时 内容文字宽度:容器宽度 来计算动画的时长 以保证不同长度的内容移动速度一致
  const textStyle = durationRate > 1 ? { animationDuration: `${durationRate * 4}s` } : {};

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
