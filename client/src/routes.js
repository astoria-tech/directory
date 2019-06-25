import React from 'react';
import { Switch, Route } from 'react-router';
import DirectoryIndex from './components/directory/DirectoryIndex';

const routes = (
  <div>
    <Switch>
      <Route path='/' component={DirectoryIndex} />
    </Switch>
  </div>
)

export default routes;
