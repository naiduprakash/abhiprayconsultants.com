import { Box } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/shared/layout/header';

import Home from './pages/home';
import Maintainance from './pages/maintainance';

let routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about-us',
    component: Maintainance,
  },
  {
    path: '/services',
    component: Maintainance,
  },
  {
    path: '/projects',
    component: Maintainance,
  },
  {
    path: '/clients',
    component: Maintainance,
  },
  {
    path: '/career',
    component: Maintainance,
  },
  {
    path: '/contacts',
    component: Maintainance,
  },
];

export default function App() {
  return (
    <Router>
      <Box h="100%">
        <Header />
        <Box pt="4.5rem" h="100%">
          <Switch>
            {routes.map(({ path, component: Component }) => (
              <Route key={path} path={path} exact>
                <Component />
              </Route>
            ))}
            <Redirect to="/" />
          </Switch>
        </Box>
      </Box>
    </Router>
  );
}
