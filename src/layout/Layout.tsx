/**
 * @name Layout
 * @author Lester
 * @date 2021-05-07 10:35
 */

import React from 'react';
import { Route, Routes, RouteProps } from 'react-router-dom';
import { routes } from 'src/pages/routes';

const Layout: React.FC = () => {
  return (
    <Routes>
      {routes.map((item: RouteProps) => (
        <Route key={`rt${item.path}`} path={item.path} element={item.element} />
      ))}
    </Routes>
  );
};

export default Layout;
