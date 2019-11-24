import React from 'react';
import { Switch, Route } from 'react-router';
import DirectoryIndex from './components/directory/DirectoryIndex';
import About from './components/about/About';
import Sponsors from './components/sponsors/Sponsors';
import PresentationsArchive from './components/presentations_archive/PresentationsArchive';

const routes = (
  <div>
    <Switch>
      <Route path='/about' component= {About} />
      <Route path='/sponsors' component={Sponsors} />
      <Route path='/presentations_archive' component={PresentationsArchive} />
      <Route path='/' component={DirectoryIndex} />
    </Switch>
  </div>

)

export default routes;

// <Route path='/' component={DirectoryIndex} />