/**
 * @name Index
 * @author Lester
 * @date 2021-05-07 09:26
 */

import React, { useContext, useEffect } from 'react';
import { Context } from 'src/store';
import { CarouselText } from 'src/components';
import { words } from 'src/utils/data';
import style from './style.module.less';

const Index: React.FC = () => {
  const { userInfo } = useContext(Context);

  useEffect(() => {
    console.log(userInfo);
  }, []);

  return (
    <div className={style.wrap}>
      <CarouselText>123</CarouselText>
      念城南，待君还，花开遍地伴君安< br/>
      三月春已来，不知君何在，城南花已开，不见君来采；< br/>
      城南花已败，唯憾君未来，来年春复在，盼君来采摘；< br/>
      三月春又来，南燕巢还在，城南花复开，待君翩翩来；< br/>
      四月春未殆，城南花仍开，知君欲前来，花开永不败。
      <ul>
        {
          words.map((val: string) => <li key={val}>{val}</li>)
        }
      </ul>
    </div>
  );
};

export default Index;
