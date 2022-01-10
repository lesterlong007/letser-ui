/**
 * @name routes
 * @author Lester
 * @date 2022-01-04 16:35
 */
import React from 'react';
import { RouteProps } from 'react-router-dom';
import Index from 'src/pages/Index/Index';

export const routes: RouteProps[] = [
  {
    path: '/index',
    element: <Index />
  },
  {
    path: '*',
    element: <Index />
  }
];
