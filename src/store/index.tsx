/**
 * @name index
 * @author Lester
 * @date 2021-05-10 19:56
 */

import React, { createContext, useState, Context as ContextProps } from 'react';

export const Context: ContextProps<any> = createContext({});

const StoreContext: React.FC = ({ children }) => {
  const [userInfo, setUserInfo] = useState<any>({});

  return (
    <Context.Provider
      value={{
        userInfo,
        setUserInfo: (state: any) => setUserInfo({ ...userInfo, ...state })
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default StoreContext;
