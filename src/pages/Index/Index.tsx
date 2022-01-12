/**
 * @name Index
 * @author Lester
 * @date 2021-05-07 09:26
 */

import React, { useContext, useEffect } from 'react';
import { Context } from 'src/store';
import { CarouselText } from 'src/components';
import style from './style.module.less';

const Index: React.FC = () => {
  const { userInfo } = useContext(Context);

  useEffect(() => {
    console.log(userInfo);
  }, []);

  return (
    <div className={style.wrap}>
      <CarouselText>123大撒大撒阿萨苏打水阿萨苏打水的撒大啊实打实大厦按时的撒大阿斯顿撒阿斯顿爱德是阿斯顿</CarouselText>
    </div>
  );
};

export default Index;
