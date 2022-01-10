/**
 * @name App
 * @author Lester
 * @date 2021-06-01 15:48
 */

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from 'src/layout/Layout';
import Context from 'src/store';

const App: React.FC = () => {
  return (
    <Context>
      <Router>
        <Layout />
      </Router>
    </Context>
  );
};

export default App;
