import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SearchUserPage from './pages/SearchUserPage';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/search" component={SearchUserPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
