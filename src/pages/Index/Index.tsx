/**
 * @name Index
 * @author Lester
 * @date 2021-05-07 09:26
 */

import React, { useContext, useEffect } from 'react';
import { Context } from 'src/store';
import style from './style.module.less';

const Index: React.FC = () => {
  const { userInfo } = useContext(Context);

  useEffect(() => {
    console.log(userInfo);
  }, []);

  return (
    <div className={style.wrap}>
      1323
    </div>
  );
};

export default Index;
