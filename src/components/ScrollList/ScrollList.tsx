/**
 * @name ScrollList
 * @author Lester
 * @date 2021-06-02 14:07
 */

import React, { useRef, useState, MutableRefObject } from 'react';
import classNames from 'classnames';
import style from './style.module.less';

interface ScrollListProps {
  onLoad: () => Promise<any>;
  onRefresh?: () => void;
  backgroundColor?: string;
  loaded: boolean;
}

const ScrollList: React.FC<ScrollListProps> = ({ children, onLoad, loaded, onRefresh, backgroundColor }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [translateY, setTranslateY] = useState<number>(0);
  const [startY, setStartY] = useState<number>(0);

  const scrollRef: MutableRefObject<any> = useRef();
  const contentRef: MutableRefObject<any> = useRef();
  const headerRef: MutableRefObject<any> = useRef();
  const flagRef: MutableRefObject<any> = useRef();

  /**
   * 加载更多
   */
  const loadMore = async () => {
    setLoading(true);
    await onLoad();
    setLoading(false);
  };

  /**
   * 处理滚动事件 判断滚动到底部
   */
  const scroll = () => {
    let flag = true;
    return () => {
      if (flag) {
        flag = false;
        setTimeout(() => {
          flag = true;
          const wrapHeight: number = scrollRef.current.clientHeight;
          const contentHeight: number = contentRef.current.clientHeight;
          const scrollDistance: number = scrollRef.current.scrollTop;
          if (wrapHeight + scrollDistance > contentHeight - 10) {
            console.log('底部了');
            !loaded && loadMore();
          }
        }, 100);
      }
    };
  };

  /**
   * 滑动处理 0 移动端 touch 1 PC端 mouse
   * @param type
   */
  const move = (type: string) => {
    let flag = true;
    return (event: any) => {
      if (flag) {
        flag = false;
        setTimeout(() => {
          flag = true;
          const scrollDistance: number = scrollRef.current.scrollTop;
          const newY: number = type === 'touch' ? event.targetTouches[0].clientY : event.clientY;
          const distance: number = newY - startY;
          setTranslateY(scrollDistance === 0 && flagRef.current && distance > 0 ? distance : 0);
        }, 50);
      }
    };
  };

  /**
   * 开始事件处理
   * @param clientY
   */
  const start = (clientY: number) => {
    setStartY(clientY);
    if (onRefresh) {
      flagRef.current = true;
    }
  };

  /**
   * 触摸手势结束处理
   */
  const end = () => {
    if (translateY > 0) {
      onRefresh && onRefresh();
    }
    setTranslateY(0);
    flagRef.current = false;
  };

  return (
    <div
      ref={scrollRef}
      className={style.scrollWrap}
      onScroll={scroll()}
      onMouseDown={(e) => start(e.clientY)}
      onMouseMove={move('mouse')}
      onMouseUp={end}
      onMouseLeave={end}
      onTouchStart={(e) => start(e.targetTouches[0].clientY)}
      onTouchMove={move('touch')}
      onTouchEnd={end}
      onTouchCancel={end}
    >
      <header ref={headerRef} className={classNames(style.tipsWrap, style.refreshWrap)}>
        <span className={style.line} />
        <span className={style.tipsText}>下拉刷新</span>
        <span className={style.line} />
      </header>
      <div
        ref={contentRef}
        className={style.contentWrap}
        style={{ transform: `translateY(${translateY}px)`, backgroundColor: backgroundColor || 'white' }}
      >
        {children}
        <footer className={style.tipsWrap}>
          <span className={style.line} />
          <span className={style.tipsText}>{loading ? '拼命加载中' : '没有更多啦'}</span>
          <span className={style.line} />
        </footer>
      </div>
    </div>
  );
};

export default ScrollList;
